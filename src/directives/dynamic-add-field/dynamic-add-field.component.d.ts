import { ViewContainerRef, ComponentFactoryResolver, OnInit, OnChanges, SimpleChanges, ComponentRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../interfaces/field.interface';
export declare class DynamicAddFieldDirective implements OnInit, Field, OnChanges {
    private resolver;
    private vcr;
    config: any;
    formGroup: FormGroup;
    component: ComponentRef<Field>;
    constructor(resolver: ComponentFactoryResolver, vcr: ViewContainerRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
