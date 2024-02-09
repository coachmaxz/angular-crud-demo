import { OnInit, Component, ChangeDetectorRef } from "@angular/core";
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  standalone: true,
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  imports: [ ReactiveFormsModule, FormsModule ],
})

export class LoginComponent implements OnInit {

  usernameControl = new FormControl('');
  passwordControl = new FormControl('');

  constructor(private router: Router) {}
  async ngOnInit(): Promise<void> {}

  async login() {
    if (this.usernameControl.value === 'demo' && this.passwordControl.value === 'demo') {
      this.router.navigateByUrl("/product");
      return
    }
    alert('Login failed')
    this.usernameControl.setValue('')
    this.passwordControl.setValue('')
  }

}