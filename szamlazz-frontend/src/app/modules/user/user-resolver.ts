import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from './models/user-interface';

@Injectable({ providedIn: 'root' })
export class UserResolver {
    constructor() { }

    resolve(route: ActivatedRouteSnapshot): Observable<User> {
        // const uuid: string = route.paramMap.get('uuid');
        // if (uuid) {
        //     this.kryptokontoFacade.getKryptoKontoInsti(uuid);
        //     return this.kryptokontoFacade.kryptokonto$.pipe(
        //         filter(
        //             (result: KryptokontoDetailsResult) =>
        //                 (!!result && result?.kryptokonto?.kryptoKontonummerId === uuid) || result?.pendingDataFourEye?.kryptokonto.kryptoKontonummerId === uuid
        //         ),
        //         take(1)
        //     );
        // } else {
        //     this.kryptokontoFacade.resetState('kryptokonto');
        //     return of();
        // }
        return of()
    }
}
