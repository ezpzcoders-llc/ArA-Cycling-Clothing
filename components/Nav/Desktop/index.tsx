import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useScrollPosition from '@/utils/hooks/useScrollPosition'
import { NAV_ITEMS } from '../routes'
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
            {NAV_ITEMS.map((item, index) => {
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
                <ShoppingCart className="cartIcon" />
            </li>
        </ul>
    )
}
const NAV_TRANSITION_POINT = 10
const DesktopNav = () => {
    const router = useRouter()
    const { pathname: currentPage } = router
    const { scrollX, scrollY } = useScrollPosition()

    return (
        <StyledDesktopNav
            backgroundColor={
                scrollY < NAV_TRANSITION_POINT
                    ? 'transparent'
                    : 'var(--off-white)'
            }>
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
