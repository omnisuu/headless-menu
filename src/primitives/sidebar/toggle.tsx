import { Slot } from "@radix-ui/react-slot";
import type { ComponentProps, FC } from "react";
import { useSidebar } from "./provider";

interface SidebarToggleProps extends ComponentProps<"button"> {
	asChild?: boolean;
}

/** Кнопка переключения открытости сайдбара */
const SidebarToggle: FC<SidebarToggleProps> = ({
	asChild = false,
	onClick,
	...restProps
}) => {
	const { toggleSidebar } = useSidebar();

	const Component = asChild ? Slot : "button";

	return (
		<Component
			data-sidebar="toggle"
			onClick={(event) => {
				onClick?.(event);
				toggleSidebar();
			}}
			{...restProps}
		/>
	);
};

export { SidebarToggle };
