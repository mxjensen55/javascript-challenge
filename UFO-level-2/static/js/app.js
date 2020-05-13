// from data.js
var tableData = data;

function createTable(data) {
    var tbody = d3.select("tbody");
    tbody.html("");
    data.forEach(function(dateFilter) {
        // console.log(dateFilter)
        var row = tbody.append("tr");
        Object.values(dateFilter).forEach(function(value) {
            // console.log(value);
            var cell = row.append("td");
            cell.text(value);
        });

    });

}

createTable(tableData);



var filters = {};

function updateFilters() {
    // var changeElement = d3.selectAll(this).select("input");
    var changeElement = d3.selectAll("input").nodes()
    console.log(changeElement)
    changeElement.forEach(item => {
        console.log(item.value)
        var elementValue = item.value;
        var searchField = item.id;
        if (elementValue) {
            filters[searchField] = elementValue;
        } else {
            delete searchField;
        }
    })
    console.log(filters)

    runEnter();
}


// Complete the event handler function for the form
function runEnter() {

    d3.event.preventDefault();
    var filteredData = tableData;
    //object.entries displays a key, value pair of the filtered data
    Object.entries(filters).forEach(([key, value]) => {
        filteredData = filteredData.filter(row => row[key] === value);
    });

    createTable(filteredData);

    console.log(filteredData);

};

var inputButton = d3.select("#filter-btn")
var form = d3.select("#form")

inputButton.on("click", updateFilters)
form.on("submit", updateFilters)