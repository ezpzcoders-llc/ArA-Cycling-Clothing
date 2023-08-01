import { AboutDataProps } from '@/utils/types/storeStateProps'
import { StyledAboutView } from './StyledAboutView'

import ArALogo from '@/assets/images/ArALogo.svg'

const AboutView = ({ data }: { data: AboutDataProps }) => {
    const { bottom, center, top } = data

    return (
        <StyledAboutView>
            <div className="sectionContainer">
                <div className="imageSection">
                    <img
                        src={top?.img.src}
                        alt={top?.img.altText}
                        className="image-top"
                    />
                </div>
                <div className="textSection">
                    <div className="logoContainer">
                        <img
                            src={ArALogo.src}
                            alt="ArA Logo"
                            className="logo"
                        />
                    </div>
                    <div className="textContainer">
                        <h1 className="title">{top?.header}</h1>
                        <p className="text">{top?.text}</p>
                    </div>
                </div>
            </div>
            <div className="sectionContainer">
                <div className="textSection">
                    <div className="textContainer + middleTextDisplay">
                        <h1 className="title">{center?.header}</h1>
                        <p className="text">{center?.text}</p>
                    </div>
                </div>
                <div className="imageSection">
                    <img src={center?.img.src} alt={center?.img.altText} />
                </div>
            </div>
            <div className="sectionContainer">
                <div className="imageSection">
                    <img src={bottom?.img.src} alt={bottom?.img.altText} />
                </div>
                <div className="textSection">
                    <div className="textContainer">
                        <h1 className="title">{bottom?.header}</h1>
                        <p className="text">{bottom?.text}</p>
                    </div>
                </div>
            </div>
        </StyledAboutView>
    )
}

export default AboutView
