import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { TaskModel } from '../models/task-model';
import { CostomerModel } from '../models/costomer-model';
import { appConfig } from '../utils/app-config';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    addTask(Task: TaskModel) {
        throw new Error('Method not implemented.');
    }
    getAllCostomers(): CostomerModel[] | PromiseLike<CostomerModel[]> {
        throw new Error('Method not implemented.');
    }

    public constructor(private http: HttpClient) { }

    // Get all tasks:
    public async getAllTasks(): Promise<TaskModel[]> {
        const observable = this.http.get<TaskModel[]>(appConfig.tasksUrl)
        const tasks = await firstValueFrom(observable)
        return tasks;
    }

    // Get all Costomers:
    public async getCostomers(): Promise<CostomerModel[]> {
        const observable = this.http.get<CostomerModel[]>(appConfig.costomersUrl);
        const costomers = await firstValueFrom(observable);
        return costomers;
    }

    // Add task:
    public async addnewTask(task: TaskModel): Promise<void> {
        const observable = this.http.post<TaskModel>(appConfig.tasksUrl, task);
        await firstValueFrom(observable);
    }

    // Delete movie:
    // public async deleteMovie(movieId: string): Promise<void> {
    //     const observable = this.http.delete(appConfig.moviesUrl + movieId);
    //     await firstValueFrom(observable);
    // }

}
