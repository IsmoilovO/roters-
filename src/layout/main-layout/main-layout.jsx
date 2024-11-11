
import { Link, Outlet } from 'react-router-dom';

export const MainLayout = () => {
    return (
        <>
            <header style={{ backgroundColor: "magenta", padding: "30px", display: "flex", justifyContent: "center", gap: "20px" }}>
                <Link to={'/'}>Home</Link>
                <Link to={'/users'}>Users</Link>
                <Link to={'/profile'}>Profile</Link>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>footer</footer>
        </>
    )
}

