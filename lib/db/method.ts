import { getHomePage } from './cms/home-page'
import { setHomePage } from '../redux/slices/homePage'

export const getAllCmsData = async (dispatch: Function) => {
    try {
        const [homePage] = await Promise.all([getHomePage()])
        dispatch(setHomePage(homePage))
    } catch (error) {
        throw error
    }
}
