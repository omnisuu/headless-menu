import { Root as SeparatorRoot } from "@radix-ui/react-separator";
import type { ComponentProps, FC } from "react";
import { cn } from "@/lib/utils";

interface SeparatorProps extends ComponentProps<typeof SeparatorRoot> {}

const Separator: FC<SeparatorProps> = ({
	decorative,
	orientation,
	className,
	...restProps
}) => {
	return (
		<SeparatorRoot
			data-slot="separator"
			decorative={decorative}
			orientation={orientation}
			className={cn(
				"bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
				className,
			)}
			{...restProps}
		/>
	);
};

export { Separator };
