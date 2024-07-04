var findBtn = document.getElementById('find')
var input = document.getElementById('input')
var loading =document.querySelector('.loading')
var allData=[]




getLocation('cairo')
// Api
async function getLocation(location){
try {
    loading.classList.remove('d-none')
    var response = await fetch(`http://api.weatherapi.com/v1/search.json?key=e66e1bcf0c4941bbbb2194959242806&q=${location}`);

    var data = await response.json()
    console.log (allData)

    allData = data

    console.log(data)
    displayData()
    loading.classList.add('d-none')

} catch(error) {
    loading.classList.add('d-none')

    console.log('Errorrrrrr')
}
   
}


function displayData (){

    var cartona =""


    for(var i = 0 ; i<allData.length ; i++){
cartona =`<tr>
<td class="ps-3"><p class="fs-5 pt-3">${allData[i].name}</p> <p class=" fw-bold pt-3 text-warning degree">${allData[i].lat}ºC </p> <p><i class="fa-solid fa-moon text-info fs-5 pt-2"></i></p> <p class="fs-5 pt-2">clear</p>
    <div class="icons d-flex justify-content-between fs-6 pt-2">
     <span ><i class="fa-solid fa-umbrella text-warning"></i> <span>20%</span></span>
     <span ><i class="fa-solid fa-wind text-info"></i><span>18km/h</span></span>
     <span><i class="fa-solid fa-compass text-success"></i> <span>East</span></span>
    </div>
    
    </td>
<td class="p-5 text-center"><p><i class="fa-solid fa-sun fs-5 text-warning"></i></p>  <p>32.3ºC </p>  <p>40ºC </p>  <p>sunny </p></td>
<td class="p-5 text-center"><p><i class="fa-solid fa-sun fs-5 text-warning"></i></p>  <p>32.3ºC </p>  <p>40ºC </p>  <p>sunny </p></td>

</tr>`
    }
    document.getElementById('body').innerHTML= cartona
}


// findBtn.addEventListener('click' , function(){
//     getLocation(input.value)

// })
input.addEventListener('input', function(){
    getLocation(input.value)

})


