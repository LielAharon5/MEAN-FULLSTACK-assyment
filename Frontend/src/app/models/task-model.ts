import { CostomerModel } from "./costomer-model";

export class TaskModel {
    public _id: string;
    public description: string;
    public date: string;
    public costomerId: CostomerModel;
    public status: boolean;
    public costomers: {
            _id: string,
            name: string,
            lineOfBusiness: string,
            phoneNumber: string,
            email:string
    }
}
