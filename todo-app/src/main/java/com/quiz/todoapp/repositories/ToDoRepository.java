package com.quiz.todoapp.repositories;

import com.quiz.todoapp.models.ToDo;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ToDoRepository extends MongoRepository<ToDo, String>
{
}
