import { Component, OnInit } from '@angular/core';
import { ThingsService } from '../../things.service';
import { Observable } from 'rxjs';
import { Thing } from 'src/DTO';

@Component({
  selector: 'app-things-list',
  templateUrl: './things-list.component.html',
  styleUrls: ['./things-list.component.scss'],
})
export class ThingsListComponent implements OnInit {
  constructor(private thingsService: ThingsService) {}

  public things$: Observable<Thing[]>;

  ngOnInit() {
    this.things$ = this.thingsService.getThings();
  }
}
