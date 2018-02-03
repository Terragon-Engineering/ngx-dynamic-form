import { OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FieldConfig } from '../../interfaces/field-config.interface';
import { Observable } from 'rxjs/Observable';
export declare class DynamicFormComponent implements OnInit {
    private fb;
    config: FieldConfig[];
    field: any;
    submit: EventEmitter<any>;
    form: FormGroup;
    readonly controls: FieldConfig[];
    readonly changes: Observable<any>;
    readonly valid: boolean;
    readonly value: any;
    reset(): void;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    private createGroup();
    private createControl(config);
    handleSubmit(event: Event): void;
    setDisabled(name: string, disable: boolean): void;
    setValue(name: string, value: any): void;
}
