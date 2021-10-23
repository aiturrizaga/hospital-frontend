import { Component, OnInit } from '@angular/core';
import { PersonType } from 'src/app/models/person-type.model';
import { PersonTypeService } from './../../services/person-type.service';

@Component({
  selector: 'app-person-type',
  templateUrl: './person-type.component.html',
  styleUrls: ['./person-type.component.css']
})
export class PersonTypeComponent implements OnInit {
  
  tipos: PersonType[] = [];

  constructor(private personTypeService: PersonTypeService) { }

  // Primer metodo que se ejecuta
  ngOnInit(): void {
    this.personTypeService.findAll().subscribe(
      res => {
        this.tipos = res;
      }
    );
  }

}
