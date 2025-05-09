import { RootLayout } from "./components/RootLayout"
import { Home } from "./pages/Home"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { User } from "./pages/User"
import { Dashboard } from "./components/profile/Dashboard"
import { Order } from "./components/profile/Order"
import { ChangePassword } from "./components/profile/ChangePassword"
import { UpdataProfile } from "./components/profile/UpdataProfile"
import { MyAccount } from "./components/profile/MyAccount"
import { Login } from "./components/profile/Login"
import { Register } from "./components/profile/Register"
import { Checkout } from "./components/profile/Checkout"

function App() {

  // font-family: "Nunito", sans-serif;

  const router = createBrowserRouter([
    {
      path: '/', element: <RootLayout />, children: [
        { index: true, element: <Home /> },
        {
          path: "/user", element: <User />, children: [
            { index: true, element: <Dashboard /> },
            { path: "my-order", element: <Order /> },
            { path: "my-account", element: <MyAccount /> },
            { path: "change-password", element: <ChangePassword /> },
            { path: "update-profile", element: <UpdataProfile /> },
            { path: "checkout", element: <Checkout /> },
          ]
        },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
