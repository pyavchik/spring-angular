import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    {
      id: 1,
      description: 'Learn Java'
    },
    {
      id: 2,
      description: 'Learn JS'
    },
    {
      id: 3,
      description: 'Learn Spring'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}