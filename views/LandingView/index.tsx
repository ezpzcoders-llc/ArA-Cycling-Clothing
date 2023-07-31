import { useSelector } from 'react-redux'
import { RootState } from '@/lib/redux/store'
import ProductGallery from '../../components/ProductGallery'
import { StyledLandingView } from './StyledLandingView'

const LandingView = () => {
    const data = useSelector((state: RootState) => state.homePage)

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
