import { getProductList } from './cms/product-list'
import { setProductList } from '../redux/slices/products'

export const getAllCmsData = async (dispatch: Function) => {
    try {
        const [productList] = await Promise.all([getProductList()])

        dispatch(setProductList(productList))
    } catch (error) {
        throw error
    }
}
