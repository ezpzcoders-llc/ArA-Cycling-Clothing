import { HomePageProps } from '@/utils/types/storeStateProps'
import ProductGallery from '../../components/ProductGallery'
import { StyledLandingView } from './StyledLandingView'
import { supabase } from '@/lib/supabase'

const LandingView = ({ data }: { data: HomePageProps }) => {
    const {
        heroBanner,
        heroImg: { altText, src }
    } = data

    return (
        <StyledLandingView>
            <div className="heroContainer">
                <img src={src} alt={altText} srcSet={src} className="heroImg" />
                <h1 className="heroBanner">{heroBanner}</h1>
            </div>
            <div className="productContainer">
                <ProductGallery />
            </div>
        </StyledLandingView>
    )
}

export default LandingView
