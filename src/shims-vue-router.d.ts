declare module 'vue-router' {
    import { App } from 'vue';

    export interface RouteRecordRaw {
        path: string;
        name?: string;
        component?: any;
        children?: RouteRecordRaw[];
    }

    export interface Router {
        install(app: App): void;
    }

    export function createRouter(options: any): Router;
    export function createWebHistory(base?: string): any;
    export function createWebHashHistory(base?: string): any;
}

declare module 'vue-router';