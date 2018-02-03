import { ValidatorFn } from '@angular/forms';
export interface FieldConfig {
    type?: string;
    name?: string;
    disabled?: boolean;
    inputType?: string;
    divClass?: string;
    label?: string;
    Group?: FormElement[];
    class?: string;
    placeholder?: string;
    validation?: ValidatorFn[];
    value?: any;
}
export interface FormElement {
    disabled?: boolean;
    divClass?: string;
    inputType?: string;
    label?: string;
    class?: string;
    cols?: number;
    rows?: number;
    isSelect?: boolean;
    name: string;
    placeholder?: string;
    type: string;
    validation?: ValidatorFn[];
    value?: any;
}
