import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PieChartComponent } from '@swimlane/ngx-charts';
import { BarchartComponent } from './barchart/barchart.component';
import { CVAParentComponent } from './cva-parent/cva-parent.component';
import { DonutchartComponent } from './donutchart/donutchart.component';
import { JsfunctionsComponent } from './jsfunctions/jsfunctions.component';
import { ParentWidgetComponent } from './parent-widget/parent-widget.component';
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
