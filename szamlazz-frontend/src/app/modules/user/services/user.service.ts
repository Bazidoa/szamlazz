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


    getHttpHeaders = () => {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            Accept: 'application/json'
        });
    };
}
