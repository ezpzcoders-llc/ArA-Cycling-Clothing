import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        header: '',
        text: '',
        img: {
            src: '',
            altText: ''
        }
    }
]

export const aboutPageSlice = createSlice({
    name: 'aboutPage',
    initialState,
    reducers: {
        setAboutPage: (state, { payload }) => {
            return (state = payload)
        }
    }
})

export const { setAboutPage } = aboutPageSlice.actions
export default aboutPageSlice.reducer
