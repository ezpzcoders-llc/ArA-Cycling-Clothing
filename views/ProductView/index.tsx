import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/redux/store'
import ProductDisplaySection from './components/ProductDisplay'

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
            <div className="imageList">
                {data?.imgList.map((data: any, index: number) => {
                    return <img src={data.src} alt={data.altText} />
                })}
            </div>
        </StyledProductPage>
    )
}

export default ProductView
