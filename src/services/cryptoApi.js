import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"


const cryptoApiHeaders={
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '47e7dac7a8msh7ed8c981d6ce2d5p11a6afjsnf244f88b2c89',
}
const baseUrl = 'https://coinranking1.p.rapidapi.com/';

const createRequest = (url)=>({url,headers:cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query: ()=> createRequest("/coins")
        })
    })
})

export const {
    useGetCryptosQuery,
}= cryptoApi;