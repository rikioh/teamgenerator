const employeesBase = require("./index");

// create 1 row for each hour for a total of 24 rows
for (i=0;i<employeesBase.length;i++){
    // create row for the individual hour
    var employeeRow = $("<div>");
    // create columns for time, info, and save button
    var nameCol = $("<div>")
    var idCol = $("<div>")
    var emailCol = $("<div>")
    // add class and Id's to columns in rows
    employeeRow.addClass("row");
    employeeRow.attr("id", "employeeRow");
    nameCol.addClass("col-md")
    nameCol.attr("id", "nameCol")
    idCol.addClass("col-md form-group")
    idCol.attr("id", "idCol");
    emailCol.addClass("col-md")
    emailCol.attr("id", "emailCol")
    // append row to main div
    $("#employeeRows").append(employeeRow)
    // append columns to time Row div
    $("#employeeRow").append(nameCol)
    $("#employeeRow").append(idCol)
    $("#employeeRow").append(emailCol)
    // append hour text and text form to columns
    $("#nameCol").append(employeesBase[i].Name)
    $("#idCol").append(employeesBase[i].ID)
    $("#emailCol").append(employeesBase[i].Email)
    // remove generic id attributes for items for loop to continue working
    $("#nameCol").removeAttr("id")
    $("#employeeRow").removeAttr("id")
    $("#idCol").removeAttr("id")
    $("#emailCol").removeAttr("id")
}