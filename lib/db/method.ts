import { getHomePage } from './cms/home-page'
import { setHomePage } from '../redux/slices/homePage'
import { setAboutPage } from '../redux/slices/aboutPage'
import { getAboutPage } from './cms/about-page'

export const getAllCmsData = async (dispatch: Function) => {
    try {
        const [homePage, aboutPage] = await Promise.all([
            getHomePage(),
            getAboutPage()
        ])
        dispatch(setHomePage(homePage))
        dispatch(setAboutPage(aboutPage))
    } catch (error) {
        throw error
    }
}
