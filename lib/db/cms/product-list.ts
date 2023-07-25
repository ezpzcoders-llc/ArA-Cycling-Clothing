import { getDocs, collection, doc } from 'firebase/firestore'
import { db } from '../config'
const PRODUCT_LIST = 'product-list'
const productListCollection = collection(db, PRODUCT_LIST)

const getProductList = async () => {
    try {
        const data = await getDocs(productListCollection)
        return data.docs.map(doc => {
            const { color, img, imgList, inStock, price, size, title } =
                doc.data()
            return {
                id: doc.id,
                color,
                img,
                imgList,
                inStock,
                price,
                size,
                title
            }
        })
    } catch (error) {
        throw error
    }
}

export { getProductList }
