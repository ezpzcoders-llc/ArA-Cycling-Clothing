import styled from '@emotion/styled'

interface StyledDeskTopNavProps {
    backgroundColor: string
    backgroundBlur: string
}

export const StyledDesktopNav = styled.nav<StyledDeskTopNavProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0 1rem;
    height: var(--nav-height);
    background-color: ${props => props.backgroundColor};
    position: fixed;
    backdrop-filter: blur(${props => props.backgroundBlur});

    top: 0;
    left: 0;
    z-index: 9999;
    .navContent {
        display: flex;
        column-gap: 1rem;
        align-items: center;
        justify-content: space-between;
        align-content: center;
        width: 100%;

        .logo {
            width: 7rem;
            &:hover {
                cursor: pointer;
            }
        }

        .navRoutes {
            display: flex;
            column-gap: 1rem;
            align-items: flex-end;
            font-size: 1.3rem;

            .navLinks {
                display: inline-block;
                position: relative;

                a,
                a:hover {
                    color: var(--off-black);
                    text-decoration: none;
                    cursor: pointer;
                }
            }
            .cartIcon {
                font-size: 1.3rem;
                &:hover {
                    cursor: pointer;
                }
            }

            .navLinks:after {
                content: '';
                display: block;
                margin: auto;
                height: 0.18rem;
                width: 0px;
                background: transparent;
                transition: width 0.5s ease, background-color 0.5s ease;
            }
            .navLinks:hover:after {
                width: 100%;
                background: var(--off-black);
            }

            .activeLink a {
                color: var(--off-black);
            }
            .activeLink:after {
                content: '';
                display: block;
                margin: auto;
                height: 0.18rem;
                width: 100%;
                background: var(--off-black);
            }
        }
        li {
            list-style-type: none;
        }
    }
`
