import React from 'react'
import { StyledProductDisplay } from './StyledProductDisplay'

const ProductDisplay = ({ data }: any) => {
    const { id, color, img, imgList, inStock, price, size, title } = data
    return (
        <StyledProductDisplay href={`/products/${id}`}>
            <img src={img?.src} alt={img?.altText} className="img" />
            <div className="product-info">
                <span>{title}</span>
                {inStock ? (
                    <span>{`$${price} USD`}</span>
                ) : (
                    <span>Sold Out</span>
                )}
                <span>{color}</span>
            </div>
        </StyledProductDisplay>
    )
}

export default ProductDisplay
