const express = require('express');
const app = express();
const tasks = require('./routes/task');
const connectDB = require('./db/connect');
const notFound = require('./middlware/not-foundapp')
const errorHandlerMiddleware = require('./middlware/errorhandler')

const connectionString = "mongodb+srv://anujb364:%40Nudan22@nodeexpressproject.sjwlxiw.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority&appName=Nodeexpressproject"

// Middleware
app.use(express.json());

// Routes


app.use('/api/v1/tasks', tasks);
app.use(notFound)
app.use(errorHandlerMiddleware)

const port = 3000;

const start = async () => {
    try {
        await connectDB(connectionString)
        app.listen(port, console.log(`Server is listening on ${port}`));
    } catch (error) {
        console.error(error);
    }
};

start();
