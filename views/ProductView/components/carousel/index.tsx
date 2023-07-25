import { useState } from 'react'
import { StyledCarousel } from './StyledCarousel'
import { ArrowForward, ArrowBack } from '@mui/icons-material'

export const Carousel = ({ data }: any) => {
    const [activeImg, setActiveImg] = useState<number>(0)

    const getNextImg = () => {
        setActiveImg(prevActive => {
            if (prevActive === data?.length - 1) {
                return 0
            } else {
                return prevActive + 1
            }
        })
    }

    const getPreviousImg = () => {
        setActiveImg(prevActive => {
            if (prevActive === 0) {
                return data?.length - 1
            } else {
                return prevActive - 1
            }
        })
    }

    return (
        <StyledCarousel>
            <div className="arrow" onClick={getPreviousImg}>
                <ArrowBack />
            </div>
            <div className="img-container">
                {data?.map((data: any, index: number) => {
                    return (
                        <img
                            style={{
                                display: `${index !== activeImg ? 'none' : ''}`
                            }}
                            src={data.src}
                            alt={data.altText}
                            key={index}
                            className="img"
                        />
                    )
                })}
            </div>
            <div className="arrow" onClick={getNextImg}>
                <ArrowForward />
            </div>
        </StyledCarousel>
    )
}
