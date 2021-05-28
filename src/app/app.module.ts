import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

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
import { BarchartComponent } from './barchart/barchart.component';
import { DonutchartComponent } from './donutchart/donutchart.component';
import { RxjsOperatorsComponent } from './rxjs-operators/rxjs-operators.component';
import { ShootingstarsComponent } from './shootingstars/shootingstars.component';
import { MinWidthHeightComponent } from './min-width-height/min-width-height.component';
import { CsstricksComponent } from './csstricks/csstricks.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveformvalidationComponent } from './reactiveformvalidation/reactiveformvalidation.component';
import { HoverCardsComponent } from './hover-cards/hover-cards.component';
import { GridLayoutComponent } from './grid-layout/grid-layout.component';
import { BlogenComponent } from './blogen/blogen.component';
import { BlogenHeaderComponent } from './blogen-header/blogen-header.component';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlogenActionComponent } from './blogen-action/blogen-action.component';
import { NgbdModal2ContentComponent } from './ngbd-modal2-content/ngbd-modal2-content.component';
import { BlogenAddActionComponent } from './blogen-add-action/blogen-add-action.component';
import { BlogenAddCategoryComponent } from './blogen-add-category/blogen-add-category.component';
import { BlogenAddUsersComponent } from './blogen-add-users/blogen-add-users.component';
import { ModalComponent } from './modal/modal.component';

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
    JsfunctionsComponent,
    BarchartComponent,
    DonutchartComponent,
    RxjsOperatorsComponent,
    ShootingstarsComponent,
    MinWidthHeightComponent,
    CsstricksComponent,
    ReactiveFormsComponent,
    ReactiveformvalidationComponent,
    HoverCardsComponent,
    GridLayoutComponent,
<<<<<<< HEAD
    BlogenComponent,
    BlogenHeaderComponent,
    BlogenActionComponent,
    NgbdModal2ContentComponent,
    BlogenAddActionComponent,
    BlogenAddCategoryComponent,
    BlogenAddUsersComponent,
    ModalComponent,
=======
>>>>>>> 033f5328a21a2377041a4e4978cfd3a84b24255b
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxChartsModule,
    NgbModule,
  ],
  providers: [
    NgbActiveModal,

    // { provide: REPORTER, useExisting: AlphaReporterService, multi: true },
    // { provide: REPORTER, useExisting: BetaReporterService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
