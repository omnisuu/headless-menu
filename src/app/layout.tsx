import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import {
	Sidebar,
	SidebarInset,
	SidebarProvider,
} from "@/components/ui/sidebar";

export const Layout = () => {
	return (
		<SidebarProvider>
			<Sidebar></Sidebar>

			<SidebarInset>
				<Suspense>
					<Outlet />
				</Suspense>
			</SidebarInset>
		</SidebarProvider>
	);
};
