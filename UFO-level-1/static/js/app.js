// from data.js
let tableData = data;

console.log(tableData);

// reference table body 
let tbody = d3.select("tbody");

// values for each column 
tableData.forEach(function(ufoSighting) {

    console.log(ufoSighting);
        
//append table row `tr` for each UFO sighting object 
let row = tbody.append("tr");
    
// use object.entries to console.log (to print) each UFO sighting 
Object.entries(ufoSighting).forEach(function([key, value]) {
console.log(key, value);
// append a cell to the row for each value 
let cell = row.append("td");
cell.text(value);

    });
});

// select the button
let button = d3.select("#filter-btn");
button.on("click", function() { 
    tbody.html("");

// select the input date
let inputElement = d3.select("#datetime");
    // Get the value property of the input date, state, shape
    let inputValue = inputElement.property("value");
    // console.log input value
    console.log(inputValue);
    // Filter Data with datetime equal to input value
    let filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    // console.log filter values
    console.log(filteredData);


    filteredData.forEach(function(selections) {

    console.log(selections);
    // Append one table row `tr` for each UFO Sighting object
    let row = tbody.append("tr");
    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        let cell = row.append("td");
        cell.text(value);
    });
});
});





