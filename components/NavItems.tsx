import React from 'react'
import { Link, NavLink } from 'react-router'
import { sidebarItems } from '~/constants'
import { cn } from '~/lib/utils'

const NavItems = ({handleClick} : {handleClick?: () => void}) => {

    const user = {
        name: 'Wasim',
        email: 'contact@gmail.com',
        imageUrl: '/assets/images/user.png',
    }

    return (
        <section className="nav-items">
            <Link to="/" className="link-logo">
                <img src="/assets/icons/logo.svg" alt="Logo" className="size-[30px]" />
                <h1>Tourvisto</h1>
            </Link>
            <div className="container">
                <nav>
                    {sidebarItems.map(({ icon, id, href, label }) => (
                        <NavLink key={id} to={href} onClick={handleClick}>
                            {/* <img src={item.icon} alt={item.label} className="icon" />
                        <span className="label">{item.label}</span> */}
                            {({ isActive }: { isActive: boolean }) => (
                                <div className={cn('group nav-item', {
                                    'bg-primary-100 !text-white': isActive,
                                })}>
                                    <img src={icon} alt={label} className={`group-hover:brightness-0 size-0 group-hover:invert ${isActive ? 'brightness-0 invert' : 'text-dark-200'}`} />
                                    {label}
                                </div>
                            )}
                        </NavLink>
                    ))}
                </nav>
                <footer className="nav-footer">
                    <img src={user?.image || 'assets/images/david.webp'} alt={user?.name || 'David'} />
                    <article>
                        <h2>{user?.name}</h2>
                        <p>{user?.email}</p>
                    </article>
                    <button 
                        onClick={() => console.log('Logout')}
                        className="cursor-pointer"
                    >
                        <img src="/assets/icons/logout.svg" alt="Logout" className="size-6" />   
                    </button>
                </footer>

            </div>
        </section>
    )
}

export default NavItems