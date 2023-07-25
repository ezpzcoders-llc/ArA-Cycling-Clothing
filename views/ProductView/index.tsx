import { useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/redux/store'

import { StyledProductPage } from './StyledProductView'
import Link from 'next/link'
import { Carousel } from './components/carousel'

const ProductView = () => {
    const router = useRouter()
    const { id } = router.query
    const data = useSelector((state: RootState) =>
        state.productList.find(item => item.id === id)
    )

    return (
        <StyledProductPage>
            <Link href={'/products'}>Go Back</Link>
            <div className="productDisplay">
                <Carousel data={data?.imgList} />
            </div>
            <div className="productInfo"></div>
        </StyledProductPage>
    )
}

export default ProductView
