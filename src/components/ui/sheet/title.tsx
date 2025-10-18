import { Title } from "@radix-ui/react-dialog";
import type { ComponentProps, FC } from "react";
import { cn } from "@/lib/utils";

interface SheetTitleProps extends ComponentProps<typeof Title> {}

/** Заголовок шторы */
const SheetTitle: FC<SheetTitleProps> = ({ className, ...restProps }) => {
	return (
		<Title
			data-slot="sheet-title"
			className={cn("text-foreground font-semibold", className)}
			{...restProps}
		/>
	);
};

export { SheetTitle };
