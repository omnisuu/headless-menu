import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import {
	Sidebar,
	SidebarFooter,
	SidebarInset,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarProvider,
	SidebarToggle,
} from "@/components/ui/sidebar";
import { SidebarContent } from "./_sidebar-content";
import { Header } from "./header";
import { SidebarHeader } from "./sidebar-header";

export const Layout = () => {
	return (
		<SidebarProvider>
			<Sidebar collapsible="icon">
				<SidebarHeader />
				<SidebarContent />

				<SidebarFooter>
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton asChild className="bg-gray-300">
								<SidebarToggle />
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarFooter>
			</Sidebar>

			<SidebarInset>
				<Header />

				<Suspense>
					<Outlet />
				</Suspense>
			</SidebarInset>
		</SidebarProvider>
	);
};
