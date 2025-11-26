import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Page } from "../../../shared/pageable.interface";
import { Usr } from "../models/user-interface";

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

    searchUsers(page: number, pageSize: number): Observable<Page<Usr>> {
        let params = new HttpParams()
            .set('page', page)
            .set('size', pageSize);

        return this.http.get<Page<Usr>>(`${this.USER_API_ENDPOINT}search`, { params });
    }

    getUser(userId: number): Observable<Usr> {
        return this.http.get<Usr>(`${this.USER_API_ENDPOINT}${userId}`);
    }

    createUser(user: Usr) {
        let headers = this.getHttpHeaders();
        return this.http.post<any>(`${this.USER_API_ENDPOINT}create`, user, { headers });
    }

    updateUser(user: Usr) {
        let headers = this.getHttpHeaders();
        return this.http.put<any>(`${this.USER_API_ENDPOINT}update/${user.id}`, user, { headers });
    }

    deleteUser(userId: number) {
        return this.http.delete<any>(`${this.USER_API_ENDPOINT}delete/${userId}`);
    }

    getHttpHeaders = () => {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            Accept: 'application/json'
        });
    };
}
