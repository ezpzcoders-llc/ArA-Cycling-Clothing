import { getHomePage } from './cms/home-page'
import { setHomePage } from '../redux/slices/homePage'
import { setAboutPage } from '../redux/slices/aboutPage'
import { getAboutPage } from './cms/about-page'
import { getProductList } from './cms/product-list'
import { setProductList } from '../redux/slices/products'

export const getAllCmsData = async (dispatch: Function) => {
    try {
        const [homePage, aboutPage, productList] = await Promise.all([
            getHomePage(),
            getAboutPage(),
            getProductList()
        ])
        dispatch(setHomePage(homePage))
        dispatch(setAboutPage(aboutPage))
        dispatch(setProductList(productList))
    } catch (error) {
        throw error
    }
}
