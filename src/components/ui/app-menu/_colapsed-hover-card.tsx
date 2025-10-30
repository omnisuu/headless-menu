import { type FC, type ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";

interface CollapsedHoverCardProps {
	title: ReactNode;
	trigger: ReactNode;
	children: ReactNode;
}

const CollapsedHoverCard: FC<CollapsedHoverCardProps> = ({
	title,
	trigger,
	children,
}) => {
	const { pathname: path } = useLocation();

	const [open, setOpen] = useState(false);

	// biome-ignore lint/correctness/useExhaustiveDependencies: Должен закрываться когда роут меняется
	useEffect(() => {
		setOpen(false);
	}, [path]);

	return (
		<HoverCard open={open} onOpenChange={setOpen} openDelay={0} closeDelay={50}>
			<HoverCardTrigger asChild>{trigger}</HoverCardTrigger>

			<HoverCardContent side="right" className="p-1">
				<div className="flex items-center gap-2 [&_svg]:size-3 text-sm pl-2 pb-1 text-muted-foreground">
					{title}
				</div>
				<ul>{children}</ul>
			</HoverCardContent>
		</HoverCard>
	);
};

export { CollapsedHoverCard };
