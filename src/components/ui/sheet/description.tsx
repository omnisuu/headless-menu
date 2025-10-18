import { Description } from "@radix-ui/react-dialog";
import type { ComponentProps, FC } from "react";
import { cn } from "@/lib/utils";

interface SheetDescriptionProps extends ComponentProps<typeof Description> {}

/** Описание шторы */
const SheetDescription: FC<SheetDescriptionProps> = ({
	className,
	...restProps
}) => {
	return (
		<Description
			data-slot="sheet-description"
			className={cn("text-muted-foreground text-sm", className)}
			{...restProps}
		/>
	);
};

export { SheetDescription };
