import { StyledProductDisplay } from './StyledProductDisplay'

const ProductDisplay = ({ data }: any) => {
    const { id, price, title, color, product_images } = data

    return (
        <StyledProductDisplay href={`/products/${id}`}>
            <img
                src={product_images?.[0]?.image_src}
                alt={product_images?.[0]?.image_alt_text}
                className="img"
            />
            <div className="product-info">
                <span>{title}</span>
                <span>{`$${price} USD`}</span>
                <span>{color}</span>
            </div>
        </StyledProductDisplay>
    )
}

export default ProductDisplay
