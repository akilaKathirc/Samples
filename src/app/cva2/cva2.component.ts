import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-cva2',
  templateUrl: './cva2.component.html',
  styleUrls: ['./cva2.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CVA2Component,
    multi: true
  }]
})
export class CVA2Component implements OnInit, ControlValueAccessor {
  onTouched!: () => void;

  onChange!: (isLock: boolean) => void;
  isVisible!: boolean;

  constructor() { }

  writeValue(obj: boolean): void {
    this.isVisible = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {
  }

  public changeIcon(): void {
    this.isVisible = !this.isVisible;
    this.onChange(this.isVisible);
    this.onTouched();
  }
}
