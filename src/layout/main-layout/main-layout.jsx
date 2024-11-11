import './main-layout.css'
import { Link, Outlet } from 'react-router-dom';

export const MainLayout = () => {
    return (
        <>
            <header className='header'>
                <Link className='text' to={'/'}>Home</Link>
                <Link className='text' to={'/users'}>Users</Link>
                <Link className='text' to={'/profile'}>Profile</Link>
            </header>
            <main className='menu'>
                <Outlet />
            </main>
            <footer>footer</footer>
        </>
    )
}

