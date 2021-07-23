import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrls: ['./read-all.component.css']
})
export class ReadAllComponent implements OnInit {
  list: Todo[] = [
    {
      titulo: "Teste",
      dataParaFinalizar: new Date,
      finalizado: false
    },
    {
      titulo: "Teste2",
      dataParaFinalizar: new Date,
      finalizado: false
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
