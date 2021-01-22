import { Component, forwardRef, ForwardRefFn, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from "@angular/forms";

const provideCustomControl = (componentRef: ForwardRefFn) => ({
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(componentRef),
  multi: true
})

type EmitTextChange = (value: string) => void;

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css'],
  providers: [provideCustomControl(() => TextFieldComponent)]
})
export class TextFieldComponent implements OnInit, ControlValueAccessor {
  @Input() public label!: string;
  public nativeControl: FormControl = new FormControl('');
  private emitTextChange!: EmitTextChange;
  fieldTextType: boolean = true;

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  public ngOnInit(): void {
    this.nativeControl.valueChanges.subscribe((text: string) => this.emitTextChange?.(text))
  }

  public writeValue(text: string): void {
    this.nativeControl.setValue(text);
  }

  public registerOnChange(emitTextChange: EmitTextChange): void {
    this.emitTextChange = emitTextChange;
  }

  public registerOnTouched(fn: any): void {}

}
