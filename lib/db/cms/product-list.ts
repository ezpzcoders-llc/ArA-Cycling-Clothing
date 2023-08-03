import { supabase } from '@/lib/supabase'

const getProductGalleryData = async () => {
    try {
        const { data, error } = await supabase
            .from('products')
            .select(
                `id, color, price, title,
                        product_images(image_src, image_alt_text)`
            )
            .eq(`product_images.image_type`, `main`)
        if (error) {
            console.error(error)
            return
        }
        return data
    } catch (error) {
        console.error(error)
        return null
    }
}

export { getProductGalleryData }
