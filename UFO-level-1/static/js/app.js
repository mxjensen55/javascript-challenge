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

// select the button

// var button = d3.select("#filter-btn");

// //select the form

// var form = d3.select(".form-group");

// //create variable for tbody

// var tbody = d3.select("tbody");

//Create event handlers

// button.on("click", runEnter);
// form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    // console.log(inputValue);
    // console.log(tableData);

    //Filter the data by date given

    var filteredData = tableData.filter(function(t){
        return t.datetime === inputValue
      });
    
    //print the filtered data to the console

    console.log(filteredData);

    //loop through the filtered data and console.log each object of filtered data

    // filteredData.forEach(function(dateFilter){
    //     console.log(dateFilter)
    //     var row = tbody.append("tr");

    createTable(filteredData);

    // Object.entries(dateFilter).forEach(function([key, value]){
    //     console.log(key, value);
    //     var cell = tbody.append("td");
    //     cell.text(value);
    //     });
        
    // });
    //Where does this go?? 
    // list.html("");
};

d3.selectAll("#filter-btn").on('click', runEnter);