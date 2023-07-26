import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/redux/store'
import ProductGallery from '../../components/ProductGallery'
import {
    ProductDisplaySection,
    DescriptionDisplaySection,
    ImageGridDisplaySection,
    DetailsDisplaySection
} from './components'

import { StyledProductPage } from './StyledProductView'
const ProductView = () => {
    const router = useRouter()
    const { id } = router.query
    const data = useSelector((state: RootState) =>
        state.productList.find(item => item.id === id)
    )

    return (
        <StyledProductPage>
            <ProductDisplaySection data={data} productId={id} />
            <DescriptionDisplaySection />
            <DetailsDisplaySection data={data?.productInfo} />
            <ImageGridDisplaySection data={data} />
            <h2>You Might Also Like</h2>
            <ProductGallery />
        </StyledProductPage>
    )
}

export default ProductView
