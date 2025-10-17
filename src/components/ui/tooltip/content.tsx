import { Arrow, Content, Portal } from "@radix-ui/react-tooltip";
import type { ComponentProps, FC } from "react";
import { cn } from "@/lib/utils";

interface TooltipContentProps extends ComponentProps<typeof Content> {}

const TooltipContent: FC<TooltipContentProps> = ({
	className,
	sideOffset = 0,
	children,
	...restProps
}) => {
	return (
		<Portal>
			<Content
				data-slot="tooltip-content"
				sideOffset={sideOffset}
				className={cn(
					"bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
					className,
				)}
				{...restProps}
			>
				{children}
				<Arrow className="bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" />
			</Content>
		</Portal>
	);
};

export { TooltipContent };
