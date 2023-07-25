import { useState } from 'react'

import {
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    SelectChangeEvent
} from '@mui/material'
import { Carousel } from '../carousel/index'
import { StyledAddProductDisplay } from './StyledProductDisplay'

const ProductDisplaySection = ({ data }: any, productId: string) => {
    const [size, setSize] = useState<string>('')
    console.log(data)
    const handleSizeChange = (event: SelectChangeEvent) => {
        setSize(event.target.value)
    }
    const handleAddToCart = () => {
        const cartData = {
            id: productId,
            size,
            color: data?.color,
            title: data?.title
        }
        console.log('Card Data', cartData)
    }
    return (
        <StyledAddProductDisplay>
            <div className="carouselContainer">
                <Carousel data={data?.imgGallery} />
            </div>
            <div className="productInfo">
                <div className="productTitle">
                    <strong>{data?.color}</strong>
                    <p>{data?.title}</p>
                </div>
                <div className="productPrice">
                    <span>{`$ ${data?.price}`}</span>
                </div>
                <div className="productAddForm">
                    <FormControl variant="standard" sx={{ width: '100%' }}>
                        <InputLabel id="select-size" sx={{ color: 'black' }}>
                            Size
                        </InputLabel>
                        <Select
                            sx={{
                                color: 'black',
                                '&.Mui-focused': {
                                    color: 'black'
                                }
                            }}
                            labelId="select-size"
                            id="select-size"
                            value={size}
                            onChange={handleSizeChange}
                            label="Size">
                            {data?.size?.map((data: any, index: number) => {
                                const { quantity, size, sizeSymbol } = data
                                if (quantity !== 0) {
                                    return (
                                        <MenuItem
                                            value={sizeSymbol}
                                            key={index}>
                                            {size}
                                        </MenuItem>
                                    )
                                }
                            })}
                        </Select>
                    </FormControl>
                    <button disabled={size === ''} onClick={handleAddToCart}>
                        {size === '' ? 'Select a size' : 'Add To Cart'}
                    </button>
                </div>
            </div>
        </StyledAddProductDisplay>
    )
}

export default ProductDisplaySection
