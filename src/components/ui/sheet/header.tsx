import type { ComponentProps, FC } from "react";
import { cn } from "@/lib/utils";

interface SheetHeaderProps extends ComponentProps<"div"> {}

/** Хедер шторы */
const SheetHeader: FC<SheetHeaderProps> = ({ className, ...restProps }) => {
	return (
		<div
			data-slot="sheet-header"
			className={cn("flex flex-col gap-1.5 p-4", className)}
			{...restProps}
		/>
	);
};

export { SheetHeader };
