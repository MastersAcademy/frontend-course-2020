import {Component, forwardRef, HostListener, Injector, OnInit} from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, NgControl } from "@angular/forms";

type EmitTextChange = (value: string) => void;
type MarkAsTouched = () => void;

@Component({
  selector: 'app-password-field',
  templateUrl: './password-field.component.html',
  styleUrls: ['./password-field.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordFieldComponent),
      multi: true
    }
  ]
})
export class PasswordFieldComponent implements OnInit {
  public currentFieldControl = new FormControl('');
  public emitTextChange!: EmitTextChange;
  public ngControl: NgControl;
  public markAsTouched!: MarkAsTouched;
  public isVisiblePassword: boolean = false;

  public toggleVisibility() {
    this.isVisiblePassword = (!this.isVisiblePassword);
  }

  public writeValue(text: string) {
    this.currentFieldControl.setValue(text);
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
