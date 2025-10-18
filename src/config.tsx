import {
	CircleStarIcon,
	HandIcon,
	ListChevronsUpDownIcon,
	SettingsIcon,
	VenetianMask,
} from "lucide-react";
import type { ReactNode } from "react";

// Настройки сайдбара
export const MOBILE_BREAKPOINT = 768;
export const SIDEBAR_WIDTH = "16rem";
export const SIDEBAR_WIDTH_ICON = "3rem";
export const SIDEBAR_WIDTH_MOBILE = "18rem";

export interface AppRoute {
	path: string;
	element?: ReactNode;
	children?: AppRoute[];
	id: string;
	title: string;
	icon?: ReactNode;
	showInSidebar?: boolean;
}

export interface AppRouteGroup {
	groupId: string;
	title: string;
	children: AppRoute[];
}

// Конфиг роутов
export const routesConfig: (AppRoute | AppRouteGroup)[] = [
	{
		groupId: "group-1",
		title: "Основное",
		children: [
			{
				id: "hello",
				title: "Привет!",
				path: "/",
				element: <>Hello</>,
				icon: <HandIcon />,
				showInSidebar: true,
			},
			{
				id: "list-1",
				title: "Список 1",
				path: "/list",
				icon: <ListChevronsUpDownIcon />,
				children: [
					{
						id: "list-item-1",
						title: "Первый элемент",
						path: "first",
						element: <>Первый</>,
						icon: <CircleStarIcon />,
					},
					{
						id: "list-item-2",
						title: "Второй элемент",
						path: "second",
						element: <>Второй</>,
					},
				],
			},
			{
				id: "list-2",
				title: "Список 2",
				path: "/list",
				icon: <ListChevronsUpDownIcon />,
				children: [
					{
						id: "list-item-2-1",
						title: "Первый элемент 2",
						path: "first-2",
						element: <>Первый 2</>,
						icon: <CircleStarIcon />,
					},
					{
						id: "list-item-2-2",
						title: "Второй элемент 2",
						path: "second-2",
						element: <>Второй 2</>,
					},
				],
			},
		],
	},
	{
		id: "settings",
		title: "Настройки",
		path: "/settings",
		element: <>Настройки</>,
		icon: <SettingsIcon />,
	},
	{
		id: "hidden-route",
		title: "Секретный роут",
		path: "/hidden-route",
		element: <>Секрет рассекречен</>,
		icon: <VenetianMask />,
		showInSidebar: false,
	},
];
