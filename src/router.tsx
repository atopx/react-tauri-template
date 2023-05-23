import Home from "./views/home";

import {
    CarryOutOutlined,
    PieChartOutlined,
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
        icon: <PieChartOutlined />,
    },
    {
        path: "/featue",
        component: <Home />,
        label: "助手",
        icon: <CarryOutOutlined />,
    },
    {
        path: "/statistic",
        component: <Home />,
        label: "统计",
        icon: <SettingOutlined />,
    },
    {
        path: "/setting",
        component: <Home />,
        label: "设置",
        icon: <SettingOutlined />,
    },
];

export default routes;
