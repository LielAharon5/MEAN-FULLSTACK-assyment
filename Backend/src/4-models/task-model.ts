import mongoose from "mongoose";
import { CostomerModel } from "./costomer-model";

// 1. Interface
export interface ITaskModel extends mongoose.Document {
    
    description: string;
    date: string;
    costomerId: mongoose.Schema.Types.ObjectId;
    status: boolean;
}

// 2. Schema
export const TaskSchema = new mongoose.Schema<ITaskModel>({

    description: {
        type: String,
        required: [true, "Missing description"]
    },
    date: {
        type: String,
        required: [true, "Missing date"]
    },
    costomerId: {
        type: mongoose.Schema.Types.ObjectId
    },
    status: {
        type: Boolean,
        default: false
    }
}, {
    versionKey: false,
    toJSON: { virtuals: true},
    id: false
});

TaskSchema.virtual("costomers", {
    ref: CostomerModel,
    localField: "costomerId",
    foreignField: "_id",
    justOne: true
});

// 3. Model
export const TaskModel = mongoose.model<ITaskModel>("TaskModel", TaskSchema, "tasks-per-costomer");
