import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PieChartComponent } from '@swimlane/ngx-charts';
import { BarchartComponent } from './barchart/barchart.component';
import { BlogenComponent } from './blogen/blogen.component';
import { CsstricksComponent } from './csstricks/csstricks.component';
import { CVAParentComponent } from './cva-parent/cva-parent.component';
import { DonutchartComponent } from './donutchart/donutchart.component';
import { GridLayoutComponent } from './grid-layout/grid-layout.component';
import { HoverCardsComponent } from './hover-cards/hover-cards.component';
import { JsfunctionsComponent } from './jsfunctions/jsfunctions.component';
import { MinWidthHeightComponent } from './min-width-height/min-width-height.component';
import { ParentWidgetComponent } from './parent-widget/parent-widget.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveformvalidationComponent } from './reactiveformvalidation/reactiveformvalidation.component';
import { ReporterConsumerComponent } from './reporter-consumer/reporter-consumer.component';
import { RxjsOperatorsComponent } from './rxjs-operators/rxjs-operators.component';
import { ShootingstarsComponent } from './shootingstars/shootingstars.component';

const routes: Routes = [
  { path: 'tokens', component: ReporterConsumerComponent },
  { path: 'cva', component: CVAParentComponent },
  { path: 'widget', component: ParentWidgetComponent },
  { path: 'js', component: JsfunctionsComponent },
  { path: 'chart', component: BarchartComponent },
  { path: 'pie', component: DonutchartComponent },
  { path: 'rxjs', component: RxjsOperatorsComponent },
  { path: 'stars', component: ShootingstarsComponent },
  { path: 'css', component: MinWidthHeightComponent },
  { path: 'csstricks', component: CsstricksComponent },
  { path: 'hover', component: HoverCardsComponent },
  { path: 'reactive', component: ReactiveformvalidationComponent },
  { path: 'grid', component: GridLayoutComponent },
  { path: 'blogen', component: BlogenComponent },
  { path: 'reactiveFG', component: ReactiveFormsComponent },

  { path: 'subject', loadChildren: () => import('./subjects/subjects.module').then(m => m.SubjectsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
