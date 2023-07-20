import { createSlice } from '@reduxjs/toolkit'
import { HomePageProps } from '@/utils/types/storeStateProps'

const initialState: HomePageProps = {
    heroImg: {
        altText: '',
        src: ''
    },
    heroBanner: ''
}

export const homePageSlice = createSlice({
    name: 'homePage',
    initialState,
    reducers: {
        setHomePage: (state, { payload }: { payload: HomePageProps }) => {
            return (state = payload)
        }
    }
})

export const { setHomePage } = homePageSlice.actions
export default homePageSlice.reducer
