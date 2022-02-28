import { Car } from 'src/app/model/car';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl: string = environment.apiUrl
  entityName: string = 'cars'

  constructor(
    private http: HttpClient
  ) { }

  get(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.apiUrl}/${this.entityName}/${id}`)
  }

  getAll(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.apiUrl}/${this.entityName}`)
  }

  create(car: Car): Observable<any> {
    const data = this.http.post<any>(`${this.apiUrl}/${this.entityName}`, car)
    return data
  }

  update(car: Car): Observable<any> {
    const data = this.http.patch<any>(`${this.apiUrl}/${this.entityName}/${car.id}`, car)
    return data
  }

  delete(id: number): Observable<any> {
    const data = this.http.delete<any>(`${this.apiUrl}/${this.entityName}/${id}`)
    return data
  }

}
