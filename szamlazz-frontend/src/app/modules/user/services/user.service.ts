import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user-interface";
import { Page } from "../../../shared/pageable.interface";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    readonly USER_API_ENDPOINT: string;

    constructor(
        private readonly http: HttpClient,
    ) {
        //ezt normálisan egy environment.ts-ből szedném
        this.USER_API_ENDPOINT = `http://localhost:8080/api/user/`;
    }

    searchUsers(page: number, pageSize: number): Observable<Page<User>> {
        let params = new HttpParams()
            .set('page', page)
            .set('size', pageSize);

        return this.http.get<Page<User>>(`${this.USER_API_ENDPOINT}search`, { params });
    }

    getUser(userId: number): Observable<User> {
        return this.http.get<User>(`${this.USER_API_ENDPOINT}${userId}`);
    }

    createUser(user: User) {
        let headers = this.getHttpHeaders();
        return this.http.post<any>(`${this.USER_API_ENDPOINT}create`, user, { headers });
    }

    updateUser(user: User) {
        let headers = this.getHttpHeaders();
        console.log(user)
        return this.http.put<any>(`${this.USER_API_ENDPOINT}update/${user.id}`, user, { headers });
    }

    deleteUser(userId: number) {
        console.log("delete", userId)
        return this.http.delete<any>(`${this.USER_API_ENDPOINT}delete/${userId}`);
    }

    getHttpHeaders = () => {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            Accept: 'application/json'
        });
    };
}
