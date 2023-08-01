import { supabase } from '@/lib/supabase'
import { HomePageProps } from '@/utils/types/storeStateProps'
import LandingView from '@/views/LandingView'

export async function getStaticProps() {
    try {
        const { data, error } = await supabase
            .from('home_page')
            .select('heroBanner, heroImgAltText, heroImgSrc')

        if (error) throw error

        return {
            props: {
                data: {
                    heroBanner: data[0].heroBanner,
                    heroImg: {
                        altText: data[0].heroImgAltText,
                        src: data[0].heroImgSrc
                    }
                }
            }
        }
    } catch (error) {
        console.error(error)
        return {
            props: {
                data: {}
            }
        }
    }
}
export default function Home({ data }: { data: HomePageProps }) {
    return <LandingView data={data} />
}
