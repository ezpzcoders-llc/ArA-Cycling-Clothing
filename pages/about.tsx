import { getAboutPageData } from '@/lib/db/cms/about-page'
import { AboutPageProps } from '@/utils/types/storeStateProps'
import ErrorPage from '@/views/404View'

import AboutView from '@/views/AboutView'

export async function getStaticProps() {
    try {
        const data = await getAboutPageData()
        return {
            props: {
                data
            }
        }
    } catch (error) {
        //need to come up with a better way to do this im sure . should we work on setting a standard for ezpz error handling ?
        // i know i shouldnt wrtie in comments like this to you but i know youre gonna see it so hi phil
        //text me when you see me
        /* 
            also dont worry i know i can comment like this for multiple lines
            ... new ? 
            newwwwwwwww
            l
            i
            n
            e
        */
        console.error(error)
        return {
            props: {
                data: {
                    top: null,
                    bottom: null,
                    center: null
                }
            }
        }
    }
}

export default function AboutPage({
    data
}: {
    data: {
        top: AboutPageProps
        bottom: AboutPageProps
        center: AboutPageProps
    }
}) {
    if (!data) {
        //actually talk about how to handle this
        return <ErrorPage code={420} />
    }
    return <AboutView data={data} />
}
