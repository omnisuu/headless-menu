import { PanelLeftDashedIcon } from "lucide-react";
import { Link } from "react-router-dom";
import {
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

const AppSidebarHeader = () => {
	return (
		<SidebarHeader>
			<SidebarMenu>
				<SidebarMenuItem>
					<SidebarMenuButton
						tooltip="Headless сайдбар"
						size="lg"
						className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
						asChild
					>
						<Link to="/">
							<div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
								<PanelLeftDashedIcon className="size-4" />
							</div>
							<div className="grid flex-1 text-left text-sm leading-none">
								<span className="truncate font-medium text-lg block leading-none">
									Headless
								</span>
								<span className="truncate font-medium text-sm">сайдбар</span>
							</div>
						</Link>
					</SidebarMenuButton>
				</SidebarMenuItem>
			</SidebarMenu>
		</SidebarHeader>
	);
};

export { AppSidebarHeader as SidebarHeader };
