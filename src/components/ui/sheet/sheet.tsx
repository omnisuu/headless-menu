import { Root } from "@radix-ui/react-dialog";
import type { ComponentProps, FC } from "react";

interface SheetProps extends ComponentProps<typeof Root> {}

/** Обёртка шторы */
const Sheet: FC<SheetProps> = ({ ...restProps }) => {
	return <Root data-slot="sheet" {...restProps} />;
};

export { Sheet };
