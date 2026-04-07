export interface Subtitle {
    id: number;
    name: string;
}

export interface NavigateOption {
    id: number;
    path: string;
    title: string;
    subtitles: Subtitle[];
}

export type MenuNavigation = NavigateOption[];