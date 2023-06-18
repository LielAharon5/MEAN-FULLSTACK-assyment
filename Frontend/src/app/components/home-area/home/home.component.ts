import { Component, OnInit } from '@angular/core';
import { CostomerModel } from 'src/app/models/costomer-model';
import { TaskModel } from 'src/app/models/task-model';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  public tasks: TaskModel[] = [];
  
  public costomers: CostomerModel[] = []


  public constructor(private dataService: DataService) { }
  
  public async ngOnInit() {
    this.tasks = await this.dataService.getAllTasks();
    this.costomers = await this.dataService.getCostomers();

  }


}
