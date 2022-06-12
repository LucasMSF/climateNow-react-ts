import { climateData } from "../types/types"

export const initial: climateData = {
    location: {
        name: '-',
        region: '-',
        country: '-',
    },
    current: {
        temp_c: 0,
        condition: {
            text: '-',
            icon: '//cdn.weatherapi.com/weather/64x64/night/113.png'
        }
    }
}