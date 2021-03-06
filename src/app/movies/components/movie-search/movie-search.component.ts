import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {Genre} from '../../models/genre';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Location} from '../../models/location';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {
  private location: Location;

  // Todo: Populate list with service call
  genres = [
    new Genre({id: 1, name: 'Horror'}),
    new Genre({id: 2, name: 'Action'})
  ];
  searchFormGroup: FormGroup = this.fb.group({
    name: [''],
    genre: [''],
    time: ['20:00'] // Default to 8:00 PM
  });

  constructor(
    private movieService: MovieService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.getLocation();
  }

  public submit(): void {
    // Todo: this.movieService.search();
    console.log(this.searchFormGroup.value);
    console.log(this.location);
  }

  private getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.location = new Location({longitude: position.coords.longitude, latitude: position.coords.latitude});
      });
    } else {
      console.error("No support for geolocation");
    }
  }
}
