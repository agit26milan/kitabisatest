import React from 'react'

import styles from '../../styles/Home.module.css'
import {Row, Col, Card, CardBody, CardImg, Progress, DropdownMenuProps} from 'reactstrap'
import styled from 'styled-components'
import { CampaignProps, ParamUrlProps } from '../../interfaces/campaigns'
import { formatMoney, handleParamUrl } from '../../utils/common'
import useHomePage from './hooks'
import DropdownComponent from '../../components/Dropdown'
import { useRouter } from 'next/router'
import Seo from '../../components/Seo'
import KitabisaImage from '../../assets/images/kitabisa.png'
type MoneyTextProps = {
    isBold?: boolean,
    alignLeft?:boolean
}

const Column = styled(Col)`
margin-top: 10px
`
const CardShadow = styled(Card)`
box-shadow: rgb(152 152 152 / 20%) 0px 2px 8px 1px
`

const TitleText = styled.span`
    font-weight: 600;
    font-size: 1rem;
    overflow: hidden;
    overflow-wrap: break-word;
    color: rgb(74, 74, 74);
    margin: 0.25em 0em;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
`


const MoneyText = styled.span`
font-weight: ${(props: MoneyTextProps) => props.isBold ? "600" : "400"};
font-size: 15px;
color: rgb(74, 74, 74);
margin-left: ${(props: MoneyTextProps) => props.alignLeft ? 'auto' : 'none' }
`

const CardBodyCustom = styled(CardBody)`
padding: 1rem 0.5rem;
`

const CustomProgresBar = styled(Progress)`
margin: 15px 0px;
`

const FlexCol = styled(Col)`
display: flex
`

const FilterContainer = styled.div`
display: flex;
margin: 0px 20px;
width:100% 
`

const DropdownContainer = styled.div`
margin-left: auto
`

const HomePage = () => {
    const funcHomepage = useHomePage()
    const router = useRouter()
    const [listCampaigns, setListCampaigns] = React.useState([])
    const [querySearch, setQuerySearch] = React.useState({
        sort: null
    })
    const [loading, setLoading] = React.useState(true)
    const filterBy = [{label: 'Default', value: null}, {label: 'Donation Goal (ASC)', value: 'donation-asc'}, {label: 'Donation Goal (DSC)', value: 'donation-dsc'}, {label: 'Day Left (ASC)', value: 'day-asc'}, {label: 'Day Left (DSC)', value: 'day-dsc'}]
    const [selectSort, setSelectSort] = React.useState(filterBy[0].label)
    const getCampaign = async (params:any) => {
        setLoading(true)
        const filter = filterBy.find((sort:DropdownMenuProps) => sort.value === params.sort)
        if(filter) {
            setSelectSort(filter.label)
        } else {
            setSelectSort(filterBy[0].label)
        }
        const response = await funcHomepage.getCampaignHandle(params)
        setLoading(false)
        setListCampaigns(response)
    }

    const onClickDropdown = (d:DropdownMenuProps) => {
        let newQuerySearch = {...querySearch, sort:d.value}
        setQuerySearch(newQuerySearch)
        funcHomepage.handleSort(newQuerySearch)
    }

    React.useEffect(() => {
        getCampaign(router.query)
    }, [JSON.stringify(router.query)])


    return (
        <main className={styles.main}>
        <Seo title='Kitabisa.com' description='Kitabisa.com - Situs Donasi Terbesar dan Terpercaya di Indonesia' image={KitabisaImage} />
        {loading ? null : 
        <React.Fragment>
            <FilterContainer>
            <DropdownContainer>
            <DropdownComponent onClick={onClickDropdown} label={selectSort} data={filterBy} />
            </DropdownContainer>
        </FilterContainer>
        <Row>
        {listCampaigns.map((campaign: CampaignProps, index) => (
                <Column key={index} xs={12} md={12} sm={12} xl={4} lg={4} >
                <CardShadow>
                    <CardImg src={campaign.image} />
                    <CardBodyCustom>
                    <TitleText>
                        {campaign.title}
                    </TitleText>
                    <CustomProgresBar barStyle={funcHomepage.handleBar(campaign.donation_percentage)} animated value={(campaign.donation_percentage * 100)} />
                    <Row>
                    <Col>
                    <MoneyText isBold >
                        {formatMoney(campaign.donation_received)}
                    </MoneyText>
                    </Col>
                    <FlexCol  >
                    <MoneyText isBold alignLeft >
                        {funcHomepage.handleExpired(campaign.expired)}
                    </MoneyText>
                    </FlexCol>
                
                    </Row>
                  
                    </CardBodyCustom>
                </CardShadow>
                </Column>
        ))}
      
        </Row>
        </React.Fragment>}
        
      </main>
    )
}


export default HomePage