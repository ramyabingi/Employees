import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { EmployeeService } from 'src/app/Services/employee.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
export class Employee
{
  Id:number=0
  FirstName!:string
  LastName!:string
  Address!:string
  Age!:number
  Salary!:number
}
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent  implements OnInit{
  employee:Employee=new Employee();
  empdata:Employee[]=[];
  eid:number=0;
  search:any;
  p: number = 0;
  pro!:string;
 // empdata: any[] = someArrayOfThings; 
constructor(private employeeService:EmployeeService,
  private ngxservice:NgxUiLoaderService,private toastr: ToastrService,
  private spinner: NgxSpinnerService ){}
  ngOnInit(): void {
    this.GetEmployees();
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
    // this.ngxservice.start();

    // setTimeout(() => {
    //   this.ngxservice.stop();
    // }, 1000);
   //this.ngxloader();
  }
GetEmployees():void{
 //this.ngxloader();
  this.employeeService.GetEmployees().subscribe(
    (resp:any)=>{
      this.empdata=resp;

    
    }
  )
}
SaveEmployees(emp:Employee):void{
 //this.ngxservice.start();
  alert("data is saved")
  this.employeeService.SaveEmployees(emp).subscribe(
    (resp:any)=>{
    
      this.GetEmployees();
      
  //  this.ngxservice.stop();
      this.employee=new Employee();
      if(resp=true){
      this.toastr.success("data is saved")
      }
      else{
        this.toastr.error("data is not saved")
      }
    
    }
  )
}
UpdateEmployees(emp:Employee):void{
  this.employeeService.UpdateEmployees(emp).subscribe(
    (resp:any)=>{
      alert("data is updated");
      this.GetEmployees();
      this.employee=new Employee();
    }
  )
}
DeleteEmployees(Id:number=this.eid):void{
  alert("data is deleted");
  this.employeeService.DeleteEmployees(Id).subscribe(
    (res:any)=>{
     
      this.empdata=res;
      this.GetEmployees();
    }
  )
}
GetEmployeesById(Id:number=this.eid):void{
  alert("data is get")
this.employeeService.GetEmployeesById(Id).subscribe(
  (resp:any)=>{
    this.employee=resp;

  }
)
}
ngxloader():void{
  this.ngxservice.start();

  setTimeout(() => {
    this.ngxservice.stop();
  }, 7000);
}
// ngxSpinner():void{
//   this.spinner.show();

//      setTimeout(() => {
//        /** spinner ends after 5 seconds */
//        this.spinner.hide();
//      }, 1000);

showSuccess() {
  this.toastr.success('Hello world!', 'Toastr fun!');
}
}
