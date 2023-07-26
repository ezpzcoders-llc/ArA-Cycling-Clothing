import { createSlice } from '@reduxjs/toolkit'
import { ProductProps } from '@/utils/types/storeStateProps'

const initialState: ProductProps[] = [
    {
        id: '',
        inStock: null,
        color: '',
        title: '',
        price: null,
        size: [
            {
                size: '',
                sizeSymbol: '',
                quantity: null
            }
        ],
        img: {
            src: '',
            altText: ''
        },
        imgList: [
            {
                src: '',
                altText: ''
            }
        ],
        imgGallery: [
            {
                src: '',
                altText: ''
            }
        ],
        productInfo: {
            productDetails: {
                label: '',
                details: ['']
            },
            sizingInfo: {
                label: '',
                chartImage: {
                    src: '',
                    altText: ''
                }
            }
        }
    }
]

export const productListSlice = createSlice({
    name: 'productList',
    initialState,
    reducers: {
        setProductList: (state, { payload }: { payload: ProductProps[] }) => {
            return (state = payload)
        }
    }
})

export const { setProductList } = productListSlice.actions
export default productListSlice.reducer
