import type { CSSProperties, FC, ReactNode } from "react";
import { useEffect } from "react";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
} from "@/components/ui/sheet";
import { SIDEBAR_WIDTH_MOBILE } from "@/config";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/primitives/sidebar";
import { validateChildren } from "./_utils";
import { AppMenuContent } from "./content";
import { AppMenuFooter } from "./footer";
import { AppMenuHeader } from "./header";

const ALLOWED_CHILDRED = [AppMenuHeader, AppMenuContent, AppMenuFooter];

interface AppMenuProps {
	className?: string;
	children: ReactNode;
}

const AppMenu: FC<AppMenuProps> = ({ className, children }) => {
	const { isMobile, state, openOnMobile, setOpenOnMobile } = useSidebar({
		customError:
			"\nВаш <AppMenu/> находится вне <AppMenu.AppWrapper/>.\n\nОберните <AppMenu/> в <AppMenu.AppWrapper/>, это критически важно для корректной работы и позиционирования элементов.\n\n",
	});

	// Валидация детей элемента. Подскажет разработчику, всё ли он сделал правильно
	useEffect(() => {
		const problems = validateChildren(ALLOWED_CHILDRED, children);
		if (!problems.length) return;

		console.warn(
			`Вы использовали компоненты, использование которых не подразумевается в <AppMenu/>:
- Проблемные компоненты: ${problems.join(", ")}.
- Разрешённые компоненты: <AppMenu.Header/>, <AppMenu.Content/>, <AppMenu.Footer/>.`,
		);
	}, [children]);

	if (isMobile) {
		return (
			<Sheet open={openOnMobile} onOpenChange={setOpenOnMobile}>
				<SheetContent
					data-sidebar="sidebar"
					data-slot="sidebar"
					data-mobile="true"
					className="bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden"
					style={
						{
							"--sidebar-width": SIDEBAR_WIDTH_MOBILE,
						} as CSSProperties
					}
					side="left"
				>
					<SheetHeader className="sr-only">
						<SheetTitle>Меню</SheetTitle>
						<SheetDescription>
							Используйте меню для навигации по сайту
						</SheetDescription>
					</SheetHeader>
					<div className="flex h-full w-full flex-col">{children}</div>
				</SheetContent>
			</Sheet>
		);
	}

	return (
		// Контейнер сайдбара
		<div
			className="group peer text-sidebar-foreground hidden md:block"
			data-state={state}
			data-collapsible={state === "collapsed" ? "icon" : ""}
			data-variant="sidebar"
			data-side="left"
			data-slot="sidebar"
		>
			{/* "Формочка" для сайдбара, чтобы контент в случае чего не пропадал под ним */}
			<div
				data-slot="sidebar-gap"
				className={cn(
					"relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
					"group-data-[collapsible=offcanvas]:w-0",
					"group-data-[side=right]:rotate-180",
					"group-data-[collapsible=icon]:w-(--sidebar-width-icon)",
				)}
			/>
			{/* Контейнер содержимого сайдбара */}
			<div
				data-slot="sidebar-container"
				className={cn(
					"fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
					"left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]",
					"right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
					"group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
					className,
				)}
			>
				<div
					data-sidebar="sidebar"
					data-slot="sidebar-inner"
					className="bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
				>
					{children}
				</div>
			</div>
		</div>
	);
};

export { AppMenu };
