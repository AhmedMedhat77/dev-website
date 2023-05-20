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
    name: "Home",
    path: RoutePathes.Home,
    Element: <Home />,
    isHidden: false,
    index: true,
  },
  {
    id: "features",
    name: "Features",
    path: RoutePathes.Features,
    Element: "",
    isHidden: false,
  },
  {
    id: "about",
    name: "About us",
    path: RoutePathes.Aboutus,
    Element: "",
    isHidden: false,
  },

  {
    id: "news",
    name: "News",
    path: RoutePathes.News,
    Element: "",
    isHidden: false,
  },

  {
    id: "contact",
    name: "Contact",
    path: RoutePathes.Contactus,
    Element: "",
    isHidden: false,
  },
  {
    id: "start",
    name: "Start now",
    path: RoutePathes.StartNow,
    Element: "",
    isHidden: false,
  },
];

export default ROUTES;
