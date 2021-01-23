import {Component, forwardRef, HostListener, Injector, Input, OnInit} from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, NgControl } from "@angular/forms";

type EmitTextChange = (value: string) => void;
type MarkAsTouched = () => void;

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextFieldComponent),
      multi: true
    }
  ]
})
export class TextFieldComponent implements OnInit, ControlValueAccessor {
  public currentFieldControl = new FormControl('');

  @Input() public isVisiblePassword: boolean;
  @Input() public nameOfField: string;

  public emitTextChange!: EmitTextChange;
  public markAsTouched!: MarkAsTouched;

  public ngControl: NgControl;

  public getTypeOfField(name: string | number): string {
    let result: string;
    if (this.isVisiblePassword === undefined) {
      result = (name === 'password') ? 'password' : 'text';
    } else {
      result = (this.isVisiblePassword) ? 'text' : 'password';
    }
    return result;
  }

  public writeValue(text: string) {
    this.currentFieldControl.setValue(text);
  }

  public get isTouched(): boolean {
    return this.ngControl.control.touched;
  }

  public get errorMessage() {
    const errors = this.ngControl.control.errors;
    if (errors === null) return '';
    if (errors.email) return 'Wrong format of Email address!';
    if (errors.required) return 'Field is empty!';
  }

  public registerOnChange(emitTextChange: EmitTextChange):void {
    this.emitTextChange = emitTextChange;
  }

  public registerOnTouched(onFieldFocusOut: MarkAsTouched) {
    this.markAsTouched = onFieldFocusOut;
  }

  @HostListener('click')
  private onFieldFocusOut() {
    this.markAsTouched();
  }

  constructor(private inj: Injector) {}

  public ngOnInit(): void {
    this.currentFieldControl.valueChanges.subscribe((text: string) => this.emitTextChange?.(text));
    this.ngControl = this.inj.get(NgControl);
  }
}
