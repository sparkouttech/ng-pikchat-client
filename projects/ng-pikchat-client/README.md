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

This library was developed by [https://www.pikchat.co](https://www.pikchat.co) 

## License

[MIT](/LICENSE)