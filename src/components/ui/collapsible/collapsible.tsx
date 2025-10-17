import { Root } from "@radix-ui/react-collapsible";
import type { ComponentProps, FC } from "react";

interface CollapsibleProps extends ComponentProps<typeof Root> {}

const Collapsible: FC<CollapsibleProps> = ({ ...restProps }) => {
	return <Root data-slot="collapsible" {...restProps} />;
};

export { Collapsible };
