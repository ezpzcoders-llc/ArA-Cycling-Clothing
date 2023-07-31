import { getHomePage } from '@/lib/db/cms/home-page'
import { HomePageProps } from '@/utils/types/storeStateProps'
import LandingView from '@/views/LandingView'

export async function getStaticProps() {
    try {
        const data = await getHomePage()
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
    return <LandingView data={data} />
}
