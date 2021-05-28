import { Injectable, ComponentFactoryResolver, Injector, TemplateRef, Type, Inject, } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { DOCUMENT } from '@angular/common';


export type Content<T> = string | TemplateRef<any> | Type<T>

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private _resolver: ComponentFactoryResolver,
    private _injector: Injector,
    @Inject(DOCUMENT) private document: Document) { }

  open<T>(content: Content<T>) {
    const factory = this._resolver.resolveComponentFactory(ModalComponent);
    const subcomponentRef = this.resolveContentFactory(content);

    const componentRef = factory.create(this._injector, subcomponentRef);
    componentRef.hostView.detectChanges();

    const { nativeElement } = componentRef.location;
    this.document.body.appendChild(nativeElement);
  }

  resolveContentFactory<T>(content: Content<T>) {
    if (typeof content === 'string') {
      const element = this.document.createTextNode(content);
      return [[element]];
    }

    if (content instanceof TemplateRef) {
      const viewRef = content.createEmbeddedView(null);
      return [[viewRef.rootNodes]]
    }


    const factory = this._resolver.resolveComponentFactory(content);
    const componentRef = factory.create(this._injector);
    return [[componentRef.location.nativeElement], [this.document.createTextNode('Dummy content from service')]]

  }

}
