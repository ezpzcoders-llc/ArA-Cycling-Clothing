import React from 'react'
import { StyledImageGrid } from './StyledImageGrid'

const ImageGridDisplaySection = ({ data }: any) => {
    return (
        <StyledImageGrid>
            {data?.imgList.map((data: any, index: number) => {
                return <img src={data.src} alt={data.altText} key={index} />
            })}
        </StyledImageGrid>
    )
}

export default ImageGridDisplaySection
