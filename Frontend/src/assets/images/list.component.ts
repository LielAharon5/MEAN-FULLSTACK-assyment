import { Component, OnInit } from '@angular/core';
import { MovieModel } from 'src/app/models/movie-model';
import { TheaterModel } from 'src/app/models/theater-model';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    public theaters: TheaterModel[] = [];
    public movies: MovieModel[] = [];

    public constructor(private dataService: DataService) { }

    public async ngOnInit() {
        try {
            this.theaters = await this.dataService.getAllTheaters();
        }
        catch (err: any) {
            alert(err.message);
        }
    }

    public async displayMovies(args: Event) {
        try {
            const selectElement = args.target as HTMLSelectElement;
            const theaterId = selectElement.value;
            this.movies = await this.dataService.getMoviesByTheater(theaterId);
        }
        catch (err: any) {
            alert(err.message);
        }
    }

    public async deleteMe(_id: string) {
        try {
            
            if(!window.confirm("Are you sure?")) return;

            await this.dataService.deleteMovie(_id);
            alert("Movie has been deleted");
            
            // Refresh list:
            const index = this.movies.findIndex(m => m._id === _id);
            this.movies.splice(index, 1);
            
        }
        catch (err: any) {
            alert(err.message);
        }
    }

}
