import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/home/home"
import { Users } from "./pages/users/users"
import { UserDetail } from "./pages/user/user-datail"
import { MainLayout } from "./layout/main-layout/main-layout"
import { Profile } from "./pages/profile/profile"
import { UserLayout } from "./layout/user-layout/user-layout"
import { ChangePassword } from "./pages/profile/change-pasword"
import { Address } from "./pages/profile/adress"


function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="user-detail/:userId" element={<UserDetail />} />
          <Route path="profile" element={<UserLayout />}>
            <Route index element={<Profile />} />
            <Route path="change-password" element={<ChangePassword />} />
            <Route path="address" element={<Address />} />
          </Route>
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>
      </Routes>

    </>
  )
}

export default App