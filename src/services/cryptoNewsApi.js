import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const newsHeaders = {
  'X-RapidAPI-Key': '47e7dac7a8msh7ed8c981d6ce2d5p11a6afjsnf244f88b2c89',
    'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
};

const apiData = {
  "query": "crypto",
  "page": 1,
    "time_bounded": true,
    "from_date": "01/02/2021",
    "to_date": "05/06/2021",
    "location": "",
    "category": "",
    "source": ""
};

const baseUrl = 'https://cryptocurrency-news2.p.rapidapi.com/v1';

const createRequest = (url) => ({ url, headers: newsHeaders});

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: (count) => createRequest(`/coindesk?limit=${count}`)
    })
  })
});

export const { useGetNewsQuery  } = newsApi;
