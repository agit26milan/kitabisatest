// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { requestApi } from '../../../utils/request'

type Data = {
  success: boolean,
  data: object,
  message: string
}

const url = "https://storage.googleapis.com/southern-waters-642.appspot.com/fe_code_challenge/campaign.json"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const fetchData = await axios(url, {method: 'GET'})
  if(fetchData.status === 200) {
    return res.status(200).send({success: true, data: fetchData.data, message: "Berhasil mendapatkan list campaigns"})
  }
  return res.status(400).send({success: false, data: {}, message: 'Gagal mendapatkan list campaign'})
}
