import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merges tailwind classlists */
export const cn = (...classes: ClassValue[]) => {
	return twMerge(clsx(classes));
};
