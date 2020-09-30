import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CheckHookComponent } from './check-hook/check-hook.component';
import { HookSecondComponent } from './hook-second/hook-second.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CheckHookComponent,
    HookSecondComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
