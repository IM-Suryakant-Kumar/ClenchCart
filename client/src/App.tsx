import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { Layout } from "./components";
import { Home, NotFound } from "./components/pages";

const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route index element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  )
}

export default App