import { Trigger } from "@radix-ui/react-dialog";
import type { ComponentProps, FC } from "react";

interface SheetTriggerProps extends ComponentProps<typeof Trigger> {}

/** Триггер появления шторы */
const SheetTrigger: FC<SheetTriggerProps> = ({ ...restProps }) => {
	return <Trigger data-slot="sheet-trigger" {...restProps} />;
};

export { SheetTrigger };
