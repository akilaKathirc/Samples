import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReporterConsumerComponent } from './reporter-consumer/reporter-consumer.component';
import { AlphaReporterService } from './services/alpha-reporter.service';
import { BetaReporterService } from './services/beta-reporter.service';
import { REPORTER } from './tokens/reporter.tokens';
import { CVA1Component } from './cva1/cva1.component';
import { CVA2Component } from './cva2/cva2.component';
import { CVAParentComponent } from './cva-parent/cva-parent.component';
import { VelocityWidgetComponent } from './velocity-widget/velocity-widget.component';
import { SpeedWidgetComponent } from './speed-widget/speed-widget.component';
import { WrapperWidgetComponent } from './wrapper-widget/wrapper-widget.component';
import { ParentWidgetComponent } from './parent-widget/parent-widget.component';
import { JsfunctionsComponent } from './jsfunctions/jsfunctions.component';

@NgModule({
  declarations: [
    AppComponent,
    ReporterConsumerComponent,
    CVA1Component,
    CVA2Component,
    CVAParentComponent,
    VelocityWidgetComponent,
    SpeedWidgetComponent,
    WrapperWidgetComponent,
    ParentWidgetComponent,
    JsfunctionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    // { provide: REPORTER, useExisting: AlphaReporterService, multi: true },
    // { provide: REPORTER, useExisting: BetaReporterService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
