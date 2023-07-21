var userAcount = document.getElementById("YN")
var $event = document.getElementById("TE")
var points = document.getElementById("Po")
var reqPoints = document.getElementById("RP")
var storeData; 

if ( localStorage.getItem("User's") == null ) {
    storeData = []
}else {
    storeData = JSON.parse(localStorage.getItem("User's"))
    forDisplyData()
}


function gitDataValue() {
    var eventData ={
        userAcount : userAcount.value ,
        $event : $event.value , 
        points : Number(points.value) , 
        reqPoints : Number(reqPoints.value)
    }
    storeData.push(eventData)
    console.log(storeData);
    localStorage.setItem("User's" , JSON.stringify(storeData))
    forDisplyData()
    clearForms()

}



function forDisplyData() {
    var html = ""
    for (var i = 0 ; i<storeData.length ; i++) {
        html+= `<tr>
        <td>${i+1}</td>
        <td>${storeData[i].userAcount}</td>
        <td>${storeData[i].$event}</td>
        <td>${storeData[i].points}</td>
        <td>${storeData[i].reqPoints}</td>
        <td class="d-flex justify-content-center"> <button class="btn btn-outline-info" onclick="DeleteElements(${i})" > Delete </button></td>
        <td><button class="btn btn-outline-info "> Update </button></td>
    </tr>
    `
    }
document.getElementById("tableData").innerHTML = html
}

function clearForms() {
    userAcount.value =  ""
    $event.value = ""
    points.value = ""
    reqPoints.value = ""
}

function DeleteElements(num) {
    storeData.splice(num , 1)
    localStorage.setItem("User's" , JSON.stringify(storeData))
    forDisplyData()
}

function toSearch() {
    console.log(sdsds);
}