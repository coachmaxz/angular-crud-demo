import { OnInit, Component, ChangeDetectorRef } from "@angular/core";
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  standalone: true,
  selector: "app-manage-edit",
  templateUrl: "./manage-edit.component.html",
  styleUrls: ["./manage-edit.component.scss"],
  imports: [ ReactiveFormsModule, FormsModule ],
})

export class ManageEditComponent implements OnInit {

  title = 'Edit';

  productIdConsole = new FormControl('');
  productNameControl = new FormControl('');

  constructor(private router: Router) {}
  async ngOnInit(): Promise<void> {}

  async update() {
    // console.log(this.productIdConsole.value)
    // console.log(this.productNameControl.value)
    if (this.productIdConsole.value === '' || this.productNameControl.value === '') {
      alert('Error')
      return
    }
    alert('Complated !!')
    this.router.navigateByUrl("/product");
  }

}