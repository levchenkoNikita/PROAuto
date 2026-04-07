import type { AuthRoutes, PublicRoutes } from "./types";
import { ABOUT_ROUTE, BASE_ROUTE, BASKET_ROUTE, CATALOG_ROUTE } from "@/utils/consts";
import Home from '@/pages/Home/index';
import Catalog from "@/pages/Catalog/Catalog";
import Basket from "@pages/Basket";
import Contacts from "@pages/Contacts";
import Information from "@pages/Information";
import Services from "@pages/Services";
import About from "@pages/About";

export const authRoutes: AuthRoutes = [
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
]

export const publicRoutes: PublicRoutes = [
    {
        path: BASE_ROUTE,
        Component: Home
    },
    {
        path: ABOUT_ROUTE,
        Component: About
    },
    {
        path: CATALOG_ROUTE,
        Component: Catalog
    }
]