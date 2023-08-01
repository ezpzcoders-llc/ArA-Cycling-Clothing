import { supabase } from '@/lib/supabase'
import ProductView from '@/views/ProductView'

export async function getServerSideProps(context: any) {
    const { id } = context.query

    try {
        const { data, error } = await supabase
            .from('products')
            .select(
                `id, color, price, title,
    product_images(image_type, image_src, image_alt_text),
    product_details(product_detail),
    product_inventory(product_size, product_quantity),
    product_sizing_info(size_chart_img_src, size_chart_img_altText)`
            )
            .eq('id', `${id}`)
        return {
            props: {
                data: data?.[0]
            }
        }
    } catch (error) {
        console.error(error)
    }
}
export default function (data: any) {
    return <ProductView data={data.data} />
}
