import { FormControl } from "@angular/forms";

export interface UserForm {
    id?: FormControl<number>;
    firstname: FormControl<string>;
    lastname: FormControl<string>;
    address: FormControl<string | null>;
    telephone: FormControl<string | null>;
    active: FormControl<boolean>;
    job: FormControl<string>;
}