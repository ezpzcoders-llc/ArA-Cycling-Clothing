import { createSlice } from '@reduxjs/toolkit'
import { HomePageProps } from '@/utils/types/storeStateProps'

const initialState: HomePageProps = {
    heroImg: {
        altText: 'Man on green bike in mountain center',
        src: 'https://res.cloudinary.com/ezpzcoding-cloudinary/image/upload/v1689349779/ara-cycling-clothing/z73n6zotpvnb0rxoadz8.jpg'
    },
    heroBanner: 'Escape the Ordinary'
}

export const homePageSlice = createSlice({
    name: 'homePage',
    initialState,
    reducers: {
        setHomePage: (state, { payload: HomePageProps }) => {
            return initialState
        }
    }
})

export const { setHomePage } = homePageSlice.actions
export default homePageSlice.reducer
