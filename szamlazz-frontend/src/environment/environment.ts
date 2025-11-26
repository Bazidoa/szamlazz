import { InjectionToken } from "@angular/core";

export declare const ENVIRONMENT: InjectionToken<{}>;

//itt lenne rendesen configurálva az environment, az egyszerűség kedvéért most csak ennyi vna benne
export const environment = {
    backend: '/localhost:8080',
};
