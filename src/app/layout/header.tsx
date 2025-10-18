import { SidebarToggle } from "@/components/ui/sidebar";

const AppHeader = () => {
	return (
		<header className="h-16 border-b flex items-center p-4">
			<SidebarToggle />
		</header>
	);
};

export { AppHeader as Header };
