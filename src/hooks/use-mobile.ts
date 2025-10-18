import { useEffect, useState } from "react";
import { MOBILE_BREAKPOINT } from "@/config";

/** Хук для определения типа устройства на основе ширины экрана */
export const useIsMobile = () => {
	// Начальное значение undefined для корректной гидрации если захочется SSR
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
