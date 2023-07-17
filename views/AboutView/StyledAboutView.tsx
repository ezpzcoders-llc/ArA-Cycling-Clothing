import styled from '@emotion/styled'

export const StyledAboutView = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    @media (max-width: 520px) {
        padding-top: 3rem;
    }
    .sectionContainer {
        display: flex;
        gap: 0.5rem;
        width: 100vw;

        @media (max-width: 1000px) {
            flex-direction: column;
            position: relative;
        }

        .imageSection {
            img {
                min-height: 100%;
                width: 50vw;
                object-fit: cover;
                @media (max-width: 1000px) {
                    min-height: 100%;
                    width: 100vw;
                    object-fit: cover;
                }
            }
        }
        .textSection {
            display: flex;
            flex-direction: column;
            min-height: 100%;
            width: 50vw;
            background-color: #bebfba;
            color: white;
            @media (max-width: 1000px) {
                width: 100vw;
                position: absolute;

                background: rgba(255, 255, 255, 1);
                background: linear-gradient(180deg, #ffffff8c, #010101d9);

                max-height: 100%;
                justify-content: flex-end;
            }

            img {
                min-height: 100%;
                width: 50vw;
                object-fit: cover;
            }
            .logoContainer {
                display: grid;
                place-items: center;
                @media (max-width: 1000px) {
                    justify-items: end;
                }

                .logo {
                    width: 30%;
                    flex-shrink: 1;
                }
            }

            .middleTextDisplay {
                align-items: flex-end;
            }

            .textContainer {
                height: 100%;
                width: 50vw;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                padding: 5rem;

                @media (max-width: 1000px) {
                    width: 100vw;
                }
                @media (max-width: 580px) {
                    padding: 3rem;
                }
                @media (max-width: 390px) {
                    padding: 0.7rem;
                }

                .title {
                    color: white;
                    font-size: 5rem;
                    font-weight: 600;

                    @media (max-width: 670px) {
                        font-size: 4rem;
                    }
                    @media (max-width: 580px) {
                        font-size: 3rem;
                    }
                    @media (max-width: 480px) {
                        font-size: 2rem;
                    }
                    @media (max-width: 420px) {
                        font-size: 1.8rem;
                    }
                }
                .text {
                    max-width: 35rem;
                    font-size: 1.1rem;
                    font-weight: 200;
                    @media (max-width: 670px) {
                        font-size: 1.1rem;
                    }
                    @media (max-width: 580px) {
                        font-size: 1rem;
                    }
                    @media (max-width: 535px) {
                        font-size: 0.9rem;
                        letter-spacing: 0.1px;
                    }
                    @media (max-width: 420px) {
                        font-size: 0.9rem;
                    }
                }
            }
        }
    }
`

// export const StyledAboutView = styled.div`
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     grid-template-rows: 1fr 1fr 1fr;
//     gap: 0.5rem 0.5rem;
//     grid-template-areas:
//         'image-top text-top'
//         'text-center image-center'
//         'text-bottom image-bottom';
//     width: 100%;
//     height: fit-content;
//     .section {
//         width: 50vw;
//         height: 100vh;
//     }
//     .image-top {
//         grid-area: image-top;
//         min-height: 100%;
//         img {
//             min-height: 100%;
//             width: 50vw;
//             object-fit: cover;
//         }
//     }
//     .text-top {
//         grid-area: text-top;
//         display: flex;
//         flex-direction: column;
//         min-height: 100%;
//         width: 50vw;
//         background-color: #bebfba;
//         color: white;

//         .logoContainer {
//             display: grid;
//             .logo {
//                 width: 25rem;
//             }
//         }
//     }
//     .text-center {
//         grid-area: text-center;
//         display: flex;
//         flex-direction: column;
//         min-height: 100%;
//         width: 50vw;
//         background-color: #bebfba;
//         color: white;
//     }
//     .image-center {
//         grid-area: image-center;
//         min-height: 100%;
//         img {
//             min-height: 100%;
//             width: 50vw;
//             object-fit: cover;
//         }
//     }
//     .text-bottom {
//         grid-area: text-bottom;
//         display: flex;
//         flex-direction: column;
//         min-height: 100%;
//         width: 50vw;
//         background-color: #bebfba;
//         color: white;
//     }
//     .image-bottom {
//         grid-area: image-bottom;
//         min-height: 100%;
//         img {
//             min-height: 100%;
//             width: 50vw;
//             object-fit: cover;
//         }
//     }
// `

{
    /* <StyledAboutView>
<div className="image-top + section">
    <img src={top.img} alt="center img" />
</div>
<div className="text-top + section">
    <div className="logoContainer">
        <img src={ArALogo.src} alt="ArA Logo" className="logo" />
    </div>
    <div className="textContainer">
        <h1>{top.largeFont}</h1>
        <p>{top.smallFont}</p>
    </div>
</div>
<div className="text-center + section">
    <div className="textContainer + middleTextDisplay">
        <h1>{center.largeFont}</h1>
        <p>{center.smallFont}</p>
    </div>
</div>
<div className="image-center">
    <img src={center.img} alt="center img" />
</div>
<div className="image-bottom + section">
    <img src={bottom.img} alt="center img" />
</div>
<div className="text-bottom + section">
    <div className="textContainer">
        <h1>{bottom.largeFont}</h1>
        <p>{bottom.smallFont}</p>
    </div>
</div>
</StyledAboutView> */
}
