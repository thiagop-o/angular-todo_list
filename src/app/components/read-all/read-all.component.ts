import { Router } from '@angular/router';
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

  constructor(private service: TodoService, private router: Router) { }

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

  delete(id: any):void {
    this.service.delete(id).subscribe((resposta) => {
      if (resposta === null){
        this.service.message('Task Deletada com Sucesso');
        this.list = this.list.filter((todo) => todo.id !== id);
      }
    })
  }
  finalizar(item: Todo):void {
    item.finalizado = true;
    this.service.update(item).subscribe(() => {
      this.service.message('Task Finalizada com Sucesso');
      this.list = this.list.filter((todo) => todo.id !== item.id);
      this.closed++;
    });
  }  
  create(): void {
    this.router.navigate(['create']);
  }

  tasksFinalizadas(): void {
    this.router.navigate(['finalizados']);
  }

}
