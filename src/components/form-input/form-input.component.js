/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
export class FormInputComponent {
    constructor() { }
}
FormInputComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'form-input',
                styles: [`
       input[type='submit'] {
           margin-top: 0.5rem 1rem;
       }

       .form-input {
           padding: 0.5rem 1rem;
       }

       .btn-dcb-info {
           color: #045B6B;
           background-color: white;
           border-color: #045B6B;
       }

       .btn-search {
           width: 100px;
       }

       .btn-danger {
           background-color: #A88199;
           border-color: whitesmoke;
       }
     `],
                template: `
       <div *ngIf='!config.hidden' class="form-input" [ngClass]="config.divClass" [formGroup]="formGroup">
           <label *ngIf="config.label && config.label!=''">{{ config.label }}</label>
           <input *ngIf="config.type ==='input' && !config.fromEnum " value={{config.text}} [disabled]="config.disabled" type={{config.inputType}} [ngClass]="config.class" [attr.placeholder]="config.placeholder" [formControlName]="config.name" />

           <select *ngIf="config.type==='select' && !config.fromEnum && !config.hidden" [formControlName]="config.name" [ngClass]=config.class>
                        <option value='' [selected]="true">{{ config.placeholder }}</option>
                        <option value={{option}}
                                *ngFor="let option of config.options">
                                {{option}}
                        </option>
               </select>
           <select *ngIf="config.type==='select' && config.fromEnum && !config.hidden" [formControlName]="config.name" [ngClass]=config.class>
                    <option value="" [selected]="true">{{ config.placeholder }}</option>
                    <option value={{config.options[0][i]}}
                            *ngFor="let o of config.options[0]; let i=index">
                            {{ config.options[1][i] }}
                    </option>
                </select>

           <textarea *ngIf="config.type==='textarea' && !config.hidden" [formControlName]="config.name" [attr.placeholder]="config.placeholder" rows={{config.rows}} cols={{config.cols}}></textarea>

           <ng-datepicker [ngClass]="config.class" *ngIf="config.type ==='date'" [formControlName]="config.name"></ng-datepicker>
       </div>
     `
                //      template: `<div class="row">
                //      <ng-container *ngFor='let input of config.Group'>
                //          <div *ngIf='!input.hidden' class="form-input" [ngClass]="input.divClass" [formGroup]="formGroup">
                //              <label *ngIf="input.label && input.label!=''">{{ input.label }}</label>
                //              <input *ngIf="input.type ==='input' && !input.fromEnum " value={{input.text}} [disabled]="input.disabled" type={{input.inputType}} [ngClass]="input.class" [attr.placeholder]="input.placeholder" [formControlName]="input.name" />
                //              <select *ngIf="input.type==='select' && !input.fromEnum && !input.hidden" [formControlName]="input.name" [ngClass]=input.class>
                //                   <option value='' [selected]="true">{{ input.placeholder }}</option>
                //                   <option value={{option}}
                //                           *ngFor="let option of input.options">
                //                           {{option}}
                //                   </option>
                //               </select>
                //              <select *ngIf="input.type==='select' && input.fromEnum && !input.hidden" [formControlName]="input.name" [ngClass]=input.class>
                //               <option value="" [selected]="true">{{ input.placeholder }}</option>
                //               <option value={{input.options[0][i]}}
                //                       *ngFor="let o of input.options[0]; let i=index">
                //                       {{ input.options[1][i] }}
                //               </option>
                //           </select>
                //              <textarea *ngIf="input.type==='textarea' && !input.hidden" [formControlName]="input.name" [attr.placeholder]="input.placeholder" rows={{input.rows}} cols={{input.cols}}></textarea>
                //              <ng-datepicker [ngClass]="input.class" *ngIf="input.type ==='date'" [formControlName]="input.name"></ng-datepicker>
                //          </div>
                //      </ng-container>
                //  </div>`
            },] },
];
/** @nocollapse */
FormInputComponent.ctorParameters = () => [];
function FormInputComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FormInputComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FormInputComponent.ctorParameters;
    /** @type {?} */
    FormInputComponent.prototype.config;
    /** @type {?} */
    FormInputComponent.prototype.formGroup;
}
