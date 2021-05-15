import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CVAParentComponent } from './cva-parent/cva-parent.component';
import { ParentWidgetComponent } from './parent-widget/parent-widget.component';
import { ReporterConsumerComponent } from './reporter-consumer/reporter-consumer.component';

const routes: Routes = [
  { path: 'tokens', component: ReporterConsumerComponent },
  { path: 'cva', component: CVAParentComponent },
  { path: 'widget', component: ParentWidgetComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
