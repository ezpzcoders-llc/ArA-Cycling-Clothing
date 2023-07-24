import { useSelector } from 'react-redux'
import { StyledAboutView } from './StyledAboutView'
import { RootState } from '@/lib/redux/store'
import ArALogo from '@/assets/images/ArALogo.svg'

import { useEffect } from 'react'

const AboutView = () => {
    const data = useSelector((state: RootState) => state.aboutPage)
    const loading = useSelector((state: RootState) => state.app.loading)
    const { top, bottom, center } = data

    //Use effect to track page views

    return (
        <StyledAboutView>
            <div className="sectionContainer">
                <div className="imageSection">
                    <img src={top.img} alt="center img" className="image-top" />
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
                        <h1 className="title">{top.largeFont}</h1>
                        <p className="text">{top.smallFont}</p>
                    </div>
                </div>
            </div>
            <div className="sectionContainer">
                <div className="textSection">
                    <div className="textContainer + middleTextDisplay">
                        <h1 className="title">{center.largeFont}</h1>
                        <p className="text">{center.smallFont}</p>
                    </div>
                </div>
                <div className="imageSection">
                    <img src={center.img} alt="center img" />
                </div>
            </div>
            <div className="sectionContainer">
                <div className="imageSection">
                    <img src={bottom.img} alt="center img" />
                </div>
                <div className="textSection">
                    <div className="textContainer">
                        <h1 className="title">{bottom.largeFont}</h1>
                        <p className="text">{bottom.smallFont}</p>
                    </div>
                </div>
            </div>
        </StyledAboutView>
    )
}

export default AboutView
