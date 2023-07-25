import styled from '@emotion/styled'

export const StyledCarousel = styled.div`
    @keyframes fade-in {
        from {
            opacity: 0;
            visibility: hidden;
        }
        to {
            opacity: 1;
            visibility: visible;
        }
    }

    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    .arrow {
        .MuiSvgIcon-root {
            font-size: 3rem;
            transition: all 0.4s linear;
            &:hover {
                transform: scale(1.2);
            }
        }

        &:hover {
            cursor: pointer;
        }
    }

    .img-container {
        height: 100%;
        width: 300px;
        .img {
            width: 100%;
            height: 100%;
            animation: fade-in 1s ease-in-out;
            animation-fill-mode: forwards;
        }
    }
`
