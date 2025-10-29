import { HomeIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
	SidebarContent,
	SidebarGroup,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

const AppSidebarContent = () => {
	const { pathname: currentPath } = useLocation();

	return (
		<SidebarContent>
			<SidebarGroup>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							asChild
							tooltip="Главная"
							isActive={currentPath === "/"}
						>
							<Link to="/">
								<HomeIcon /> Главная
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarGroup>
		</SidebarContent>
	);
};

export { AppSidebarContent as SidebarContent };
