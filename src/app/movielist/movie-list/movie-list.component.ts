import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  headers=["#","Language","MovieName","Rating"];
  rows=[
    {
      id:"1",
      Language:"Tamil",
      MovieName:"ABC",
      Rating:"1+"
    },
    {
      id:"2",
      Language:"English",
      MovieName:"Disney",
      Rating:"1+"
    },
    {
      id:"3",
      Language:"Tamil",
      MovieName:"AAA",
      Rating:"2"
    },
    {
      id:"4",
      Language:"Telugu",
      MovieName:"try",
      Rating:"2"
    },
    {
      id:"5",
      Language:"Tamil",
      MovieName:"Duck",
      Rating:"3"
    },
    {
      id:"6",
      Language:"Malayalam",
      MovieName:"Charlie",
      Rating:"1+"
    }
  ]

}
