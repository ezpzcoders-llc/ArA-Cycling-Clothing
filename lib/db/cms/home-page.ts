import { collection, getDocs } from 'firebase/firestore'
import { db } from '../config'
import { HomePageProps } from '@/utils/types/storeStateProps'

const HOME = 'home-page'
const homePageCollection = collection(db, HOME)

const getHomePage = async (): Promise<HomePageProps> => {
    try {
        const data = await getDocs(homePageCollection)
        const { heroBanner, heroImg } = data.docs[0].data()
        return {
            heroBanner,
            heroImg
        }
    } catch (error) {
        throw error
    }
}

export { getHomePage }
