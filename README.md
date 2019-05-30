TODO APP

# Spring Boot, Embedded MongoDB, Angular Restful API

Todo App with Spring Boot & MongoDB in the Backend and Angular in the frontend.

## Requirements

1. Java - 1.8.x

2. Maven - 3.x.x

3. MongoDB - Embedded (no need for additional configuration)

## Steps to Setup

**1. Clone the application**

```bash
git clone https://github.com/semichamza/todo-testing-app.git
```

**2. Build and run the backend app using maven**

```bash
cd todo-app
mvn package
java -jar target/todo-app-0.0.1-SNAPSHOT.jar
```

Alternatively, you can run the app without packaging it using -

```bash
mvn spring-boot:run
```

**2.1 You can also just load the project as maven project in IntelliJ and make sure you have Maven 3 bundled and Java 1.8 set up as project jdk, and just run the backend app. 

The backend server will start at <http://localhost:8080>.

**3. Run the frontend app using npm**

```bash
cd todo-frontend
npm install
```

```bash
ng serve --open
```

Frontend server will run on <http://localhost:4200>

