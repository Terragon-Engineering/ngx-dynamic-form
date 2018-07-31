# ngx-dynamic-form

We noticed that for projects like a portal / dashboard developers need to create several forms again and again. So we thought of something that could make it much more easier and leaving our html code cleaner and we came up with this.
This library takes in a json file and gives you a form, so you dont need to create any forms in your projects anymore

## Installation

To install this library, run:

```bash
$ npm install ngx-dynamic-form --save
```

Link Bootstrap 3 (Updates for other library and bootstrap 4 coming up soon)
```html
 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
```

## Consuming this library

You can import this library in any Angular application from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { DynamicFormModule } from 'ngx-dynamic-form';
import { CommonModule } from '@angular/common';
 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
   CommonModule,
    BrowserModule,
    DynamicFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components in your Angular application:



```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
 <dynamic-form #dynamicFormName='dynamicForm' [config]='dynamicFormConfig' (submit)='doSomethingCool($event)'></dynamic-form>
```
In your app.component.ts file you can now create your config
```typescript
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  foodList= ['Jollof Rice', 'Garri', 'Yam', 'Beans'];
  title = 'app';

  dynamicFormConfig = [
    {
      type: 'input',
      divClass: 'col-lg-6',
      class: 'form-control',
      name: 'query',
      inputType: 'text',
      placeholder: 'Upload Anything'
    },
    {
      type: 'select',
      divClass: 'col-lg-6',
      options: this.foodList,
      class: 'form-control',
      name: 'food',
      inputType: 'text',
      placeholder: 'Select Favorite Food'
    },
    {
      type: 'date',
      divClass: 'col-lg-6',
      class: 'form-control',
      name: 'date'
    },
    {
      type: 'select',
      divClass: 'col-lg-5',
      enum: Color,
      class: 'form-control',
      name: 'mno',
      inputType: 'text',
      placeholder: 'Choose MNO '
    },
    {
      type: 'file',
      divClass: 'col-lg-5',
      class: 'form-control',
      name: 'upload',
      placeholder: 'Upload Anything'
    },
    {
      type: 'button',
      divClass: 'col-lg-2',
      text: 'Search',
      inputType: 'submit',
      class: 'btn btn-dcb-info',
      name: 'submit',
    }
  ];

  doSomethingCool(model: any) {
    console.log(model);
  }
}

export enum Color {
  'Blue','Pink','Red','Yellow'
};

```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

 © [Terragon Tech](mailto:tech@terragongroup.com)
