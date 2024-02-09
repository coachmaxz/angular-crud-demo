import { OnInit, Component, ChangeDetectorRef } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  standalone: true,
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})

export class HomeComponent implements OnInit {

  title = 'Angula CRUD (Demo)';

  constructor(private router: Router) {}
  async ngOnInit(): Promise<void> {}

}