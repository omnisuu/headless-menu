import { PanelLeftIcon } from "lucide-react";
import type { ComponentProps, FC } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
	SidebarToggle as SidebarTogglePrimitive,
	useSidebar,
} from "@/primitives/sidebar";

interface SidebarToggleProps
	extends ComponentProps<typeof SidebarTogglePrimitive> {}

const SidebarToggle: FC<SidebarToggleProps> = ({ className, ...restProps }) => {
	const { open, openOnMobile } = useSidebar();

	return (
		<SidebarTogglePrimitive
			asChild
			className={cn("size-7", className)}
			{...restProps}
		>
			<Button variant="ghost" size="icon">
				<PanelLeftIcon />
				<span className="sr-only">
					{open || openOnMobile ? "Закрыть" : "Открыть"} навигацию
				</span>
			</Button>
		</SidebarTogglePrimitive>
	);
};

export { SidebarToggle };
