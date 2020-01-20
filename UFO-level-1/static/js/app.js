// from data.js
var tableData = data;

//Assign html controls
var txtDate = d3.select("#datetime");
var btnFilter = d3.select(".btn-default");

btnFilter.on("click",function(){
	var strDate = txtDate.property("value");
	
	var arrSearchResults = tableData.filter(sighting => sighting.datetime == strDate);
	
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