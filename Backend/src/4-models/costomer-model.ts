import mongoose from "mongoose";

export interface ICostomerModel extends mongoose.Document {
    name: string,
    lineOfBusiness: string,
    phoneNumber: string,
    email: string,
}

// 2. Schema
export const CostomerSchema = new mongoose.Schema<ICostomerModel>({
    name: {
        type: String,
        required: [true, "Missing name"]
    },
    lineOfBusiness: {
        type: String,
        required: [true, "Missing Line Of Business"]
    },
    phoneNumber: {
        type: String,
        required: [true, "Missing phone Number"]
    },
    email: {
        type: String,
        required: [true, "Missing Email"]
    }
});

// 3. Model
export const CostomerModel = mongoose.model<ICostomerModel>("CostomerModel", CostomerSchema, "costomers");
