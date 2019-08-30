import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  getUname='';
  getPassword='';

onSubmit(data:NgForm)
  {
    console.log(data.value);
    this.getUname=data.value.uname;
    this.getPassword=data.value.password;
    // console.log(data);
  
  if(this.getUname=="admin" && this.getPassword =="admin123"){
    alert("login");
    localStorage.setItem('loggedIn','true');
    this.router.navigateByUrl('welcome');
   
  }
  else{
    alert("not login")
  }
  }
  constructor(private router:Router) { }

  ngOnInit() {
  }

}
