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

//  leftImg:
//         'https://res.cloudinary.com/ezpzcoding-cloudinary/image/upload/v1689536799/ara-cycling-clothing/csthn1tqjknym52uoemx.jpg',
//     rightImg:
//         'https://res.cloudinary.com/ezpzcoding-cloudinary/image/upload/v1689536811/ara-cycling-clothing/qd1jojkxlduwy1hqb6mn.jpg'
