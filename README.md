# NgPikchatClient

## Dependencies

Latest version available for each version of Angular

| ng-pikchat-client | Angular     |
| ----------------- | ----------- |
| current           | >= 10.x     |

## Install

```bash
npm install ng-pikchat-client --save
```

**step 1:** add NgPikchatClientModule to app NgModule

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgPikchatClientModule } from "ng-pikchat-client";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgPikchatClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Use

```typescript
import { NgPikchatClientService } from "ng-pikchat-client";

@Component({...})
export class YourComponent {
  constructor(private pikchatClient: NgPikchatClientService) {}

  testConnection() {
    console.log(this.pikchatClient);
  }
}

```

<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
</table>


This library was developed by [https://www.pikchat.co](https://www.pikchat.co) 

## License

[MIT](/LICENSE)