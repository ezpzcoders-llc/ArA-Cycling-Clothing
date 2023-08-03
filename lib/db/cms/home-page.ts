import { supabase } from '@/lib/supabase'

const getHomePageData = async () => {
    try {
        const { data, error } = await supabase
            .from('home_page')
            .select('heroBanner, heroImgAltText, heroImgSrc')

        if (error) throw error

        return {
            heroBanner: data[0].heroBanner,
            heroImg: {
                altText: data[0].heroImgAltText,
                src: data[0].heroImgSrc
            }
        }
    } catch (error) {
        console.error(error)
        return {}
    }
}

export { getHomePageData }
