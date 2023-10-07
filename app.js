const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
    //most popular moives

    const IMGPATH = "https://image.tmdb.org/t/p/w1280";


const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
//search moives



const movieBox = document.querySelector("#moive-box")

const getMoives = async(api) =>{
   
    const response = await fetch (api)
    const data = await response.json()
    // console.log(data)
showMoives(data.results)

}

const showMoives = (data)=>{
    movieBox.innerHTML = ""; //reset moive box
    data.forEach(
        (item) => {
            // console.log(item)
       const box = document.createElement("div")
       box.classList.add("box")
       box.innerHTML = `  
           <img src=${IMGPATH+item.poster_path} alt=""/ >
       <div class="overlay">
           <div class="title">
               <h1>${item.original_title}</h1>
               <span>${item.vote_average}</span>
           </div>
                <h3>Overview</h3>
               <p>${item.overview}</p>
       </div>    `;
        movieBox.appendChild(box)
  }
    )
}

document.querySelector("#search").addEventListener(
    "keyup",
  function(Event){
   if(Event.target.value != ""){

    getMoives(SEARCHAPI + Event.target.value)//search moives
   }else{
    getMoives(APIURL)
   }
  }
)
    




//Initial call
getMoives(APIURL)


