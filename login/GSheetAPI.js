/*
https://script.google.com/macros/s/AKfycbx3SKCwHlVyg3HBJ1E3vlnGvpcVAlDh3rvkWVb4fxXtSHDp8ORqWW9FkFNgG2xdnCNg/exec  --- API Called

https://script.google.com/macros/s/AKfycbx3SKCwHlVyg3HBJ1E3vlnGvpcVAlDh3rvkWVb4fxXtSHDp8ORqWW9FkFNgG2xdnCNg/exec?addRowData=true&dt1=val1&dt2=val2&dt3=val3&dt4=val4  --- Insert Record

https://script.google.com/macros/s/AKfycbx3SKCwHlVyg3HBJ1E3vlnGvpcVAlDh3rvkWVb4fxXtSHDp8ORqWW9FkFNgG2xdnCNg/exec?updateRowData=username&dt1=val1&dt2=val2&dt3=val3&dt4=val4  --- Update Data

https://script.google.com/macros/s/AKfycbx3SKCwHlVyg3HBJ1E3vlnGvpcVAlDh3rvkWVb4fxXtSHDp8ORqWW9FkFNgG2xdnCNg/exec?deleteRowData=username  --- Delete Record

https://script.google.com/macros/s/AKfycbx3SKCwHlVyg3HBJ1E3vlnGvpcVAlDh3rvkWVb4fxXtSHDp8ORqWW9FkFNgG2xdnCNg/exec?getFullData=true  --- Select *

https://script.google.com/macros/s/AKfycbx3SKCwHlVyg3HBJ1E3vlnGvpcVAlDh3rvkWVb4fxXtSHDp8ORqWW9FkFNgG2xdnCNg/exec?getUserData=val6 --- Select a Row
*/
var API_URL = "https://script.google.com/macros/s/AKfycbx3SKCwHlVyg3HBJ1E3vlnGvpcVAlDh3rvkWVb4fxXtSHDp8ORqWW9FkFNgG2xdnCNg/exec";
var FetchedData;

function createAccount(data1, data2, data3, data4) {
    var DataResponse = "";

    fetch(API_URL + `?addRowData=true&dt1=${data1}&dt2=${data2}&dt3=${data3}&dt4=${data4}`)
        .then(response => response.json())
        .then(data => {
            DataResponse = data.Data;
            console.log(DataResponse);
            try {
                if (DataResponse.includes("Successfully")) {
                    document.querySelector("#FullName").insertAdjacentHTML("beforeend", `<u>${document.querySelector("#FName").value} ${document.querySelector("#LName").value}</u>`);
                    document.querySelector("#UserN").insertAdjacentHTML("beforeend", `<u>${DataResponse.split("Username-")[1].trim()}</u>`);
                    document.querySelector("#EmailAd").insertAdjacentHTML("beforeend", `<u>${document.querySelector("#EmailAdd").value}</u>`);
                    document.querySelector("#PassW").insertAdjacentHTML("beforeend", `<u>${document.querySelector("#Password").value}</u>`);
                    document.querySelector(".modal").style.opacity = 1;
                    document.querySelector(".modal").style.zIndex = 1
                    //Show username details
                }
            } catch (error) {

            }
        })
    return DataResponse;
}

function readAccount(data1) {
    var DataResponse = "";

    fetch(API_URL + `?getUserData=${data1}`)
        .then(response => response.json())
        .then(data => {
            DataResponse = data.Data;
            FetchedData = data.Data;
            console.log(DataResponse);
            try {
                if (DataResponse[0].length > 1) {
                    document.querySelector("#loginFieldUserName").style.display = "none";
                    document.querySelector("#loginFieldPassword").style.display = "flex";
                    document.querySelector(".staysignedinCls").classList.add("show");
                }
                else {
                    alert("User Name not Found, Please retry.");
                    document.querySelector("#UserName").value = "";
                    document.querySelector("#Password").value = "";
                }
            } catch (error) {
            }
        })
    return DataResponse;
}

function editAccount(ID, data1, data2, data3, data4) {
    var DataResponse = "";

    fetch(API_URL + `?updateRowData=${ID}&dt1=${data1}&dt2=${data2}&dt3=${data3}&dt4=${data4}`)
        .then(response => response.json())
        .then(data => {
            DataResponse = data.Data;
            console.log(DataResponse);
        })
    return DataResponse;
}

function deletePreviousData(ID) {
    var DataResponse = "";

    fetch(API_URL + `?deleteRowData=${ID}`)
        .then(response => response.json())
        .then(data => {
            DataResponse = data.Data;
            console.log(DataResponse);
        })
    return DataResponse;
}