import { useMemo } from "react";
import { GRID_LAYOUTS } from "../Project.constants";

export const useGridLayout = (itemsLength: number) => {
	return useMemo(() => {
		if (itemsLength === 3 || itemsLength === 6) {
			return GRID_LAYOUTS.THREE_OR_SIX;
		}
		return GRID_LAYOUTS.DEFAULT;
	}, [itemsLength]);
};
