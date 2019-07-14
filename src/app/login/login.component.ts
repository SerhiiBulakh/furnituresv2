import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup
  aSub: Subscription

  constructor( private auth: AuthService,
               private router: Router,
               private route: ActivatedRoute) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email] ),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })

    
  }

  ngOnDestroy(): void {
    if(this.aSub){
   this.aSub.unsubscribe()
    }
    
  }
  onSubmit() {
    this.form.disable();
   
    this.aSub = this.auth.login(this.form.value).subscribe(
      () => this.router.navigate(['/furnitures']),
      error => {

        
        this.form.enable()
      }
    )

  }


}
