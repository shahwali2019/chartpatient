import { Component, OnInit } from '@angular/core';
import { FilterPipe } from 'ngx-filter-pipe';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  users: any[] = [{ name: 'John' },
                  { name: 'Jane' },
                  { name: 'Mario' }];

                  userFilter: any = { name: '' };

  constructor(private filterPipe: FilterPipe) {
    console.log(filterPipe.transform(this.users, { name: 'M' }));
  }

  ngOnInit() {


  }

}
