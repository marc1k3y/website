import About from "./pages/About";
import AboutItem from "./pages/AboutItem";
import Main from "./pages/Main";
import Shop from "./pages/Shop";

export const routes = [
  { path: "*", element: <Main />, exact: false },
  { path: "/about", element: <About />, exact: true },
  { path: "/shop", element: <Shop />, exact: true },
  { path: "/shop-item/:id", element: <AboutItem />, exact: true }
]