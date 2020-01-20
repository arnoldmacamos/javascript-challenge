// from data.js
var tableData = data;

//Assign html controls
var txtDate = d3.select("#datetime");
var txtCity = d3.select("#city");
var txtState = d3.select("#state");
var txtCountry = d3.select("#country");
var txtShape = d3.select("#shape");



var btnFilter = d3.select(".btn-default");

btnFilter.on("click",function(){
	var strDate = txtDate.property("value");
	var strCity = txtCity.property("value");
	var strState = txtState.property("value");
	var strCountry = txtCountry.property("value");
	var strShape = txtShape.property("value");
	
	
	var arrSearchResults = [];
	
	
	if(strDate.trim() != "" || strCity.trim() != "" || strState.trim() != "" || strCountry.trim() != "" || strShape.trim() != ""){
		
		arrSearchResults = tableData;
		if (strDate.trim() != ""){
			arrSearchResults = arrSearchResults.filter(sighting => sighting.datetime == strDate );
		}
		
		if (strCity.trim() != ""){
			arrSearchResults = arrSearchResults.filter(sighting => sighting.city == strCity);
		}

		if (strState.trim() != ""){
			arrSearchResults = arrSearchResults.filter(sighting => sighting.state == strState );
		}

		if (strCountry.trim() != ""){
			arrSearchResults = arrSearchResults.filter(sighting => sighting.country == strCountry );
		}

		if (strShape.trim() != ""){
			arrSearchResults = arrSearchResults.filter(sighting => sighting.shape == strShape);
		}
	}		
	
	var tblUfo = d3.select("#ufo-table tbody")
	
	//Clear search result table
	tblUfo.html("");
		
	//Insert new search results into the table
	arrSearchResults.forEach(function(sighting){
		var row = tblUfo.append("tr");
		
		row.append("td").text(sighting.datetime);
		row.append("td").text(sighting.city);
		row.append("td").text(sighting.state);
		row.append("td").text(sighting.country);
		row.append("td").text(sighting.shape);
		row.append("td").text(sighting.durationMinutes);
		row.append("td").text(sighting.comments);
	});
	
});