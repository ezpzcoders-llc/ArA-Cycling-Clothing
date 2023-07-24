import React from 'react'
import { StyledProductDisplay } from './StyledProductDisplay'

const ProductDisplay = ({ data }: any) => {
    return (
        <StyledProductDisplay>
            <img
                src="https://res.cloudinary.com/ezpzcoding-cloudinary/image/upload/v1690232211/ara-cycling-clothing/ipenlilqjs0b6lxrd88t.jpg"
                alt="model jersey front"
                className="img"
            />
            <div className="product-info">
                <span>Unisex Summer Jersey</span>
                <span>$200 USD</span>
                <span>Coral</span>
            </div>
        </StyledProductDisplay>
    )
}

export default ProductDisplay
