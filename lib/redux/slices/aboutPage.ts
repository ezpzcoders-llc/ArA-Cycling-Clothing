import { createSlice } from '@reduxjs/toolkit'
import { homePageSlice } from './homePage'

const initialState = {
    top: {
        largeFont: 'ArA Cycling',
        smallFont:
            'Welcome to our vibrant world of cycling kits! We are a passionate company dedicated to delivering exceptional cycling apparel that merges style, functionality, and a deep love for all things cycling. Our team of talented designers pour their creativity into crafting unique and eye-catching designs that will make you stand out on the road. Start your cycling adventure with us today and discover the perfect combination of performance, style, and passion in every pedal stroke. Join our cycling community, where the road becomes a canvas and your cycling kit becomes an expression of your love for this incredible sport.',
        img: 'https://res.cloudinary.com/ezpzcoding-cloudinary/image/upload/v1689536774/ara-cycling-clothing/oiek0nvwkfjh8kmb5bd3.jpg'
    },
    center: {
        largeFont: 'Stand Out',
        smallFont:
            "We understand the exhilaration and freedom that cycling brings, whether you're conquering challenging mountain trails or enjoying a leisurely ride through the city streets. That's why we strive to provide you with high-quality cycling kits that not only enhance your performance but also reflect your individuality and love for the sport. Whether you're a professional athlete seeking a performance-oriented kit or a cycling enthusiast looking for unique designs that capture your spirit, our cycling kits are tailored to meet your needs. Join us in embracing the joy of cycling and experience the thrill of riding in style with our exceptional collection.",
        img: 'https://res.cloudinary.com/ezpzcoding-cloudinary/image/upload/v1689536799/ara-cycling-clothing/csthn1tqjknym52uoemx.jpg'
    },
    bottom: {
        largeFont: 'Made With Love',
        smallFont:
            'Each piece of our cycling kit collection is carefully engineered to optimize your comfort and performance. We use advanced fabrics and cutting-edge technologies to ensure breathability, moisture-wicking, and the perfect fit. Our attention to detail guarantees that every stitch and seam aligns with our commitment to excellence. Beyond offering remarkable cycling apparel, we are dedicated to fostering a vibrant community of passionate cyclists. We believe in the power of cycling to connect people, inspire personal growth, and create unforgettable adventures. Through our website, we aim to share valuable insights, tips, and stories to fuel your passion for cycling and keep you motivated on your journey.',
        img: 'https://res.cloudinary.com/ezpzcoding-cloudinary/image/upload/v1689536785/ara-cycling-clothing/oxy5rucatya9ckxhygmq.jpg'
    }
}

export const aboutPageSlice = createSlice({
    name: 'aboutPage',
    initialState,
    reducers: {
        setAboutPage: (state, { payload }) => {
            return initialState
        }
    }
})

export const { setAboutPage } = aboutPageSlice.actions
export default aboutPageSlice.reducer

//  leftImg:
//         'https://res.cloudinary.com/ezpzcoding-cloudinary/image/upload/v1689536799/ara-cycling-clothing/csthn1tqjknym52uoemx.jpg',
//     rightImg:
//         'https://res.cloudinary.com/ezpzcoding-cloudinary/image/upload/v1689536811/ara-cycling-clothing/qd1jojkxlduwy1hqb6mn.jpg'
