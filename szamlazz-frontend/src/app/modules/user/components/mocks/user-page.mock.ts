import { Page } from "../../../../shared/pageable.interface";
import { Usr } from "../../models/user-interface";
import { mockUser } from "./user.mock";

export const mockUserPage:Page<Usr> = {
    content: [
        mockUser
    ],

    pageable: {
        pageNumber: 0,
        pageSize: 5,
        offset: 0,
        paged: true,
        unpaged: false
    },

    totalPages: 1,
    totalElements: 1,

    last: false,
    size: 5,
    number: 0,
    numberOfElements: 1,
    first: true,
    empty: false
};