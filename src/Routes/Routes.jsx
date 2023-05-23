import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
export const RoutePathes = Object.freeze({
  Home: "/",
  Features: "/features",
  Aboutus: "/about",
  News: "/news",
  Contactus: "/contact",
  StartNow: "/start-now",
});

const ROUTES = [
  {
    id: "Home",
    name: "ROUTES.home",
    path: RoutePathes.Home,
    Element: <Home />,
    isHidden: false,
    index: true,
  },
  {
    id: "features",
    name: "ROUTES.features",
    path: RoutePathes.Features,
    Element: "",
    isHidden: false,
  },
  {
    id: "about",
    name: "ROUTES.aboutus",
    path: RoutePathes.Aboutus,
    Element: "",
    isHidden: false,
  },

  {
    id: "news",
    name: "ROUTES.news",
    path: RoutePathes.News,
    Element: "",
    isHidden: false,
  },

  {
    id: "contact",
    name: "ROUTES.contact",
    path: RoutePathes.Contactus,
    Element: <Contact />,
    isHidden: false,
  },
];

export default ROUTES;
