import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LingotsService } from 'src/app/services/lingots/lingots.service';

@Component({
  selector: 'app-lingots',
  templateUrl: './lingots.component.html',
  styleUrls: ['./lingots.component.css']
})
export class LingotsComponent implements OnInit {
  lingots;

  constructor(
    private lingotsService:LingotsService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getLingots();
  }
  getLingots(){
    this.lingotsService.getAllLingots().subscribe(
      dataLingots => {
        console.log(dataLingots);
        this.lingots=dataLingots;
      }
    );
  }

}
