import { getAboutPage } from '@/lib/db/cms/about-page'
import { AboutPageProps } from '@/utils/types/storeStateProps'
import AboutView from '@/views/AboutView'

export async function getStaticProps() {
    try {
        const data = await getAboutPage()
        return {
            props: {
                data: data
            },
            // Re-generate the page at most every 24 hours (you can adjust this based on your data update frequency)
            revalidate: 86400 // 24 hours in seconds
        }
    } catch (error) {
        console.error(error)
        return {
            props: {
                data: null
            },
            // Re-generate the page at most every 24 hours even if there's an error
            revalidate: 86400 // 24 hours in seconds
        }
    }
}

export default function AboutPage({ data }: { data: AboutPageProps[] }) {
    return <AboutView data={data} />
}
