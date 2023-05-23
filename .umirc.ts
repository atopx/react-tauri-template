import { defineConfig } from '@umijs/max';

export default defineConfig({
    antd: {},
    access: {},
    model: {},
    initialState: {},
    request: {},
    layout: {
        title: 'React Tarui Template',
    },
    routes: [
        {
            path: '/',
            redirect: '/login',
        },
        {
            name: '登陆',
            path: '/login',
            component: './Login',
            layout: false,
        },
        {
            name: '首页',
            path: '/home',
            component: './Home',
        },
        {
            name: '权限演示',
            path: '/access',
            component: './Access',
        },
        {
            name: ' CRUD 示例',
            path: '/table',
            component: './Table',
        },
    ],
    npmClient: 'pnpm',
});
