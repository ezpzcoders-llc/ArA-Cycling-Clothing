import { supabase } from '@/lib/supabase'
import { AboutPageProps } from '@/utils/types/storeStateProps'

const emptyAboutPage: AboutPageProps = {
    header: '',
    text: '',
    img: {
        src: '',
        altText: ''
    }
}

type AboutSection = 'top' | 'bottom' | 'center'

const getAboutPageData = async () => {
    try {
        const { data, error } = await supabase
            .from('about_page')
            .select('section, header, text, img')
        if (error) {
            console.error('Error fetching data:', error)
            return data
        }

        const aboutData: {
            top: AboutPageProps
            bottom: AboutPageProps
            center: AboutPageProps
        } = {
            top: emptyAboutPage,
            bottom: emptyAboutPage,
            center: emptyAboutPage
        }

        if (data && data.length > 0) {
            data.forEach(sectionData => {
                const section: AboutSection =
                    sectionData.section as AboutSection
                aboutData[section] = {
                    header: sectionData.header,
                    text: sectionData.text,
                    img: sectionData.img
                }
            })
        }

        return aboutData
    } catch (error) {
        console.error(error)
        return null
    }
}

export { getAboutPageData }
