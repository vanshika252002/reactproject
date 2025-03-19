import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const wheatherApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.openweathermap.org/data/2.5/',
  }),
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: ({ lat, lon, apiKey }) =>
        `weather?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${apiKey}`,
    }),
  }),
});

export const { useGetWeatherQuery } = wheatherApi;
export default wheatherApi;
