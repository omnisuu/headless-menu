import { Close as DialogClose } from "@radix-ui/react-dialog";
import { Slot } from "@radix-ui/react-slot";
import {
	Children,
	type ComponentProps,
	type FC,
	isValidElement,
	type ReactNode,
} from "react";
import { useSidebar } from "./provider";

interface SidebarMenuButtonProps extends ComponentProps<"button"> {
	asChild?: boolean;
	isActive?: boolean;
}

/** Элемент (кнопка) в меню сайдбара */
const SidebarMenuButton: FC<SidebarMenuButtonProps> = ({
	asChild = false,
	isActive = false,
	children,
	...restProps
}) => {
	const { isMobile } = useSidebar();

	const Component = asChild ? Slot : "button";

	const baseElement = (
		<Component
			data-slot="sidebar-menu-button"
			data-sidebar="menu-button"
			data-active={isActive}
			{...restProps}
		>
			{children}
		</Component>
	);

	let resultElement: ReactNode;

	// Для автоматического закрытия сайдбара на мобильных устройствах при клике на ссылку
	if (isMobile) {
		let linkChildFound = false;

		// Проверяем на наличие Link
		Children.forEach(children, (child) => {
			if (isValidElement(child)) {
				if (
					(child.type as never as { displayName: string }).displayName ===
					"Link"
				) {
					resultElement = <DialogClose asChild>{baseElement}</DialogClose>;
					linkChildFound = true;
				}
			}
		});

		// Link не найден - используется базовый элемент
		if (!linkChildFound) resultElement = baseElement;
	} else resultElement = baseElement;

	return resultElement;
};

export { SidebarMenuButton };
