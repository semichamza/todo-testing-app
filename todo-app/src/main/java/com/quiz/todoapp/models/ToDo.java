package com.quiz.todoapp.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document (collection="todos")
public class ToDo
{
    @Id
    private String id;
    private String title;
    private String description;
    private Date timeOfTheEvent;
    private Boolean completed;

    public ToDo() {
        super();
    }

    public ToDo(String title, String description, Date timeOfTheEvent, Boolean completed) {
        this.title = title;
        this.description = description;
        this.timeOfTheEvent = timeOfTheEvent;
        this.completed = completed;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getTimeOfTheEvent() {
        return timeOfTheEvent;
    }

    public void setTimeOfTheEvent(Date timeOfTheEvent) {
        this.timeOfTheEvent = timeOfTheEvent;
    }

    public Boolean getCompleted() {
        return completed;
    }

    public void setCompleted(Boolean completed) {
        this.completed = completed;
    }
}
