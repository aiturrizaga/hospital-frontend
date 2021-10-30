import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonType } from '../models/person-type.model';

@Injectable({
  providedIn: 'root',
})
export class PersonTypeService {
  // Instancia de HttpClient para hacer llamadas a nuestro backend
  constructor(private http: HttpClient) {}

  // Listar tipo de personas
  findAll() {
    return this.http.get<PersonType[]>(
      'http://localhost:9091/hospital/v1/personType'
    );
  }

  register(body: PersonType) {
    return this.http.post('http://localhost:9091/hospital/v1/personType', body);
  }

  deleteById(id: number) {
    return this.http.delete('http://localhost:9091/hospital/v1/personType/' + id);
  }

}
