// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { CampaignProps } from '../../../interfaces/campaigns'

type Data = {
  success: boolean,
  data: object,
  message: string
}

const url = "https://storage.googleapis.com/southern-waters-642.appspot.com/fe_code_challenge/campaign.json"
const DONATION_ASC = 'donation-asc'
const DONATION_DSC = 'donation-dsx'
const EXPIRED_ASC = 'day-asc'
const EXPIRED_DSC = 'day-dsc'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {query} = req
  const fetchData = await axios(url, {method: 'GET'})
  let response = fetchData.data
  if(fetchData.status === 200) {
    let sortData = fetchData.data && fetchData.data.data
    if(sortData && Array.isArray(sortData)) {
      if(query.sort === DONATION_ASC) {
        sortData = sortData.sort((a:CampaignProps, b: CampaignProps) => b.donation_target - a.donation_target)
      }
      if(query.sort === DONATION_DSC) {
        sortData = sortData.sort((a: CampaignProps, b: CampaignProps) => a.donation_target - b.donation_target)
      }
      if(query.sort === EXPIRED_ASC) {
        sortData = sortData.sort((a: CampaignProps, b: CampaignProps) => b.expired - a.expired)
      }
      if(query.sort === EXPIRED_DSC) {
        sortData = sortData.sort((a: CampaignProps, b: CampaignProps) => a.expired - b.expired)
      }
    }
    response = {...response, data: sortData}
    return res.status(200).send({success: true, data: response, message: "Berhasil mendapatkan list campaigns"})
  }
  return res.status(400).send({success: false, data: {}, message: 'Gagal mendapatkan list campaign'})
}
