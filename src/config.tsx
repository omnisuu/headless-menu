import {
	CircleStarIcon,
	HandIcon,
	ListChevronsUpDownIcon,
	VenetianMask,
} from "lucide-react";
import type { ReactNode } from "react";

export const MOBILE_BREAKPOINT = 768;
export const SIDEBAR_WIDTH = "16rem";
export const SIDEBAR_WIDTH_ICON = "3rem";
export const SIDEBAR_WIDTH_MOBILE = "18rem";

export interface AppRoute {
	path: string;
	element: ReactNode;
	children?: AppRoute[];
	id: string;
	title: string;
	icon?: ReactNode;
	showInSidebar?: boolean;
}

export const routesConfig: AppRoute[] = [
	{
		id: "hello",
		title: "Привет!",
		path: "/",
		element: <>Hello</>,
		icon: <HandIcon />,
		showInSidebar: true,
	},
	{
		id: "list",
		title: "Список",
		path: "/list",
		element: <>List</>,
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
		id: "hidden-route",
		title: "Секретный роут",
		path: "/hidden-route",
		element: <>Секрет рассекречен</>,
		icon: <VenetianMask />,
		showInSidebar: false,
	},
];
