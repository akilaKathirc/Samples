import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectsComponent } from './subjects.component';
import { SubjectsconsumerComponent } from './subjectsconsumer/subjectsconsumer.component';
import { SubjectsproviderComponent } from './subjectsprovider/subjectsprovider.component';

const routes: Routes = [
  {
    path: '',
    component: SubjectsComponent,
    children: [
      {
        path: 'provider',
        pathMatch: "full",
        component: SubjectsproviderComponent
      },
      {
        path: 'consumer',
        pathMatch: "full",
        component: SubjectsconsumerComponent
      }
    ]
  },
  {
    path: 'provider', outlet: 'aside',
    component: SubjectsproviderComponent
  },
  {
    path: 'consumer', outlet: 'aside',
    component: SubjectsconsumerComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectsRoutingModule { }
