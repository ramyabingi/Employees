import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { NgxUiLoaderService } from 'ngx-ui-loader';

 export class Employee
{
  Id:number=0
  FirstName!:string
  LastName!:string
  Address!:string
  Age!:number
  Salary!:number
}
@Injectable({
  providedIn: 'root'
})
 export class EmployeeService {

  constructor(private http:HttpClient, private ngxservce:NgxUiLoaderService){}
  

  GetEmployees():any{
    return this.http.get("https://localhost:44312/api/Employee/api/GetEmployees");
  }
  SaveEmployees(emp:Employee):any{
    return this.http.post("https://localhost:44312/api/Employee/api/AddEmployee",emp);
  }
  DeleteEmployees(Id:number):any{
    return this.http.delete("https://localhost:44312/api/Employee/api/DeleteEmployee?Id="+Id);
  }
  UpdateEmployees(emp:Employee):any{
    return this.http.put("https://localhost:44312/api/Employee/api/UpdateEmployee",emp);
  }
  GetEmployeesById(Id:number):any{
    return this.http.get("https://localhost:44312/api/Employee/api/GetEmployeeById?Id=3");
  }
}      