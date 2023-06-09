import { createApi } from '@reduxjs/toolkit/query/react';
import appConfig from 'src/configs/app';
import axiosBaseQuery from 'src/configs/axios.jquery';

 const api = createApi(
    {
        tagTypes:[],
        reducerPath: 'api',
        baseQuery: axiosBaseQuery({ baseUrl: appConfig.apiPath }),
        endpoints: (builder) => ({
          hello: builder.query({
            query: () => ({ url: 'hello-world', method: 'GET' }),
          }),
        }),
    }
 )
 
 export default api;