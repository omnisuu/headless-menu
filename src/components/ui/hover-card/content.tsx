import { Content, Portal } from "@radix-ui/react-hover-card";
import type { ComponentProps, FC } from "react";
import { cn } from "@/lib/utils";

interface HoverCardContentProps extends ComponentProps<typeof Content> {}

const HoverCardContent: FC<HoverCardContentProps> = ({
	className,
	align = "center",
	sideOffset = 4,
	...restProps
}) => {
	return (
		<Portal data-slot="hover-card-portal">
			<Content
				data-slot="hover-card-content"
				align={align}
				sideOffset={sideOffset}
				className={cn(
					"bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
					className,
				)}
				{...restProps}
			/>
		</Portal>
	);
};
export { HoverCardContent };
