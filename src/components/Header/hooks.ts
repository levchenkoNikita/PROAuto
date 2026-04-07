import { getCategories, type Category } from "@/store/categories";
import { useAppSelector } from "@/store/hooks";
import type { MenuNavigation, Subtitle } from "./types";
import { ABOUT_ROUTE, BASE_ROUTE, CATALOG_ROUTE } from "@/utils/consts";
import { useState } from "react";

export const useHeaderDatasets = () => {
    const categoriesObjects: Category[] = useAppSelector(getCategories());
    const categoriesNames: Subtitle[] = categoriesObjects.map(element => ({ id: element.id, name: element.name }));
    const menuNavigation: MenuNavigation = [
        {
            id: 1,
            path: BASE_ROUTE,
            title: "Компания",
            subtitles: categoriesNames
        },
        {
            id: 2,
            path: CATALOG_ROUTE,
            title: "Каталог",
            subtitles: categoriesNames
        },
        {
            id: 3,
            path: CATALOG_ROUTE,
            title: "Услуги",
            subtitles: categoriesNames
        },
        {
            id: 4,
            path: ABOUT_ROUTE,
            title: "Информация",
            subtitles: categoriesNames
        },
        {
            id: 5,
            path: CATALOG_ROUTE,
            title: "Контакты",
            subtitles: categoriesNames
        }
    ];

    const [currentOption, setCurrentOption] = useState<number>(0);
    const [hoverOption, setHoverOption] = useState<number>(0);

    function handleClick(event: React.MouseEvent<HTMLElement>, id: number) {
        if (currentOption === id) return;
        setCurrentOption(id);
    }

    function handleMouseEnter(event: React.MouseEvent<HTMLElement>, id: number) {
        setHoverOption(id);
    }

    function handleMouseLeave() {
        setHoverOption(0);
    }

    return {
        categoriesObjects,
        categoriesNames,
        menuNavigation,
        currentOption,
        hoverOption,
        handleClick,
        handleMouseEnter,
        handleMouseLeave
    }
}