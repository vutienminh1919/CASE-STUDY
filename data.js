function saveData(dataArr){
    localStorage.setItem('data',JSON.stringify(dataArr))
}
function loadData() {
    if (localStorage.hasOwnProperty('data')) {
        let data = localStorage.getItem('data')
        return JSON.parse(data)
    }else{
        return []
    }
}

function convertData(dataArr){
    let arrObj = []
    for (let i = 0; i < dataArr.length; i++) {
        let product

    }
}