import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    {
        path: '/dashboard/classic',
        title: 'Dashboard',
        icon: 'mdi mdi-view-dashboard',
        class: '', //has-arrow 
        extralink: false,
        submenu:[]
    },
    {
        path: '',
        title: 'Posts',
        icon: 'mdi mdi-pin',
        class: 'has-arrow',
        extralink: false,
        submenu: [
            {
                        path: '/post/all',
                        title: 'All Posts',
                        icon: 'mdi mdi-twitch',
                        class: '',
                        extralink: false,
                        submenu: []
            },
            {
                path: '/post/add',
                title: 'Add Post',
                icon: 'mdi mdi-message-plus',
                class: '',
                extralink: false,
                submenu: []
            },
            // {
            //     path: '/post/categories',
            //     title: 'Categories',
            //     icon: 'mdi mdi-apps',
            //     class: '',
            //     extralink: false,
            //     submenu: []
            // },
            // {
            //     path: '/post/tags',
            //     title: 'Tags',
            //     icon: 'mdi mdi-tag-multiple',
            //     class: '',
            //     extralink: false,
            //     submenu: []
            // }

        ]
    },
    {
        path: '',
        title: 'Recipes',
        icon: 'mdi mdi-food',
        class: 'has-arrow',
        extralink: false,
        submenu: [
            {
                path: '/recipes/all',
                title: 'All Recipes',
                icon: 'mdi mdi-adjust',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                        path: '/recipes/addrecipe',
                        title: 'Add Recipe',
                        icon: 'mdi mdi-adjust',
                        class: '',
                        extralink: false,
                        submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'WorkOut',
        icon: 'mdi mdi-dumbbell',
        class: 'has-arrow', //has-arrow 
        extralink: false,
        submenu: [
            {
                path: '/workout/all',
                title: 'All Workouts',
                icon: 'mdi mdi-adjust',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/workout/addworkout',
                title: 'Add Workout',
                icon: 'mdi mdi-adjust',
                class: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '/profile',
        title: 'Profile',
        icon: 'mdi mdi-account-network',
        class: '', //has-arrow 
        extralink: false,
        submenu:[]
    }
        // {
        //     path: '/users',
        //     title: 'Users',
        //     icon: 'mdi mdi-account-multiple',
        //     class: '',
        //     extralink: false,
        //     submenu: []
        // },
    
                
];
