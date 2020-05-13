//create variable for data

var tableData = data;

//create function that already has table displayed

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

//select the button

var inputButton = d3.select("#filter-btn");

inputButton.on("click", function(){

    //prevent page from re-loading

    d3.event.preventDefault();

    //select input element and get raw html note

    var inputElement = d3.select("#datetime");

    //get value property of input element

    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData= tableData.filter(d => d.datetime === inputValue)

    console.log(filteredData)

    createTable(filteredData)
    


})

