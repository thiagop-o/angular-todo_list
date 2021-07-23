import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrls: ['./read-all.component.css']
})
export class ReadAllComponent implements OnInit {
  closed = 0;
  list: Todo[] = [ ];
  listFinished: Todo[] = [];

  constructor(private service: TodoService) { }

  ngOnInit(): void {
    this.findAll();
    
  }


  findAll(): void {
    this.service.findAll().subscribe((resposta) =>{
      resposta.forEach(todo => {
        if(todo.finalizado){
          this.listFinished.push(todo);
        } else {
          this.list.push(todo);
        }        
      })
      this.closed = this.listFinished.length;
    })
  }

  


}
