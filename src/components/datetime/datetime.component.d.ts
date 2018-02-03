import { FormGroup } from '@angular/forms';
import { Field } from '../../interfaces/field.interface';
import { FieldConfig } from '../../interfaces/field-config.interface';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
export declare class FormDatetimeComponent implements Field, OnInit {
    config: FieldConfig;
    formGroup: FormGroup;
    ngOnInit(): void;
}
