import ServiceList from "./components/ServiceList/ServiceList";
import Service from "./components/Service/Service";

export const ROUTES = [
    {
        path: "/",
        component: ServiceList
    },
    {
        path: "/service",
        component: Service
    },
    {
        path: "/service/:id",
        component: Service
    },
];

export const primaryGreen= '#2CB34F';

