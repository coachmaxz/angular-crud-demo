import { OnInit, Component, ChangeDetectorRef } from "@angular/core";
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  standalone: true,
  selector: "app-manage-add",
  templateUrl: "./manage-add.component.html",
  styleUrls: ["./manage-add.component.scss"],
})

export class ManageAddComponent implements OnInit {

  title = 'Add';

  productIdConsole = new FormControl('');
  productNameControl = new FormControl('');

  constructor(private router: Router) {}
  async ngOnInit(): Promise<void> {}

  async add() {
    if (this.productIdConsole.value === '' || this.productNameControl.value === '') {
      alert('Error')
      return
    }
    this.router.navigateByUrl("/product");
  }

}