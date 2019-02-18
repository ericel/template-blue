import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserWindowRef, windowProvider, browserWindowProvider } from './services/windows.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatButtonModule, MatListModule } from '@angular/material';
import { RouterModule } from '@angular/router';
const appComponents = [
  HeaderComponent,
  FooterComponent
];
@NgModule({
  declarations: appComponents,
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatListModule
  ],
  exports: appComponents,
  providers: [
    BrowserWindowRef,
    windowProvider,
    browserWindowProvider,
  ]
})
export class SharedModule { }
