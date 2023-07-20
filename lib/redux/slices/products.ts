import { createSlice } from '@reduxjs/toolkit'
import { ProductProps } from '@/utils/types/storeStateProps'

const initialState: ProductProps = {
    id: '1',
    inStock: true,
    name: 'Calypso Short Sleeve',
    price: 200,
    size: [
        {
            symbol: 'S',
            quantity: 3
        },
        {
            symbol: 'M',
            quantity: 5
        },
        {
            symbol: 'L',
            quantity: 3
        },
        {
            symbol: 'XL',
            quantity: 2
        },
        {
            symbol: 'XXL',
            quantity: 2
        },
        {
            symbol: 'XXXL',
            quantity: 1
        }
    ],
    mainImg: {
        url: 'wait',
        altText: 'Calypso Short Sleeve'
    },
    allImg: [
        {
            url: 'img',
            altText: 'describe'
        }
    ]
}
