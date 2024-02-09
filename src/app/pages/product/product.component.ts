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

  constructor(private router: Router) {}
  async ngOnInit(): Promise<void> {}

  async onDelete(id: string) {
    alert('Delete product')
  }

}