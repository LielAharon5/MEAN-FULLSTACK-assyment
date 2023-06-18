import { ResourceNotFoundErrorModel, ValidationErrorModel } from "../4-models/error-models";
import { ITaskModel, TaskModel } from "../4-models/task-model";
import { ICostomerModel, CostomerModel } from "../4-models/costomer-model";

// Get all Costomers: 
function getAllCostomers(): Promise<ICostomerModel[]> {
    return CostomerModel.find().exec();
}

// Get all Tasks: 
function getAllTasks(): Promise<ITaskModel[]> {
    return TaskModel.find().populate("costomers").exec();
}

// Add Task: 
function addTask(Task: ITaskModel): Promise<ITaskModel> {
    const errors = Task.validateSync();
    if(errors) throw new ValidationErrorModel(errors.message);
    return Task.save();
}


export default {
    getAllCostomers,
    getAllTasks,
    addTask,
    
};