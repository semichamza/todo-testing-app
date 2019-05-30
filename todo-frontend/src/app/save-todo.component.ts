import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Todo} from "./models/Todo";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-todo',
  templateUrl: './save-todo.component.html',
  styleUrls: ['./save-todo.component.css']
})
export class SaveTodoComponent implements OnInit {

    form: FormGroup;
    result: Todo = new Todo();
    todayDate:Date = new Date();

    constructor(
        private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<SaveTodoComponent>,
        @Inject(MAT_DIALOG_DATA) public data) {}

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            title: this.data.title ? this.data.title : '',
            description: this.data.description ? this.data.description : '',
            timeOfTheEvent: this.data.todo ? new Date(this.data.todo.timeOfTheEvent) : Date.now()
        });

        if(this.data.todo)
            this.result.id = this.data.todo.id;
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    submit(form) {
        this.result.title = form.value.title;
        this.result.description = form.value.description;
        this.result.timeOfTheEvent = form.value.timeOfTheEvent;
        this.dialogRef.close(this.result);
    }
}
