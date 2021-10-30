import { Component, OnInit } from '@angular/core';
import { PersonType } from 'src/app/models/person-type.model';
import { PersonTypeService } from './../../services/person-type.service';

@Component({
  selector: 'app-person-type',
  templateUrl: './person-type.component.html',
  styleUrls: ['./person-type.component.css'],
})
export class PersonTypeComponent implements OnInit {
  tipos: PersonType[] = [];

  // FormsModule
  nombre: string = '';

  //ReactiveFormsModule

  constructor(private personTypeService: PersonTypeService) {}

  // Primer metodo que se ejecuta
  ngOnInit(): void {
    this.listar();
  }

  //Para registrar una nuev persona
  register() {
    const body = new PersonType(null, this.nombre, 'A');
    this.personTypeService.register(body).subscribe((res) => {
      console.log('Respuesta:', res);
      this.nombre = '';
      this.listar();
    });
  }

  // Listar todos los tipos de persona que tenemos en nuestra bd
  listar() {
    this.personTypeService.findAll().subscribe((res) => {
      this.tipos = res;
    });
  }

  // Pasamos el id desde el html para eliminar el registro
  delete(id: any) {
    this.personTypeService.deleteById(id).subscribe(() => this.listar());
  }
}
