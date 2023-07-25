import ProductDisplaySection from './components/ProductDisplay'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/redux/store'

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
        </StyledProductPage>
    )
}

export default ProductView
