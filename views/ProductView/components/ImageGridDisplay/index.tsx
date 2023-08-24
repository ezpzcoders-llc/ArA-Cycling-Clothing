import { StyledImageGrid } from './StyledImageGrid'

const GALLERY = 'gallery'

const ImageGridDisplaySection = ({ data }: any) => {
    const trial = data.product_images.filter(
        (image: any) => image.image_type === GALLERY
    )
    return (
        <StyledImageGrid>
            {data?.product_images
                .filter((image: any) => image.image_type === GALLERY)
                .map((data: any, index: number) => {
                    return (
                        <img
                            src={data.image_src}
                            alt={data.image_altText}
                            key={index}
                        />
                    )
                })}
        </StyledImageGrid>
    )
}

export default ImageGridDisplaySection
