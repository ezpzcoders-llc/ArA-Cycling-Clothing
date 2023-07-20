import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/redux/store'
import { Mixpanel } from '@/utils/mixpanel'
import { StyledLandingView } from './StyledLandingView'

const LandingView = () => {
    const data = useSelector((state: RootState) => state.homePage)
    const loading = useSelector((state: RootState) => state.app.loading)
    const {
        heroBanner,
        heroImg: { altText, src }
    } = data

    //Use effect to track page views
    useEffect(() => {
        if (!loading) Mixpanel.track_page_view('Landing')
    }, [loading])
    return (
        <StyledLandingView>
            <div className="heroContainer">
                <img src={src} alt={altText} srcSet={src} className="heroImg" />
                <h1 className="heroBanner">{heroBanner}</h1>
            </div>
            <div className="productContainer">
                <p>
                    Inset Product Section here Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Enim dolorem deserunt dicta
                    dolor sint a velit esse, tenetur amet saepe veritatis aut
                    soluta officiis ipsam consequatur fuga ratione facere
                    corporis.
                </p>
            </div>
        </StyledLandingView>
    )
}

export default LandingView
