import { useSelector } from 'react-redux'
import { StyledAboutView } from './StyledAboutView'
import { RootState } from '@/lib/redux/store'
import ArALogo from '@/assets/images/ArALogo.svg'

import { useEffect } from 'react'

const AboutView = () => {
    const data = useSelector((state: RootState) => state.aboutPage)

    return (
        <StyledAboutView>
            <div className="sectionContainer">
                <div className="imageSection">
                    <img
                        src={data[2]?.img.src}
                        alt={data[2]?.img.altText}
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
                        <h1 className="title">{data?.[2]?.header}</h1>
                        <p className="text">{data?.[2]?.text}</p>
                    </div>
                </div>
            </div>
            <div className="sectionContainer">
                <div className="textSection">
                    <div className="textContainer + middleTextDisplay">
                        <h1 className="title">{data?.[1]?.header}</h1>
                        <p className="text">{data?.[1]?.text}</p>
                    </div>
                </div>
                <div className="imageSection">
                    <img src={data[1]?.img.src} alt={data[1]?.img.altText} />
                </div>
            </div>
            <div className="sectionContainer">
                <div className="imageSection">
                    <img src={data[0]?.img.src} alt={data[0]?.img.altText} />
                </div>
                <div className="textSection">
                    <div className="textContainer">
                        <h1 className="title">{data?.[0]?.header}</h1>
                        <p className="text">{data?.[0]?.text}</p>
                    </div>
                </div>
            </div>
        </StyledAboutView>
    )
}

export default AboutView
