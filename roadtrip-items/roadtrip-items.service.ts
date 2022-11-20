getRoadTripDetailsByRouteID(routeID: number) {
	this.suggestions = [];
	this.http.get<any>(url).subscribe(response => {
		let businessProfileUrl = businessUrl;
		this.http.put<any>(businessProfileUrl,{}).subscribe(businessProfilesResponse => {
			if(businessProfilesResponse.success) {
				this.suggestions = businessProfilesResponse.data;
				if(response.success) {
					if(routeID == 23) {
						this.suggestions.push(
							{
								ID: -1,
								latitude: 39.6779225,
								longitude: 20.8410659,
								mainImagePath: "../../assets/images/6.png",
								name: "Artisian café",
							}, {
								ID: -2,
								latitude: 39.6779225,
								longitude: 20.8410659,
								mainImagePath: "../../assets/images/7.png",
								name: "Yard, all day bar restaurant",
							}, {
								ID: -3,
								latitude: 37.979685281478076,
								longitude: 23.73777826918349,
								mainImagePath: "../../assets/images/8.png",
								name: "Κιουζίν",
								
							}
						)

						this.events.push(
							{
								ID: -4,
								latitude: 39.6779225,
								longitude: 20.8410659,
								mainImagePath: "../../assets/images/12.png",
								name: "Συναυλία Kenny Garrett",
							}
						)
					} else {
						for(let j in this.suggestions) {
							this.suggestions[j].mainImagePath = this.constants.url + this.suggestions[j].mainImagePath;
						}
					}
					//this.clearLiveSearchData();
				}
			}	
		})
	});
}