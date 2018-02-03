import { FormGroup } from '@angular/forms';
import { Field } from '../../interfaces/field.interface';
import { FieldConfig } from '../../interfaces/field-config.interface';
export declare class FormFileUploadComponent implements Field {
    config: FileConfig;
    formGroup: FormGroup;
    handleFileUpload(event: any): void;
}
export interface FileConfig extends FieldConfig {
    multiple: boolean;
    accept: string;
}
