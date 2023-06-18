import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieModel } from 'src/app/models/movie-model';
import { TheaterModel } from 'src/app/models/theater-model';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

    public theaters: TheaterModel[] = [];
    public movie = new MovieModel();

    public constructor(private dataService: DataService, private router: Router) { }

    public async ngOnInit() {
        try {
            this.theaters = await this.dataService.getAllTheaters();
        }
        catch (err: any) {
            alert(err.message);
        }
    }

    public async send() {
        try {
            await this.dataService.addMovie(this.movie);
            alert("Movie has been successfully added");
            this.router.navigateByUrl("/list");
        }
        catch (err: any) {
            alert(err.message);
        }
    }
}
