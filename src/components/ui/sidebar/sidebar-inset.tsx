import type { ComponentProps, FC } from "react";
import { cn } from "@/lib/utils";
import { SidebarInset as SidebarInsetPrimitive } from "@/primitives/sidebar";

interface SidebarInsetProps
	extends ComponentProps<typeof SidebarInsetPrimitive> {}

/** Обёртка для контента рядом с сайдбаром */
const SidebarInset: FC<SidebarInsetProps> = ({ className, ...restProps }) => {
	return (
		<SidebarInsetPrimitive
			className={cn(
				"bg-background relative flex w-full flex-1 flex-col",
				"md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
				className,
			)}
			{...restProps}
		/>
	);
};

export { SidebarInset };
