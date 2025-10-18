import { Overlay } from "@radix-ui/react-dialog";
import type { ComponentProps, FC } from "react";
import { cn } from "@/lib/utils";

interface SheetOverlayProps extends ComponentProps<typeof Overlay> {}

/** Оверлэй для шторы */
const SheetOverlay: FC<SheetOverlayProps> = ({ className, ...restProps }) => {
	return (
		<Overlay
			data-slot="sheet-overlay"
			className={cn(
				"data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
				className,
			)}
			{...restProps}
		/>
	);
};

export { SheetOverlay };
