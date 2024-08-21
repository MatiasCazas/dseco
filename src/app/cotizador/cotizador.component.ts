import { Component } from '@angular/core';
import { CommonModule,  } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms'
@Component({
  selector: 'app-cotizador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cotizador.component.html',
  styleUrl: './cotizador.component.css'
})
export class CotizadorComponent {
  istrue = true;
  selectedOption = '';
  paredInteriorImgs = ['assets/images/pared_interior_resistente_a_la_humedad.png', 'assets/images/pared_interior .png']
  revestimientoImgs = ['assets/images/revestimiento_interior.png', 'assets/images/Pared_exterior_siding.png', 'assets/images/pared_exterior_superboard.png']
  cielorrasoImgs = ['assets/images/cielorrasos.png', 'assets/images/CIELORRASO.png', 'assets/images/cielorraso_pvc.png']
  headers = ['Pared Interior Durlock', 'Revestimiento Interior Durlock', 'Cielorraso Durlock']
  onValid(str: string): void{
    this.istrue= false;
    this.selectedOption = str;
  }
  paredForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.paredForm = this.fb.group({
      formArray: this.fb.array([this.createFormGroup()])
    });
  }


  createFormGroup(): FormGroup {
    return this.fb.group({
      largo: ['', Validators.required],
      alto: ['', Validators.required],
      superficie: ['', Validators.required]
    });
  }


  addForm() {
    (this.paredForm.get('formArray') as FormArray).push(this.createFormGroup());
  }


  get formArray() {
    return (this.paredForm.get('formArray') as FormArray).controls;
  }

  volver() {
    this.istrue = true;
  }
  
}
