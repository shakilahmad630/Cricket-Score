import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { error } from 'console';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-points-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './points-table.component.html',
  styleUrl: './points-table.component.css'
})
export class PointsTableComponent implements OnInit {
  pointable: any
  tableHeading :any
  constructor(private _api:ApiCallService)
  {

  }
  ngOnInit(): void {
    
    this._api.getPointstable().subscribe({
      next:data=>
      {
        this.pointable=data;
       // console.log(this.pointable)
        this.tableHeading=[...this.pointable[0]]
        //console.log(this.tableHeading)
      },
      error:error=>
      {
        console.log(error)
      }
    })
  }
}
