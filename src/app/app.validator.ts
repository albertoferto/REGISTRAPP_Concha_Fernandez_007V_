import { FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms"

export const validarQueSeanIguales: ValidatorFn = (
  control: FormGroup
): ValidationErrors | null => {
  const password = control.get("contraseña")
  const confirmarPassword = control.get("confirmarContraseña")

  return password.value === confirmarPassword.value
    ? null
    : { noSonIguales: true }
}