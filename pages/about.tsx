import { getAboutPage } from '@/lib/db/cms/about-page'
import { AboutPageProps } from '@/utils/types/storeStateProps'
import AboutView from '@/views/AboutView'

export async function getStaticProps() {
    try {
        const data = await getAboutPage()
        return {
            props: {
                data: data
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

export default function AboutPage({ data }: { data: AboutPageProps[] }) {
    return <AboutView data={data} />
}
