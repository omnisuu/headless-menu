import { type FC, type ReactNode, useEffect } from "react";
import { SidebarContent as SidebarContentPrimitive } from "@/primitives/sidebar";
import { validateChildren } from "./_utils";
import { AppMenuGroup } from "./group";

const ALLOWED_CHILDREN = [AppMenuGroup];

interface AppMenuContentProps {
	children: ReactNode;
}

/** Главное содержимое сайдбара (обычно между хэдером и футером) */
const AppMenuContent: FC<AppMenuContentProps> = ({ children }) => {
	// Валидация детей элемента. Подскажет разработчику, всё ли он сделал правильно
	useEffect(() => {
		const problems = validateChildren(ALLOWED_CHILDREN, children);
		if (!problems.length) return;

		console.warn(
			`Вы использовали компоненты, использование которых не подразумевается в <AppMenu.Content/>:
- Проблемные компоненты: ${problems.join(", ")}.
- Разрешённые компоненты: <AppMenu.Group/>.`,
		);
	}, [children]);

	return (
		<SidebarContentPrimitive className="flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden">
			{children}
		</SidebarContentPrimitive>
	);
};

export { AppMenuContent };
