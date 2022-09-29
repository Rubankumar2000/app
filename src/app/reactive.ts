import { AbstractControl, ValidationErrors } from "@angular/forms";

export class ReactiveValidator{
    static validate(control: AbstractControl):ValidationErrors | null {
        if(control.value === "select" || control.value === ""){
            return {"selectValidator": true}
        }
    return null;

    }
}
