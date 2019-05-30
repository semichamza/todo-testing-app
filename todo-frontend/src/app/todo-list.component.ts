import {Component, Inject, OnInit} from '@angular/core';
import {Todo} from "./models/Todo";
import {TodoService} from "./todo-service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";
import {SaveTodoComponent} from "./save-todo.component";


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

    form: FormGroup;
    todos: Todo[] = [];
    newTodo: Todo = new Todo();
    multipleDelete: boolean;
    todoDialogRef: MatDialogRef<SaveTodoComponent>;

    constructor(private todoService: TodoService, public dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.getTodos();
        this.multipleDelete = false;
    }

    getTodos(): void {
        this.todoService.getTodos().subscribe((data: any) => {
            if (data) {
                this.todos = data as Todo[];
            }
        }, error => {
            console.log(error);
        });
    }

    createTodo(): void {
        this.todoService.createTodo(this.newTodo)
            .subscribe((createTodo: any) => {
            this.newTodo = new Todo();
            this.todos.unshift(createTodo)
        }, error => {
            console.log(error);
        });
    }

    deleteTodo(id: string): void {
        this.todoService.deleteTodo(id).subscribe(() => {
            this.todos = this.todos.filter(todo => todo.id != id);
        });
    }

    updateTodo(todo: Todo):  void {
        this.todoService.updateTodo(todo)
            .subscribe(updatedTodo => {
                let existingTodo = this.todos.find(todo => todo.id === (updatedTodo as Todo).id);
                Object.assign(existingTodo, updatedTodo);
            });
    }

    openDialog(todo?): void {
        this.todoDialogRef = this.dialog.open(SaveTodoComponent, {
            data: {
                title: [todo ? todo.title : '', [Validators.required]],
                description: [todo ? todo.description : '', [Validators.required]],
                timeOfTheEvent: [todo ? todo.timeOfTheEvent : Date.now(), [Validators.required]],
                todo : todo
            }
        });

        this.todoDialogRef.afterClosed().subscribe(todo => {
            if (todo) {
                const index = this.todos.findIndex(f => f.id === todo.id);

                if (index !== -1) {
                    this.updateTodo(todo);
                }
                else {
                    this.newTodo = todo;
                    this.createTodo();
                }
            }
        });

    }

    deleteMultipleTodos() {
        this.todos.forEach((todo) => {
            if(todo.checked) {
                this.deleteTodo(todo.id);
            }
        });
    }
    
}