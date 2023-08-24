import { getHomePageData } from '@/lib/db/cms/home-page'
import { HomePageProps } from '@/utils/types/storeStateProps'
import ErrorPage from '@/views/404View'
import LandingView from '@/views/LandingView'

export async function getStaticProps() {
    try {
        const data = await getHomePageData()
        return {
            props: {
                data
            }
        }
    } catch (error) {
        console.error(error)
        return {
            props: {
                data: null
            }
        }
    }
}
export default function Home({ data }: { data: HomePageProps }) {
    if (!data) return <ErrorPage code={404} />
    return <LandingView data={data} />
}
