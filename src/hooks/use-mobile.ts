import { useEffect, useState } from "react";
import { MOBILE_BREAKPOINT } from "@/config";

/** Returns a stateful value indicating whether the screen size is mobile */
export const useIsMobile = () => {
	// Undefined by default in case server-side usage
	const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

	useEffect(() => {
		const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

		const onMqChange = (e: MediaQueryListEvent) => {
			setIsMobile(e.matches);
		};

		setIsMobile(mq.matches);
		mq.addEventListener("change", onMqChange);

		return () => {
			mq.removeEventListener("change", onMqChange);
		};
	}, []);

	return !!isMobile;
};
