import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs'
import { requestApi } from '../../utils/request'
import { handleParamUrl } from '../../utils/common'
import { useRouter } from 'next/router'
import {useState} from 'react'

const useHomePage = () => {
    const router = useRouter()
    // const [dataCampaign, setDataCampaign] = useState({})
    const handleExpired = (expired?:number) => {
        if(expired && typeof expired === 'number') {
            dayjs.extend(relativeTime)
            const expiredDate = dayjs.unix(expired).format()
            return dayjs(expiredDate).fromNow(true) + " lagi"
        }
       return null
    }

    const getCampaignHandle = async (params?:object) => {
        const response = await requestApi('/v1/campaigns', 'GET', {}, params )
        if(response.success) {
            return response.data.data
        } else {
            return []
        }
       
    }

    const handleBar = (percentage?:number) => {
        if(percentage && typeof percentage === 'number') {
            if(percentage >= 1) {
                return {backgroundColor: 'pink'}
            }
            return {backgroundColor: '#a9a9a9'}
        }
        return {backgroundColor: '#a9a9a9'}
    }

    const handleSort = (querySearch:object) => {
        const paramUrl = handleParamUrl('', querySearch)
        router.push({
            pathname: '/',
            search: paramUrl
        })
        return paramUrl
    }

    return {
        handleExpired,
        getCampaignHandle,
        handleBar,
        handleSort,
        // dataCampaign
    }

}

export default useHomePage