import styled from '@emotion/styled'

export const StyledMobileNav = styled.nav`
    .header {
        position: fixed;
        display: block;
        top: 0;
        left: 0;
        height: 3.1rem;
        width: 100%;
        background: rgba(rgb(255, 255, 255), 0.8);
        box-shadow: rgb(0 0 0 / 12%) 0 1px 3px;
        overflow: hidden;
        transition: all 0.5s ease-out, background 1s ease-out;
        transition-delay: 0.2s;
        z-index: 2;

        .burgerContainer {
            position: absolute;
            right: 0;
            display: inline-block;
            height: 50px;
            width: 50px;
            cursor: pointer;
            transform: rotate(0deg);
            transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);
            user-select: none;
            -webkit-tap-highlight-color: transparent;
            .burger {
                width: 18px;
                height: 8px;
                position: relative;
                display: block;
                margin: -4px auto 0;
                top: 50%;
                .bar {
                    width: 100%;
                    height: 1px;
                    display: block;
                    position: relative;
                    background: var(--off-black);
                    transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);
                    transition-delay: 0s;
                    &.topBar {
                        transform: translateY(0px) rotate(0deg);
                    }
                    &.btmBar {
                        transform: translateY(6px) rotate(0deg);
                    }
                }
            }
        }
        .logo-container {
            position: absolute;
            width: 100%;
            display: flex;
            justify-content: center;
            padding: 0.3rem 0;
            background-color: var(--off-white);

            .logo {
                width: 3rem;
                cursor: pointer;
                z-index: 1;
            }
        }

        .cartIcon {
            position: absolute;
            right: 47px;
            top: 12px;
            cursor: pointer;
        }

        ul.menu {
            position: relative;
            padding: 2.8rem 3rem 0;
            list-style: none;
            li.menuItem {
                border-bottom: 1px solid var(--off-white);
                margin-top: 0.31rem;
                transform: scale(1.15) translateY(-30px);
                opacity: 0;
                transition: transform 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99),
                    opacity 0.6s cubic-bezier(0.4, 0.01, 0.165, 0.99);
                @for $i from 1 through 5 {
                    &:nth-child(#{$i}) {
                        transition-delay: #{0.56 - ($i * 0.07)}s;
                    }
                }
                a,
                span {
                    display: block;
                    position: relative;
                    color: var(--off-white);
                    font-family: 'Ek Mukta', sans-serif;
                    font-weight: 100;
                    text-decoration: none;
                    font-size: 1.3rem;
                    line-height: 2.35;
                    font-weight: 200;
                    width: 100%;
                }

                span:hover {
                    cursor: pointer;
                }
            }
        }
        &.menuOpened {
            height: 100%;
            background-color: var(--off-black);
            transition: all 0.3s ease-in, background 0.5s ease-in;

            .burgerContainer {
                z-index: 100;
                position: absolute;
                right: 0;
                display: inline-block;
                height: 50px;
                width: 50px;
                transform: rotate(90deg);
                .burger {
                    .bar {
                        transition: all 0.4s
                            cubic-bezier(0.4, 0.01, 0.165, 0.99);
                        transition-delay: 0.2s;
                        background: var(--off-black);

                        &.topBar {
                            transform: translateY(4px) rotate(45deg);
                        }
                        &.btmBar {
                            transform: translateY(3px) rotate(-45deg);
                        }
                    }
                }
            }
            ul.menu {
                li.menuItem {
                    transform: scale(1) translateY(0px);
                    opacity: 1;
                    @for $i from 1 through $menuItems {
                        &:nth-child(#{$i}) {
                            transition-delay: #{0.07 * $i + 0.2}s;
                        }
                    }
                }
            }
            .icon {
                &.iconBag {
                    transform: translateX(75px);
                    transition-delay: 0.3s;
                }
            }
        }
        .socialLinks {
            padding-top: 2rem;
            display: flex;
            color: white;
            width: 100%;
            column-gap: 2rem;
            font-size: 2rem;
            justify-content: center;
        }
    }
`
