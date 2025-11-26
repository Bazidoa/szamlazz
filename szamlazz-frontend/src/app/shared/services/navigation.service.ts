import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class NavigationService {
    constructor(
        private readonly router: Router,
        private readonly ngZone: NgZone
    ) { }

    navigateToUserCreate(): void {
        this.ngZone.run(() => {
            this.router.navigateByUrl('create-user');
        });
    }

    navigateToUserSearch(): void {
        this.ngZone.run(() => {
            this.router.navigateByUrl('search-users');
        });
    }

    navigateToUserUpdate(userId: number): void {
        this.ngZone.run(() => {
            this.router.navigateByUrl(`update-user/${userId}`);
        });
    }
}
