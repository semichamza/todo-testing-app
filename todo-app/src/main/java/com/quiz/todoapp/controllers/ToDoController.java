package com.quiz.todoapp.controllers;

import com.quiz.todoapp.models.ToDo;
import com.quiz.todoapp.repositories.ToDoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping ("/api")
@CrossOrigin ("*")
public class ToDoController
{
    @Autowired
    ToDoRepository toDoRepository;

    @GetMapping ("/todos")
    public List<ToDo> getAllToDos() {
        return toDoRepository.findAll();
    }

    @PostMapping ("/todos")
    public ToDo createTodo(@Valid @RequestBody ToDo todo) {
        todo.setCompleted(false);
        return toDoRepository.save(todo);
    }

    @GetMapping (value = "/todos/{id}")
    public ResponseEntity<ToDo> getTodoById(@PathVariable ("id") String id) {
        return toDoRepository.findById(id)
                .map(todo -> ResponseEntity.ok().body(todo))
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping (value = "/todos/{id}")
    public ResponseEntity<ToDo> updateTodo(@PathVariable ("id") String id,
                                           @Valid @RequestBody ToDo todo) {
        return toDoRepository.findById(id)
                .map(todoData -> {
                    todoData.setTitle(todo.getTitle());
                    todoData.setDescription(todo.getDescription());
                    todoData.setCompleted(todo.getCompleted());
                    todoData.setTimeOfTheEvent(todo.getTimeOfTheEvent());
                    ToDo updatedTodo = toDoRepository.save(todoData);
                    return ResponseEntity.ok().body(updatedTodo);
                }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping (value = "/todos/{id}")
    public ResponseEntity<?> deleteTodo(@PathVariable ("id") String id) {
        return toDoRepository.findById(id)
                .map(todo -> {
                    toDoRepository.deleteById(id);
                    return ResponseEntity.ok().build();
                }).orElse(ResponseEntity.notFound().build());
    }
}
