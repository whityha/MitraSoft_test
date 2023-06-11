import { AboutMe, Details, MainPage } from '@/pages';

export enum PATHS {
    MAIN = '/',
    ABOUT_ME = '/about',
    DETAILS = '/details/:id',
}

export enum PAGES {
    MAIN = 'main',
    ABOUT_ME = 'about',
    DETAILS = 'details',
}

export const ROUTES = [
    {
        path: PATHS.MAIN,
        name: PAGES.MAIN,
        element: <MainPage />,
    },
    {
        path: PATHS.ABOUT_ME,
        name: PAGES.ABOUT_ME,
        element: <AboutMe />,
    },
    {
        path: PATHS.DETAILS,
        name: PAGES.DETAILS,
        element: <Details />,
    },
];
