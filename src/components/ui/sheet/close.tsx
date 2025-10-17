import { Close } from "@radix-ui/react-dialog";
import type { ComponentProps, FC } from "react";

interface SheetCloseProps extends ComponentProps<typeof Close> {}

const SheetClose: FC<SheetCloseProps> = ({ ...restProps }) => {
	return <Close data-slot="sheet-close" {...restProps} />;
};

export { SheetClose };
