import ProductGallery from '../../components/ProductGallery'
import {
    ProductDisplaySection,
    DescriptionDisplaySection,
    ImageGridDisplaySection,
    DetailsDisplaySection
} from './components'

import { StyledProductPage } from './StyledProductView'
const ProductView = ({ data }: any) => {
    return (
        <StyledProductPage>
            <ProductDisplaySection data={data} productId={data.id} />
            <DescriptionDisplaySection />
            <DetailsDisplaySection
                product_details={data.product_details}
                product_sizing_info={data.product_sizing_info}
            />
            <ImageGridDisplaySection data={data} />
            <h2>You Might Also Like</h2>
            <ProductGallery />
        </StyledProductPage>
    )
}

export default ProductView
