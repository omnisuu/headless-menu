import { Close, Content } from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import type { ComponentProps, FC } from "react";
import { cn } from "@/lib/utils";
import { SheetOverlay } from "./overlay";
import { SheetPortal } from "./portal";

interface SheetContentProps extends ComponentProps<typeof Content> {
	side?: "top" | "right" | "bottom" | "left";
}

const SheetContent: FC<SheetContentProps> = ({
	className,
	children,
	side = "right",
	...restProps
}) => {
	return (
		<SheetPortal>
			<SheetOverlay />
			<Content
				data-slot="sheet-content"
				className={cn(
					"bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
					side === "right" &&
						"data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
					side === "left" &&
						"data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
					side === "top" &&
						"data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
					side === "bottom" &&
						"data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
					className,
				)}
				{...restProps}
			>
				{children}
				<Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none">
					<XIcon className="size-4" />
					<span className="sr-only">Закрыть</span>
				</Close>
			</Content>
		</SheetPortal>
	);
};

export { SheetContent };
