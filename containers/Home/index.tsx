import React from 'react'
import Image from 'next/image'

import styles from '../../styles/Home.module.css'
import {Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Button, CardImg, Progress} from 'reactstrap'
import { requestApi } from '../../utils/request'
import styled from 'styled-components'
import { CampaignProps } from '../../interfaces/campaigns'
import { formatMoney } from '../../utils/common'
import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs'
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
margin: 15px 0px
`

const FlexCol = styled(Col)`
display: flex
`

const HomePage = () => {
    const [listCampaigns, setListCampaigns] = React.useState([])
    const getCampaignHandle = async () => {
        const response = await requestApi('/v1/campaigns', 'GET')
        if(response.success) {
            setListCampaigns(response.data.data)
        }
        console.log(response, 'mantap')
    }

    const handleExpired = (expired?:number) => {
        if(expired && typeof expired === 'number') {
            dayjs.extend(relativeTime)
            const expiredDate = dayjs.unix(expired).format()
            return dayjs(expiredDate).fromNow(true) + " lagi"
        }
       return null
    }

    React.useEffect(() => {
        getCampaignHandle()
    }, [])
    console.log(listCampaigns, 'mantul')
    return (
        <main className={styles.main}>
        <Row>
        {listCampaigns.map((campaign: CampaignProps, index) => (
                <Column key={index} xs={12} md={12} sm={12} xl={4} lg={4} >
                <CardShadow>
                    <CardImg src={campaign.image} />
                    <CardBodyCustom>
                    <TitleText>
                        {campaign.title}
                    </TitleText>
                    <CustomProgresBar animated value={(campaign.donation_percentage * 100)} />
                    <Row>
                    <Col>
                    <MoneyText isBold >
                        {formatMoney(campaign.donation_received)}
                    </MoneyText>
                    </Col>
                    <FlexCol  >
                    <MoneyText isBold alignLeft >
                        {handleExpired(campaign.expired)}
                    </MoneyText>
                    </FlexCol>
                
                    </Row>
                  
                    </CardBodyCustom>
                </CardShadow>
                </Column>
        ))}
      
        </Row>
      </main>
    )
}


export default HomePage