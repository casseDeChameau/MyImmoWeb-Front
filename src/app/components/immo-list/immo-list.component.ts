import { Component, OnInit } from '@angular/core';
import { ImmoService } from 'src/app/service/immo.service';
import { Immo } from 'src/app/domain/immo';

@Component({
  selector: 'app-immo-list',
  templateUrl: './immo-list.component.html',
  styleUrls: ['./immo-list.component.scss']
})

export class ImmoListComponent implements OnInit {

  data : Immo[];
  width = 50;
  constructor(private service: ImmoService) { }

  ngOnInit() {
    this.service.getAllImmo().subscribe(
      reponse => this.data = reponse,
      erreur => console.log('Attention, il y a une erreur : ' +erreur)
    );
  }

  // this.data = [
  //   {
  //     "id": 4,
  //     "adress": "Anderlecht",
  //     "pictureUrl": "https://www.nps.gov/york/learn/historyculture/images/IMG_5689r-688.jpg?maxwidth=1200&maxheight=1200&autorotate=false",
  //     "surfaceArea": 422,
  //     "price": 523000,
  //     "contact": "0471 874 678"
  // },
  // {
  //     "id": 2,
  //     "adress": "Uccle",
  //     "pictureUrl": "https://upload.wikimedia.org/wikipedia/commons/9/90/Gamma_Triton_Chapter_of_Phi_Sigma_Kappa%2C_at_South_Carolina%2C_2013.jpg",
  //     "surfaceArea": 850,
  //     "price": 8453000,
  //     "contact": "0471 874 678"
  // },
  // {
  //     "id": 3,
  //     "adress": "Schaerbeek",
  //     "pictureUrl": "https://www.nps.gov/york/learn/historyculture/images/IMG_5638R688.jpg?maxwidth=1200&maxheight=1200&autorotate=false",
  //     "surfaceArea": 380,
  //     "price": 865000,
  //     "contact": "0471 874 678"
  // },
  // {
  //     "id": 1,
  //     "adress": "Bruxelles",
  //     "pictureUrl": "https://c.pxhere.com/photos/a7/f2/south_africa_hout_bay_balau_villa_home_holiday_accommodation_reed_roof-649728.jpg!d",
  //     "surfaceArea": 45,
  //     "price": 200000,
  //     "contact": "0471 874 678"
  // } lever les doublequote et mettre simplequote autour des url pour OK
  // ]
}
