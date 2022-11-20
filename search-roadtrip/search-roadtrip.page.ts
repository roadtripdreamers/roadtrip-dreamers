import { Component, OnInit } from '@angular/core';
import { faCar, faMotorcycle, faShuttleVan, faHotel, faWheelchair, faRoute, faEuroSign, faCity, faCarAlt, faShoePrints } from '@fortawesome/free-solid-svg-icons';
import { SearchRoadTripServices } from './search-road-trip.service';
import { SearchRoadtrip } from './search-road-trip.model';
import { Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-road-trip',
  templateUrl: './search-road-trip.page.html',
  styleUrls: ['./search-road-trip.page.scss'],
})

export class SearchRoadTripPage implements OnInit {
	distance: number = 120;
	initialCity: string;
	days: number = 1;
	cost: number = 600;
	convertedCost: number;
	phoneWidth: number;
	subscribe: Subscription;
	distanceObject: {
		"min": number,
		"maxEq": number
	};
	ameaCareChecked: boolean = false;
	withCar: boolean = false;
	withFeet: boolean = false;
	subscription: Subscription;
	backButtonSubscribe: Subscription;
	faCar = faCar;
	faMotorcycle = faMotorcycle;
	faShuttleVan = faShuttleVan;
	faHotel = faHotel;
	faWheelchair = faWheelchair;
	faRoute = faRoute;
	faEuroSign = faEuroSign;
	faCity = faCity;
	faCarAlt = faCarAlt;
	faShoePrints =faShoePrints;
	baseID;
	showBaseAlert: boolean = true;
	bases = [];

	showTownTripAndRoadtrip = true;
	constructor(public searchRoadTripServices: SearchRoadTripServices, public platform: Platform, private router: Router) {
		platform.ready().then((ready) => {
			this.phoneWidth = platform.width();
			this.searchRoadTripServices.getBasesData();
		});
	}

	ngOnInit() {
		//need to check the reload at web so we use subscription and add the default values
		this.subscribe = this.searchRoadTripServices.getBasesSubject.subscribe((data) => {
			//this.bases = this.searchRoadTripServices.bases;
			this.bases = [
				{
					ID: 1,
					description: "Στάση Σύνταγμα"
				},
				{
					ID: 2,
					description: "Στάση Μοναστηράκι"
				},
				{
					ID: 3,
					description: "Στάση Ακρόπολη"
				},
				{
					ID: 4,
					description: "Στάση Αεροδρόμιο"
				},
			]
			this.initialCity = this.bases[0].description;
		});	
	}

	changeBaseID = () => {
		this.showBaseAlert = false;
	} 

	ngOnDestroy = () => {
		this.subscribe.unsubscribe();
		this.backButtonSubscribe.unsubscribe();
	}

	showSearchMode = () => {
		this.showTownTripAndRoadtrip = false;
	}
}
