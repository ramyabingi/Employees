import { Component, EmbeddedViewRef, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeService } from './Services/employee.service';
import { EmployeeComponent } from './Component/Employees/Prpducts/employee/employee.component';
import { StatesComponent } from './Component/Employees/Prpducts/employee/States/states/states.component';
import { StatesbuttonComponent } from './Component/Employees/Prpducts/employee/States/states/statesbutton/statesbutton.component';
import { ProductsComponent } from './Component/Employees/Prpducts/employee/products/products.component';
import { CategoriesComponent } from './Component/Employees/Prpducts/employee/Categories/categories/categories.component';
const routes: Routes = [
  {path:"employee",component:EmployeeComponent},
  // {path:"employee",component:EmployeeComponent},
  // {path:"sign",component:SignUpComponent}
  {path:"state",component:StatesComponent},
  {path:"statebt",component:StatesbuttonComponent},
  { path: 'details/:id', component: StatesComponent },
  {path:'product',component:ProductsComponent},
  {path:'category',component:CategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
