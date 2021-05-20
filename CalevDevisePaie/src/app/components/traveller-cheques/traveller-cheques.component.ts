import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TravellerChequesService } from 'src/app/services/travellerCheques/traveller-cheques.service';


@Component({
  selector: 'app-traveller-cheques',
  templateUrl: './traveller-cheques.component.html',
  styleUrls: ['./traveller-cheques.component.css']
})
export class TravellerChequesComponent implements OnInit {
  travellerCheques;

  constructor(
    private travellerChequesService:TravellerChequesService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getTravellerCheques();
  }
  getTravellerCheques(){
    this.travellerChequesService.getAllTravellerCheques().subscribe(
      data => {
        console.log(data);
        this.travellerCheques=data;
      }
    );
  }

}
