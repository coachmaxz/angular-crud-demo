import { OnInit, Component, ChangeDetectorRef } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  standalone: true,
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})

export class ProductComponent implements OnInit {

  title = 'Product';

  productLists: any[] = [
    { productID: 'PROD00001', productName: 'Product Name 01', editLink: 'product/edit/PROD00001', delLink: 'product/del/PROD00001' },
    { productID: 'PROD00002', productName: 'Product Name 02', editLink: 'product/edit/PROD00002', delLink: 'product/del/PROD00002' },
    { productID: 'PROD00003', productName: 'Product Name 03', editLink: 'product/edit/PROD00003', delLink: 'product/del/PROD00003' },
    { productID: 'PROD00004', productName: 'Product Name 04', editLink: 'product/edit/PROD00004', delLink: 'product/del/PROD00004' },
    { productID: 'PROD00005', productName: 'Product Name 05', editLink: 'product/edit/PROD00005', delLink: 'product/del/PROD00005' },
  ]

  constructor(private router: Router) {}
  async ngOnInit(): Promise<void> {}

  async onDelete(id: string) {
    alert('Delete product')
  }

}