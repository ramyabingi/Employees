import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeService } from './Services/employee.service';
import { FormControl } from '@angular/forms';
import {  FormsModule } from '@angular/forms';
import { ProductsComponent } from './Component/Employees/Prpducts/employee/products/products.component';
import { CategoriesComponent } from './Component/Employees/Prpducts/employee/Categories/categories/categories.component';
import { EmployeeComponent } from './Component/Employees/Prpducts/employee/employee.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import {NgxPaginationModule} from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ToastrModule } from 'ngx-toastr'
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StatesComponent } from './Component/Employees/Prpducts/employee/States/states/states.component';
import { StatesService } from './Services/States/states.service';
import { StatesbuttonComponent } from './Component/Employees/Prpducts/employee/States/states/statesbutton/statesbutton.component';
import { SignUpComponent } from './Component/Employees/Prpducts/employee/products/sign-up/sign-up.component';


@NgModule({
  declarations: [
    AppComponent,

   EmployeeComponent,
    ProductsComponent,
    CategoriesComponent,
    StatesComponent,
    StatesbuttonComponent,
    SignUpComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  FormsModule,
  //Loder impoert to the AppModule
NgxUiLoaderModule,
NgxPaginationModule,
Ng2SearchPipeModule ,
ToastrModule.forRoot(), // ToastrModule added
NgxSpinnerModule,
//NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })
BrowserAnimationsModule,
ReactiveFormsModule
    

  ],
  providers: [EmployeeService,StatesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
