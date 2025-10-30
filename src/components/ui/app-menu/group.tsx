import { type FC, type ReactNode, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
	SidebarGroupLabel as SidebarGroupLabelPrimitive,
	SidebarGroup as SidebarGroupPrimitive,
	SidebarMenu as SidebarMenuPrimitive,
} from "@/primitives/sidebar";
import { validateChildren } from "./_utils";
import { AppMenuCombo } from "./combo";
import { AppMenuItem } from "./item";

const ALLOWED_CHILDREN = [AppMenuItem, AppMenuCombo];

interface AppMenuGroupProps {
	label?: ReactNode;
	children: ReactNode;
}

/** Группа элементов сайдбара */
const AppMenuGroup: FC<AppMenuGroupProps> = ({
	label,
	children,
	...restProps
}) => {
	// Валидация детей элемента. Подскажет разработчику, всё ли он сделал правильно
	useEffect(() => {
		const problems = validateChildren(ALLOWED_CHILDREN, children);
		if (!problems.length) return;

		console.warn(
			`Вы использовали компоненты, использование которых не подразумевается в <AppMenu.Group/>:
- Проблемные компоненты: ${problems.join(", ")}.
- Разрешённые компоненты: <AppMenu.Item/>, <AppMenu.Combo/>.`,
		);
	}, [children]);

	return (
		<SidebarGroupPrimitive
			className="relative flex w-full min-w-0 flex-col p-2"
			{...restProps}
		>
			{/* Добавить лейбл если есьт соответствующий проп */}
			{label && (
				<SidebarGroupLabelPrimitive
					className={cn(
						"text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
						"group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
					)}
				>
					{label}
				</SidebarGroupLabelPrimitive>
			)}

			{/* Семантическая и стилистическая обёртка над внутренними элементами */}
			<SidebarMenuPrimitive className="flex w-full min-w-0 flex-col gap-1">
				{children}
			</SidebarMenuPrimitive>
		</SidebarGroupPrimitive>
	);
};

export { AppMenuGroup };
