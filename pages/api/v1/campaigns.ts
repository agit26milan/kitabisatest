// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  success: boolean,
  data: object,
  message: string
}

type FetchDataProps = {
  campaigner: string,
  campaigner_badge: string,
  campaigner_is_verified: boolean,
  campaigner_type: string,
  category_name: string,
  custom_fb_pixel: string,
  days_remaining: number,
  donation_percentage: number,
  donation_received: number,
  donation_target: number,
  expired: number,
  id: number,
  image: string,
  is_featured: number,
  is_forever_running: boolean,
  is_open_goal: boolean,
  order: number,
  parent_project_id: number,
  request_userdata: boolean,
  short_url: string,
  title: string
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
        sortData = sortData.sort((a:FetchDataProps, b: FetchDataProps) => b.donation_target - a.donation_target)
      }
      if(query.sort === DONATION_DSC) {
        sortData = sortData.sort((a: FetchDataProps, b: FetchDataProps) => a.donation_target - b.donation_target)
      }
      if(query.sort === EXPIRED_ASC) {
        sortData = sortData.sort((a: FetchDataProps, b: FetchDataProps) => b.expired - a.expired)
      }
      if(query.sort === EXPIRED_DSC) {
        sortData = sortData.sort((a: FetchDataProps, b: FetchDataProps) => a.expired - b.expired)
      }
    }
    response = {...response, data: sortData}
    return res.status(200).send({success: true, data: response, message: "Berhasil mendapatkan list campaigns"})
  }
  return res.status(400).send({success: false, data: {}, message: 'Gagal mendapatkan list campaign'})
}
