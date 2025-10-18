import type { ComponentProps, FC } from "react";
import { cn } from "@/lib/utils";
import { SidebarContent as SidebarContentPrimitive } from "@/primitives/sidebar";

interface SidebarContentProps
	extends ComponentProps<typeof SidebarContentPrimitive> {}

/** Главное содержимое сайдбара (обычно между хэдером и футером) */
const SidebarContent: FC<SidebarContentProps> = ({
	className,
	...restProps
}) => {
	return (
		<SidebarContentPrimitive
			className={cn(
				"flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
				className,
			)}
			{...restProps}
		/>
	);
};

export { SidebarContent };
