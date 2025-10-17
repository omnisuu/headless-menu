import { Portal } from "@radix-ui/react-dialog";
import type { ComponentProps, FC } from "react";

interface SheetPortalProps extends ComponentProps<typeof Portal> {}

const SheetPortal: FC<SheetPortalProps> = ({ ...restProps }) => {
	return <Portal data-slot="sheet-portal" {...restProps} />;
};

export { SheetPortal };
