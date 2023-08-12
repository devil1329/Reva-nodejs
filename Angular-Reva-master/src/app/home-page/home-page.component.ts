import { Component } from '@angular/core';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(private animeService : AnimeService) {}

  animeBeginnerArr : any[] = [];
  animeNewReleaseArr : any[] = [];
  animeFamousArr : any[] = [];

  ngOnInit() {
    this.setAnimeBeginner();
    this.setAnimeNewRelease();
    this.setAnimeFamous();
  }

  setAnimeBeginner(){
    this.animeService.getAnime("Beginner").subscribe({
			next: (data) => { 
        this.animeBeginnerArr = data 
        console.log(this.animeBeginnerArr);
      },
			error: (err) => console.log(err)
		})
  }
  setAnimeNewRelease(){
    this.animeService.getAnime("New Release").subscribe({
			next: (data) => { this.animeNewReleaseArr = data },
			error: (err) => console.log(err)
		})
  }
  setAnimeFamous(){
    this.animeService.getAnime("Famous").subscribe({
			next: (data) => { this.animeFamousArr = data },
			error: (err) => console.log(err)
		})
  }
}
