import {
	Children,
	cloneElement,
	type FC,
	isValidElement,
	type ReactNode,
	useEffect,
} from "react";
import { Link, useLocation } from "react-router-dom";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import {
	SidebarMenuItem as SidebarMenuItemPrimitive,
	SidebarMenuSub as SidebarMenuSubPrimitive,
	useSidebar,
} from "@/primitives/sidebar";
import { CollapsedHoverCard } from "./_colapsed-hover-card";
import { SidebarMenuButton } from "./_menu-button";
import { validateChildren } from "./_utils";
import { AppMenuItem } from "./item";

const ALLOWED_CHILDREN = [AppMenuItem];

interface AppMenuComboProps {
	title: ReactNode;
	children: ReactNode;
}

const AppMenuCombo: FC<AppMenuComboProps> = ({ title, children }) => {
	const { state, isMobile } = useSidebar();
	const { pathname: path } = useLocation();

	// Валидация детей элемента. Подскажет разработчику, всё ли он сделал правильно
	useEffect(() => {
		const problems = validateChildren(ALLOWED_CHILDREN, children);
		if (!problems.length) return;

		console.warn(
			`Вы использовали компоненты, использование которых не подразумевается в <AppMenu.Combo/>:
- Проблемные компоненты: ${problems.join(", ")}.
- Разрешённые компоненты: <AppMenu.Item/>.`,
		);
	}, [children]);

	let firstChildPath: string | null = null;
	let isContainsCurrentPage = false;

	// Получаем ссылку из первого элемента, и определяем, есть ли среди детей активный элемент
	for (const child of Children.toArray(children)) {
		if (isValidElement(child)) {
			// biome-ignore lint/suspicious/noExplicitAny: TODO Время ограниченно, типизирую позже
			const foundPath = (child.props as any)?.to;
			if (!foundPath) continue;

			if (!firstChildPath) firstChildPath = foundPath;
			if (path === foundPath) isContainsCurrentPage = true;
		}
	}

	const hideHelpers = state !== "collapsed" || isMobile;

	// Основной компонент
	const trigger = firstChildPath ? (
		<SidebarMenuButton
			_asComboItem
			asChild
			isActive={isContainsCurrentPage && !hideHelpers}
		>
			<Link to={firstChildPath}>{title}</Link>
		</SidebarMenuButton>
	) : (
		<SidebarMenuButton
			_asComboItem
			isActive={isContainsCurrentPage && !hideHelpers}
		>
			{title}
		</SidebarMenuButton>
	);

	// Детям прокидывается проп _asComboItem чтобы они знали как себя вести
	// TODO: Эффективнее через context api
	const childrenAsComboItem = Children.map(children, (child) => {
		if (isValidElement(child)) {
			return cloneElement(child, {
				...(child.props || {}),
				_asComboItem: true,
			} as never);
		}
		return child;
	});

	// Колапсед-состояние
	if (!hideHelpers) {
		return (
			<CollapsedHoverCard title={title} trigger={trigger}>
				{childrenAsComboItem}
			</CollapsedHoverCard>
		);
	}

	// Развёрнутое состояние
	return (
		<Collapsible
			open={isContainsCurrentPage}
			asChild
			className="group/collapsible"
		>
			<SidebarMenuItemPrimitive className="group/menu-item relative">
				<CollapsibleTrigger asChild>{trigger}</CollapsibleTrigger>
				<CollapsibleContent>
					<SidebarMenuSubPrimitive
						className={cn(
							"border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
							"group-data-[collapsible=icon]:hidden",
						)}
					>
						{childrenAsComboItem}
					</SidebarMenuSubPrimitive>
				</CollapsibleContent>
			</SidebarMenuItemPrimitive>
		</Collapsible>
	);
};

export { AppMenuCombo };
