import Home from "./views/home";

import {
    ScheduleOutlined,
    DashboardOutlined,
    SettingOutlined,
} from "@ant-design/icons";

export interface IRoute {
    path: string;
    label: string;
    icon?: React.ReactNode;
    component?: any;
    children?: Array<IRoute>;
}

const routes: Array<IRoute> = [
    {
        path: "/",
        component: <Home />,
        label: "首页",
        icon: <DashboardOutlined />,
    },
    {
        path: "/record",
        component: <Home />,
        label: "任务",
        icon: <ScheduleOutlined />,
    },
    {
        path: "/setting",
        component: <Home />,
        label: "设置",
        icon: <SettingOutlined />,
    },
];

export default routes;
