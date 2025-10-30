import { type CSSProperties, type FC, type ReactNode, useEffect } from "react";
import { SIDEBAR_WIDTH, SIDEBAR_WIDTH_ICON } from "@/config";
import { SidebarProvider as SidebarProviderPrimitive } from "@/primitives/sidebar";
import { validateChildren } from "./_utils";
import { AppMenu } from "./app-menu";
import { AppMenuAppWindow } from "./app-window";

const ALLOWED_CHILDREN = [AppMenu, AppMenuAppWindow];

interface AppMenuAppWrapperProps {
	children: ReactNode;
}

const AppMenuAppWrapper: FC<AppMenuAppWrapperProps> = ({ children }) => {
	// Валидация детей элемента. Подскажет разработчику, всё ли он сделал правильно
	useEffect(() => {
		const problems = validateChildren(ALLOWED_CHILDREN, children);
		if (!problems.length) return;

		console.warn(
			`Вы использовали компоненты, использование которых не подразумевается в <AppMenu.AppWrapper/>:
- Проблемные компоненты: ${problems.join(", ")}.
- Разрешённые компоненты: <AppMenu/>, <AppMenu.AppWindow/>.`,
		);
	}, [children]);

	return (
		<SidebarProviderPrimitive
			style={
				{
					"--sidebar-width": SIDEBAR_WIDTH,
					"--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
				} as CSSProperties
			}
			className="group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full"
		>
			{children}
		</SidebarProviderPrimitive>
	);
};

export { AppMenuAppWrapper };
