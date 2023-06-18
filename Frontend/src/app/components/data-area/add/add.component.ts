import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CostomerModel } from 'src/app/models/costomer-model';
import { TaskModel } from 'src/app/models/task-model';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{

    public costomers: CostomerModel[] = []

    public Task = new TaskModel();

    public constructor(private dataService: DataService, private router: Router) { }


    public async ngOnInit() {
        try{
        this.costomers = await this.dataService.getCostomers()
        }
        catch (err: any) {
            alert(err.message);
        }
    }


    public async send() {
        try {
            this.dataService.addnewTask(this.Task);
            alert("Task has been successfully added");
            this.router.navigateByUrl("/home");
        }
        catch (err: any) {
            alert(err.message);
        }
    }
}
