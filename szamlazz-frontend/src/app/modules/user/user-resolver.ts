import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { catchError, EMPTY, Observable } from 'rxjs';
import { User } from './models/user-interface';
import { UserService } from './services/user.service';

@Injectable({ providedIn: 'root' })
export class UserResolver {
    constructor(
        private userService: UserService
    ) { }
    resolve(route: ActivatedRouteSnapshot): Observable<User> {
        const id = Number(route.paramMap.get('id'));
        if (!id) {
            return EMPTY;
        }
        return this.userService.getUser(id).pipe(
            catchError(err => {
                console.error('Failed to fetch user', err);
                return EMPTY;
            })
        );
    }
}
