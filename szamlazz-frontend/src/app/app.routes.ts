import { Routes } from '@angular/router';
import { UserSearchViewComponent } from './modules/user/views/user-search-view/user-search-view.component';
import { UserCreateUpdateViewComponent } from './modules/user/views/user-create-update-view/user-create-update-view.component';
import { UserResolver } from './modules/user/user-resolver';

export const userRoutePaths = {
    searchUsers: 'search-users',
    createUser: 'create-user',
    updateUser: 'update-user',
};

export const routes: Routes = [
    {
        path: userRoutePaths.searchUsers,
        component: UserSearchViewComponent,
        runGuardsAndResolvers: 'always'
    },
    {
        path: userRoutePaths.createUser,
        component: UserCreateUpdateViewComponent,
        runGuardsAndResolvers: 'always'
    },
    {
        path: userRoutePaths.updateUser,
        component: UserCreateUpdateViewComponent,
        runGuardsAndResolvers: 'always',
        resolve: {
            user: UserResolver
        },
    },
];
