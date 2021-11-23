import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Employee} from '../../Models/employes.model'
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {EmployeeServiceService} from '../../Services/employee-service.service'
@Component({
  selector: 'app-crud-employe',
  templateUrl: './crud-employe.component.html',
  styleUrls: ['./crud-employe.component.css']
})
export class CRUDEmployeComponent implements OnInit {
  employees:Employee[]=[]
  AddForm: FormGroup;
  selectedEmployee: Employee;
  loginForm:FormGroup
  clickedEdit=true
  existe:boolean;
  form: NgForm
  


  constructor(private employeeService:EmployeeServiceService ,  private fb: FormBuilder) { }

  ngOnInit(): void {
    /*this.loginForm=new FormGroup({
      userName:new FormControl(),
      password:new FormControl()
    })*/
    //this.existe=false;

    this.refreshEmployeeList();
    const updatebutton= (document.getElementById("updatebutton") as HTMLButtonElement)
    updatebutton.style.visibility='hidden'

  }
 
  onSubmit(form: NgForm) {
   
    if (form.value.name != "" ) {
     // console.log(form.value);
      
      this.employeeService.postEmployee(form.value).subscribe((res) => {
        this.existe=true
        this.resetForm(form);
        this.refreshEmployeeList();
        //M.toast({ html: 'Saved successfully', classes: 'rounded' });
        
        
      });
    }
  
    
    

    
   
    
    //console.log("value id"+form.value._id);

   
    
    
  }
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    
  }
  refreshEmployeeList() {
    this.existe=false;
    this.employeeService.getEmployeeList().subscribe((res) => {
      this.employees =res as Employee[]
      
     console.log(this.employees);

     

    });
  }
  
  onEdit(emp: Employee) {
   const updatebutton= (document.getElementById("updatebutton") as HTMLButtonElement)
  const addbutton= (document.getElementById("add") as HTMLButtonElement)
    //updatebutton.style.color="blue";
    addbutton.style.visibility= 'hidden'
    updatebutton.style.visibility='visible'
    this.selectedEmployee = emp;
    console.log(this.selectedEmployee._id);

   (<HTMLInputElement>document.getElementById("name")).value=emp.name;
   
    (<HTMLInputElement>document.getElementById("position")).value=emp.position;
    (<HTMLInputElement>document.getElementById("office")).value=emp.office;
    (<HTMLInputElement>document.getElementById("salary")).value=emp.salary
    this.clickedEdit=true;


    
  }
  update(form?: NgForm){
    this.clickedEdit=false
  //console.log( (<HTMLInputElement>document.getElementById("position")).value);
  var data ={
    _id:this.selectedEmployee._id,
    name:(<HTMLInputElement>document.getElementById("name")).value,
    position:(<HTMLInputElement>document.getElementById("position")).value,
    office:(<HTMLInputElement>document.getElementById("office")).value,
    salary:(<HTMLInputElement>document.getElementById("salary")).value,
  }
console.log(data._id);

  this.employeeService.putEmployee(data).subscribe((res) => {
    //this.resetForm(data);
    this.refreshEmployeeList();
    const addbutton= (document.getElementById("add") as HTMLButtonElement)
    const updatebutton= (document.getElementById("updatebutton") as HTMLButtonElement)

      //updatebutton.style.color="blue";
    addbutton.style.visibility= 'visible'
    updatebutton.style.visibility='hidden'
    this.resetForm(form);

  })
    
}
  onDelete(_id: string, form: NgForm) {
    console.log(_id);
    
    if (confirm('Are you sure to delete this record ?') == true) {
      this.employeeService.deleteEmployee(_id).subscribe((res) => {
        this.refreshEmployeeList();
        //this.resetForm(form);
       // M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }
  /* =================== 2eme  methode de delete ===================== */
  deleteemploy(empname){
   let _id: String;
  console.log(empname)
  if (confirm('Are you sure to delete this record ?') == true) {
  for(let i=0;i<this.employees.length;i++){
    if(this.employees[i]._id==empname)
    _id=this.employees[i]._id
    //alert(this.employees[i]._id)
    this.employeeService.deleteEmployee(_id).subscribe((res) => {
      this.refreshEmployeeList();
      //this.resetForm(form);
      //M.toast({ html: 'Deleted successfully', classes: 'rounded' });
    });
  }}
  }
  /* ================================== end 2eme methode de delete  */
 


}
