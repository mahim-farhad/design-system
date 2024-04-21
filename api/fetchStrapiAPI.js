import axios from 'axios'

const Request = axios.create({
  method: 'GET',
  url: 'https://zappos1.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': '781a82f154mshf7ebc5f396143c6p1b559djsn99fbf9ea346c',
    'X-RapidAPI-Host': 'zappos1.p.rapidapi.com'
  }
})

async function fetchStrapiAPI() {
  const response = await Request.get(`/brands/list`)

  if (response.statusText !== 'OK') {
    return undefined
  }

  return response.data
}

export default fetchStrapiAPI
