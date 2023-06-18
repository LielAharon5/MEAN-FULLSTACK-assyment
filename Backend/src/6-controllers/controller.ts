import express, { Request, Response, NextFunction } from "express";
import { TaskModel } from "../4-models/task-model";
import logic from "../5-logic/logic";

const router = express.Router(); // Capital R

// GET http://localhost:3001/api/costomers
router.get("/costomers", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const costomers = await logic.getAllCostomers();
        response.json(costomers);
    }
    catch (err: any) {
        next(err);
    }
});

// GET http://localhost:3001/api/Tasks 
router.get("/Tasks", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const Tasks = await logic.getAllTasks();
        response.json(Tasks);
    }
    catch (err: any) {
        next(err);
    }
});

// POST http://localhost:3001/api/Tasks
router.post("/Tasks", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const Task = new TaskModel(request.body);
        const addedTask = await logic.addTask(Task);
        response.status(201).json(addedTask);
    }
    catch (err: any) {
        next(err);
    }
});



export default router;

