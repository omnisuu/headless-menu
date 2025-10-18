import { DialogClose } from "@radix-ui/react-dialog";
import { Slot } from "@radix-ui/react-slot";
import type { ComponentProps, FC } from "react";
import { Link } from "react-router-dom";
import { useSidebar } from "./provider";

interface SidebarMenuSubButtonProps extends ComponentProps<typeof Link> {
	asChild?: boolean;
	isActive?: boolean;
}

/** Элемент (кнопка) в ПОД-меню сайдбара */
const SidebarMenuSubButton: FC<SidebarMenuSubButtonProps> = ({
	asChild = false,
	isActive = false,
	...restProps
}) => {
	const { isMobile } = useSidebar();

	const BaseComponent = asChild ? Slot : Link;
	const component = (
		<BaseComponent
			data-slot="sidebar-menu-sub-button"
			data-sidebar="menu-sub-button"
			data-active={isActive}
			{...restProps}
		/>
	);

	// Для закрытия при нажатии на мобильных устройствах
	if (isMobile) return <DialogClose asChild>{component}</DialogClose>;

	return component;
};

export { SidebarMenuSubButton };
