import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../Models/employes.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http:HttpClient) { }
  employees: Employee[];
  readonly baseURL = 'http://localhost:3000/api/employe';

  postEmployee(emp: Employee) {
    return this.http.post(this.baseURL, emp);
  }
  getEmployeeList() {
    return this.http.get(this.baseURL);
  }

  putEmployee(emp: Employee) {
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }

  deleteEmployee(_id: String) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
