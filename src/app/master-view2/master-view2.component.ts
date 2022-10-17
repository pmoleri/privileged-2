import { Component, OnInit } from '@angular/core';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-master-view2',
  templateUrl: './master-view2.component.html',
  styleUrls: ['./master-view2.component.scss']
})
export class MasterView2Component implements OnInit {
  public northwindEmployees: any = null;

  constructor(
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindService.getData('Employees').subscribe(data => this.northwindEmployees = data);
  }
}
