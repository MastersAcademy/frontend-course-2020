import { FormControl } from "@angular/forms";

export function passwordValidator(formControl:FormControl) {
    let password: string = formControl.value;
    if (password === null) return null

    let small_letters: string = "qwertyuiopasdfghjklzxcvbnm";
    let big_letters: string = "QWERTYUIOPLKJHGFDSAZXCVBNM";
    let digits: string = "0123456789";
    let specials: string = "!@#$%^&*()_-+=\|/.,:;[]{}";
    let is_small : boolean = false;
    let is_big : boolean = false;
    let is_digits : boolean = false;
    let is_specials : boolean = false;
    let rating : number = 0;

    [...password].forEach(element => {
      if (!is_small && small_letters.indexOf(element) != -1) is_small = true;
      else if (!is_big && big_letters.indexOf(element) != -1) is_big = true;
      else if (!is_digits && digits.indexOf(element) != -1) is_digits = true;
      else if (!is_specials && specials.indexOf(element) != -1) is_specials = true;
    });

    if (is_small) rating++;
    if (is_big) rating++;
    if (is_digits) rating++;
    if (is_specials) rating++;



    if (password.length === 0){
      return {
        myValidator: { message : ''}
      };
    }
    else if (password.length < 6 && rating < 3){
      return {
        myValidator: { message : 'Simple password'}
      };
    } else if (password.length < 6 && rating >= 3){
      return {
        myValidator: { message : "Average password"}
      };
    } else if (password.length >= 8 && rating < 3) {
      return {
        myValidator: { message : "Average password"}
      };
    } else if (password.length >= 8 && rating >= 3){
      return {
        myValidator: { message : "Complex password"}
      };
    } else if (password.length >= 6 && rating === 1) {
      return {
        myValidator: { message : "Simple password"}
      };
    } else if (password.length >= 6 && rating > 1 && rating < 4) {
      return {
        myValidator: { message : "Average password"}
      };
    }
    else if (password.length >= 6 && rating === 4){
      return {
        myValidator: { message : "Complex password"}
      };
    } else {
      return null
    }
}
