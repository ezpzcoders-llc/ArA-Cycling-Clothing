import { collection, doc, getDocs } from 'firebase/firestore'
import { db } from '../config'

const ABOUT = 'about-page'
const aboutPageCollection = collection(db, ABOUT)

const getAboutPage = async () => {
    try {
        const data = await getDocs(aboutPageCollection)
        console.log(data)
        return data.docs.map(doc => {
            const { header, text, img } = doc.data()
            return {
                header,
                text,
                img
            }
        })
    } catch (error) {
        throw error
    }
}

export { getAboutPage }
