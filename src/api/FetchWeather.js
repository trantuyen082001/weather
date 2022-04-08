import React from 'react'
import axios from 'axios'
import { useState } from 'react';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '11da612d64039d9adec3fb22e825ddde';


export const FetchWeather = async (query) => {

  const {data} = await axios.get(URL, {
      params: {
          q: query,
          units: 'metric',
          APPID: API_KEY
      }
  });
  return data;
}

