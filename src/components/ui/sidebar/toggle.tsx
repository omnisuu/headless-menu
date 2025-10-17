import { PanelLeftIcon } from "lucide-react";
import type { ComponentProps, FC } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../button";
import { useSidebar } from "./context";

interface SidebarToggleProps extends ComponentProps<typeof Button> {}

const SidebarToggle: FC<SidebarToggleProps> = ({
	className,
	onClick,
	...restProps
}) => {
	const { toggleSidebar } = useSidebar();

	return (
		<Button
			data-sidebar="toggle"
			variant="ghost"
			size="icon"
			className={cn("size-7", className)}
			onClick={(event) => {
				onClick?.(event);
				toggleSidebar();
			}}
			{...restProps}
		>
			<PanelLeftIcon />
			<span className="sr-only">Toggle Sidebar</span>
		</Button>
	);
};

export { SidebarToggle };
