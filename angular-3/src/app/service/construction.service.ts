import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Construction } from '../model/construction';

@Injectable({
  providedIn: 'root'
})
export class ConstructionService {

  apiUrl: string = environment.apiUrl
  entityName: string = 'constructions'

  constructor(
    private http: HttpClient
  ) { }

  get(id: number): Observable<Construction> {
    return this.http.get<Construction>(`${this.apiUrl}/${this.entityName}/${id}`)
  }

  getAll(): Observable<Construction[]> {
    return this.http.get<Construction[]>(`${this.apiUrl}/${this.entityName}`)
  }

  create(construction: Construction): Observable<any> {
    const data = this.http.post<any>(`${this.apiUrl}/${this.entityName}`, construction)
    return data
  }

  update(construction: Construction): Observable<any> {
    const data = this.http.patch<any>(`${this.apiUrl}/${this.entityName}/${construction.id}`, construction)
    return data
  }

  delete(id: number): Observable<any> {
    const data = this.http.delete<any>(`${this.apiUrl}/${this.entityName}/${id}`)
    return data
  }

}
