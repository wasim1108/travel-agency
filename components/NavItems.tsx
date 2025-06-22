import React from 'react'
import { Link, NavLink, useLoaderData, useNavigate } from 'react-router'
import { sidebarItems } from '~/constants'
import { cn } from '~/lib/utils'
import { logoutUser } from '~/appwrite/auth'

const NavItems = ({handleClick} : {handleClick?: () => void}) => {

    // const user = {
    //     name: 'Wasim',
    //     email: 'contact@gmail.com',
    //     imageUrl: '/assets/images/user.png',
    // }

    const user = useLoaderData();
    const navigate = useNavigate();

    const handleLogout = async () => {
        // Perform logout logic here, e.g., clear user session, redirect to login page
        console.log('User logged out');
        await logoutUser(); // Call the logout function
        navigate('/sign-in'); // Redirect to sign-in page after logout
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
                    <img src={user?.imageUrl || 'assets/images/david.webp'} 
                    alt={user?.name || 'David'}
                    referrerPolicy='no-referrer'
                    />
                    <article>
                        <h2>{user?.name}</h2>
                        <p>{user?.email}</p>
                    </article>
                    <button 
                        onClick={ handleLogout }
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