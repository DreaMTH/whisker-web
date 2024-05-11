export declare interface NavbarItem {
    path: string;
    title: string;
    forAuth: Boolean;
}

export const NavbarItems: NavbarItem[] = [
    {
        path: "/",
        title: "Home",
        forAuth: true,
    },
    {
        path: "/news",
        title: "News",
        forAuth: true,
    },
    {
        path: "/profile",
        title: "Profile",
        forAuth: true,
    },
    {
        path: "/messages",
        title: "Messages",
        forAuth: true,
    },
    {
        path: "/auth/login",
        title: "Sign in",
        forAuth: false,
    },
    {
        path: "/auth/registration",
        title: "Sign up",
        forAuth: false,
    },
    {
        path: "/auth/exit",
        title: "Log out",
        forAuth: true,
    },

]