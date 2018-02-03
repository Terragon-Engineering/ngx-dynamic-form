import { FormGroup } from '@angular/forms';
import { Field } from '../../interfaces/field.interface';
import { FieldConfig } from '../../interfaces/field-config.interface';
export declare class FormSelectComponent implements Field {
    config: FieldConfig;
    formGroup: FormGroup;
    enumToArray(arg: Object): number[];
}
