export interface User {
    id?: number,
    firstname: string,
    lastname: string,
    address?: string | null,
    telephone?: string | null
    active: boolean,
    job: string
}