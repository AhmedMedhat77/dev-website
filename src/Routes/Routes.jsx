import Home from "../Pages/Home/Home";

export const RoutePathes = Object.freeze({
  Home: "/",
  Features: "/features",
  Aboutus: "/about-us",
  News: "/news",
  Contactus: "/contact-us",
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
    name: "ROUTES.abooutus",
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
    Element: "",
    isHidden: false,
  },
];

export default ROUTES;
