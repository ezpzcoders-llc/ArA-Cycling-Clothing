import mixpanel, { Dict, Query } from 'mixpanel-browser'

const isProd = process.env.NODE_ENV === 'production'

mixpanel.init('ea51c5aedc155daa9473e96ec8d02ec5', {
    debug: true
})

export const Mixpanel = {
    identify: (id: string) => {
        mixpanel.identify(id)
    },
    alias: (id: string) => {
        mixpanel.alias(id)
    },
    track: (name: string, props?: Dict) => {
        mixpanel.track(name, props)
    },
    track_page_view: (page: string) => {
        console.log(page)
        //uncomment to track
        // mixpanel.track_pageview({ page: page })
    },
    track_links: (query: Query, name: string) => {
        mixpanel.track_links(query, name, {
            referrer: document.referrer
        })
    },
    people: {
        set: (props: Dict) => {
            mixpanel.people.set(props)
        }
    }
}
