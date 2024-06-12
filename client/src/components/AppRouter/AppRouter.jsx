import { Route, Routes } from "react-router-dom"
import { LandingPage } from '../../Pages/LandingPage/LandingPage'
import { TestPage } from '../../Pages/TestComponent/TestPage'

export const AppRouter = () => {
  return (
    <Routes>
    <Route index element={<LandingPage />}/>
    <Route path="/TestComp" element={<TestPage />}>
    </Route>
        {/* <Route path="*" element={<PageNotFound></PageNotFound>}></Route> */}
    </Routes>
  )
}
