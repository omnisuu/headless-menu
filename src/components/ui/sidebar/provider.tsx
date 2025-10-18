import type { ComponentProps, CSSProperties, FC } from "react";
import { SIDEBAR_WIDTH, SIDEBAR_WIDTH_ICON } from "@/config";
import { cn } from "@/lib/utils";
import { SidebarProvider as SidebarProviderPrimitive } from "@/primitives/sidebar";

interface SidebarProviderProps
	extends ComponentProps<typeof SidebarProviderPrimitive> {}

// Обёртка, располагающая сайдбар и остальной контент корректно
const SidebarProvider: FC<SidebarProviderProps> = ({
	className,
	...restProps
}) => {
	return (
		<SidebarProviderPrimitive
			style={
				{
					"--sidebar-width": SIDEBAR_WIDTH,
					"--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
					...restProps.style,
				} as CSSProperties
			}
			className={cn(
				"group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
				className,
			)}
			{...restProps}
		/>
	);
};

export { SidebarProvider };
