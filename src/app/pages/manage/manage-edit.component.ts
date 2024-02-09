import { OnInit, Component, ChangeDetectorRef } from "@angular/core";
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
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

  productLists: any[] = [
    { productID: 'PROD00001', productName: 'Product Name 01', editLink: 'product/edit/PROD00001', delLink: 'product/del/PROD00001' },
    { productID: 'PROD00002', productName: 'Product Name 02', editLink: 'product/edit/PROD00002', delLink: 'product/del/PROD00002' },
    { productID: 'PROD00003', productName: 'Product Name 03', editLink: 'product/edit/PROD00003', delLink: 'product/del/PROD00003' },
    { productID: 'PROD00004', productName: 'Product Name 04', editLink: 'product/edit/PROD00004', delLink: 'product/del/PROD00004' },
    { productID: 'PROD00005', productName: 'Product Name 05', editLink: 'product/edit/PROD00005', delLink: 'product/del/PROD00005' },
  ]

  constructor(private router: Router, private route: ActivatedRoute) {}
  async ngOnInit(): Promise<void> {
    const dataProduct = this.productLists.filter((item: any, index: number) => item.productID === this.route.snapshot.params['id'])
    if (dataProduct.length > 0) {
      this.productIdConsole.setValue(dataProduct[0].productID)
      this.productNameControl.setValue(dataProduct[0].productName)
    }
  }

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