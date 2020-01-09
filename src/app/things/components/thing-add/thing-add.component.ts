import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThingsService } from '../../things.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thing-add',
  templateUrl: './thing-add.component.html',
  styleUrls: ['./thing-add.component.scss'],
})
export class ThingAddComponent implements OnInit {
  titleControl = new FormControl('');
  bodyControl = new FormControl('');

  constructor(private thingsService: ThingsService, private router: Router) {}

  ngOnInit() {}

  handleAddClick() {
    const title = this.titleControl.value;
    const body = this.bodyControl.value;
    this.thingsService.addThings({ title, body }).subscribe({
      next: data => {
        alert(data);
        this.router.navigateByUrl('/things');
      },
      error: error => {
        alert(`Error ${error}`);
      },
    });
  }
}
