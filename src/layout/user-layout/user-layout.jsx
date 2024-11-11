
import { Link, Navigate, Outlet } from 'react-router-dom';

let user = true;

export const UserLayout = () => {
    if (!user) {
        return <Navigate to={'/'} />
    }
    return (
        <div style={{ display: 'flex', gap: "20px" }}>
            <div style={{ backgroundColor: "magenta", padding: "30px", display: "flex", flexDirection: "column", gap: "20px", height: "100vh", width: "300px" }}>
                <Link to={'/profile'}>Profile</Link>
                <Link to={'/profile/address'}>Address</Link>
                <Link to={'/profile/change-password'}>ChangePassword</Link>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}


