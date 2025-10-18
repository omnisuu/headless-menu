import { Root } from "@radix-ui/react-popover";
import type { ComponentProps, FC } from "react";

interface PopoverProps extends ComponentProps<typeof Root> {}

const Popover: FC<PopoverProps> = ({ ...restProps }) => {
	return <Root data-slot="popover" {...restProps} />;
};

export { Popover };
