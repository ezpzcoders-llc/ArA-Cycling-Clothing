import { useState, useEffect } from 'react'
import Link from 'next/link'
import { NAV_ITEMS } from '../routes'
import { useRouter } from 'next/router'
import { ShoppingCart, Instagram, EmailOutlined } from '@mui/icons-material'

import ArALogo from '@/assets/images/ArALogo.svg'
import { StyledMobileNav } from './StyledMobile'

const MobileNav = () => {
    const router = useRouter()
    const [show, setShow] = useState<boolean>(false)
    const [stopScroll, setStopScroll] = useState<boolean>(false)

    const menuToggle = () => {
        setShow(!show)
        setStopScroll(!stopScroll)
    }
    const onHandleOpenCart = () => {
        //TODO
        console.log('open')
        //Dispatch to open cart
    }
    useEffect(() => {
        if (stopScroll === true) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [stopScroll])
    return (
        <StyledMobileNav>
            <div className={show === true ? 'header menuOpened' : 'header'}>
                <div className="logo-container">
                    <img
                        className="logo"
                        src={ArALogo.src}
                        alt="Barrese Bookkeeping"
                        onClick={() => router.push('/')}
                    />
                </div>

                <ShoppingCart className="cartIcon" onClick={onHandleOpenCart} />

                <div className="burgerContainer" onClick={menuToggle}>
                    <div className="burger">
                        <div className="bar topBar"></div>
                        <div className="bar btmBar"></div>
                    </div>
                </div>
                <ul
                    className="menu"
                    style={{ display: `${show === true ? 'block' : 'none'}` }}>
                    {NAV_ITEMS.map((item, index) => (
                        <li
                            key={index}
                            className="menuItem"
                            onClick={menuToggle}>
                            <Link href={item.path} legacyBehavior>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                    <li className="socialLinks">
                        <Link href="https://www.instagram.com/_evanyu/">
                            <Instagram className="socialIcons" />
                        </Link>
                        <Link href="https://www.instagram.com/_evanyu/">
                            <EmailOutlined className="socialIcons" />
                        </Link>
                    </li>
                </ul>
            </div>
        </StyledMobileNav>
    )
}

export default MobileNav
