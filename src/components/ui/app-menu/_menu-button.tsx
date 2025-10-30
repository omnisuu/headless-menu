import { cva, type VariantProps } from "class-variance-authority";
import { Children, type ComponentProps, type FC, isValidElement } from "react";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import {
	SidebarMenuButton as SidebarMenuButtonPrimitive,
	useSidebar,
} from "@/primitives/sidebar";

// Варианты стилизации
const sidebarMenuButtonVariants = cva(
	"peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
	{
		variants: {
			variant: {
				default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
				outline:
					"bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
			},
			size: {
				default: "h-8 text-sm",
				sm: "h-7 text-xs",
				lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

interface SidebarMenuButtonProps
	extends ComponentProps<typeof SidebarMenuButtonPrimitive>,
		VariantProps<typeof sidebarMenuButtonVariants> {
	_asComboItem?: boolean;
}

/** Интерактивный элемент для элемента меню сайдбара */
const SidebarMenuButton: FC<SidebarMenuButtonProps> = ({
	variant = "default",
	size = "default",
	className,
	children,
	_asComboItem = false,
	...restProps
}) => {
	const { isMobile, state } = useSidebar();

	const component = (
		<SidebarMenuButtonPrimitive
			data-size={size}
			className={cn(
				"whitespace-nowrap",
				sidebarMenuButtonVariants({ variant, size }),
				className,
			)}
			{...restProps}
		>
			{children}
		</SidebarMenuButtonPrimitive>
	);

	const hideHelpers = state !== "collapsed" || isMobile;

	if (_asComboItem) {
		return component;
		// if (hideHelpers) return component;
		// return <PopoverClose asChild>{component}</PopoverClose>;
	}

	let tooltipValue = null;

	Children.forEach(children, (ch) => {
		if (isValidElement(ch)) {
			// biome-ignore lint/suspicious/noExplicitAny: TODO Время ограниченно, типизирую позже
			const obj = ch.props as any;

			const title = obj?.children?.[1] || obj?.children?.props?.children?.[1];
			// console.log(title);

			if (title) tooltipValue = title;
		}
	});

	const tooltip = {
		children: tooltipValue || undefined,
	};

	return (
		<Tooltip>
			<TooltipTrigger asChild>{component}</TooltipTrigger>
			<TooltipContent
				side="right"
				align="center"
				hidden={hideHelpers} // Скрыта если сайдбар развёрнут на полную
				{...tooltip}
			/>
		</Tooltip>
	);
};

export { SidebarMenuButton };
