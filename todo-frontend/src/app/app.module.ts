import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list.component';
import {TodoService} from "./todo-service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatNativeDateModule} from "@angular/material";
import {DemoMaterialModule} from "./material-module";
import { SaveTodoComponent } from './save-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    SaveTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  providers: [TodoService],
  entryComponents: [SaveTodoComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
