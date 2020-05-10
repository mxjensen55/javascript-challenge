// from data.js
var tableData = data;

function createTable(data){
    var tbody = d3.select("tbody");
    tbody.html("");
    data.forEach(function(dateFilter){
        // console.log(dateFilter)
        var row = tbody.append("tr");

    

    Object.values(dateFilter).forEach(function(value){
        // console.log(value);
        var cell = row.append("td");
        cell.text(value);
        });

});

}

createTable(tableData);

var filters = {};

function updateFilters(){
    var changeElement=d3.select(this).select("input");
    var elementValue=changeElement.property("value");
    var filterId=changeElement.attr("id");
    if (elementValue){
        filters[filterId]=elementValue;
    }

    else {
        delete filters[filterId];
    }
    runEnter();
}

// Complete the event handler function for the form
function runEnter() {

    d3.event.preventDefault();
    
    var filteredData=tableData;
    Object.entries(filters).forEach(([key, value])=>{
        filteredData= filteredData.filter(row => row[key]===value);
    });

  createTable(filteredData);
 

  

    console.log(filteredData);

};

d3.selectAll("#filter-btn").on('click', updateFilters);