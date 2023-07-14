import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useScrollPosition from '@/utils/hooks/useScrollPosition'
import { NavItems } from '../routes'
import { ShoppingCart } from '@mui/icons-material'
import ArALogo from '@/assets/images/ArALogo.svg'
import { StyledDesktopNav } from './StyledDesktopNav'

interface renderNavItemProps {
    currentPage: string
}

const renderNavItems = ({ currentPage }: renderNavItemProps) => {
    const onHandleOpenCart = () => {
        //TODO
        //Dispatch to open cart
    }

    return (
        <ul className="navRoutes">
            {NavItems.map((item, index) => {
                return (
                    <li
                        key={index}
                        className={
                            currentPage === item.path
                                ? 'activeLink'
                                : 'navLinks'
                        }>
                        <Link
                            key={item.path}
                            href={item.path}
                            legacyBehavior
                            className={
                                currentPage === item.path ? 'activeLink' : ''
                            }>
                            {item.label}
                        </Link>
                    </li>
                )
            })}
            <li onClick={onHandleOpenCart}>
                <ShoppingCart />
            </li>
        </ul>
    )
}
const NAV_TRANSITION_POINT = 10
const DesktopNav = () => {
    const router = useRouter()
    const { pathname: currentPage } = router
    const scrollPosition = useScrollPosition()

    return (
        <StyledDesktopNav
            className={scrollPosition < NAV_TRANSITION_POINT ? 'show' : 'hide'}>
            <div className="navContent">
                <img
                    className="logo"
                    src={ArALogo.src}
                    alt="Ara Cycling"
                    onClick={() => router.push('/')}
                />
                {renderNavItems({ currentPage })}
            </div>
        </StyledDesktopNav>
    )
}

export default DesktopNav
