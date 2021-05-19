import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectsRoutingModule } from './subjects-routing.module';
import { SubjectsComponent } from './subjects.component';
import { SubjectsproviderComponent } from './subjectsprovider/subjectsprovider.component';
import { SubjectsconsumerComponent } from './subjectsconsumer/subjectsconsumer.component';
import { MiddlemanService } from './services/middleman.service';


@NgModule({
  declarations: [
    SubjectsComponent,
    SubjectsproviderComponent,
    SubjectsconsumerComponent
  ],
  imports: [
    CommonModule,
    SubjectsRoutingModule
  ],
  providers: [MiddlemanService]
})
export class SubjectsModule { }
