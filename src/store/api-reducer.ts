import {createApi} from '@reduxjs/toolkit/dist/query/react';
import createAPI from '../services/api';

export const apiReducer = createApi({
    reducerPath: 'api',
    baseQuery: createAPI(),
    endpoints: (builder) => ({
        fetchJsonData: builder.query<undefined, void>({
            query: () => ({
                url: 'example.json',
                method: 'get',
            }),
        }),
    }),
});

export const {useFetchJsonDataQuery} = apiReducer;
