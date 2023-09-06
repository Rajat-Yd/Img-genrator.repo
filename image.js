const accessKey = "vAEs1VWiSQL1LP0-Uvls8thvLSKW0ZpA3P0-Jgrz6VA";
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = ""
let page = 1;
async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const response = await fetch(url)
    const data = await response.json();

  if (page === 1){
    searchResult.innerHTML = "";
  }

    const results = data.results;
    
    results.map((results) => {
       const image = document.createElement("img");
       image.src = results.urls.small;
       const imagelink = document.createElement("a");
       imagelink.href = results.links.html;
       imagelink.target = "_blank";

       imagelink.appendChild(image);
       searchResult.appendChild(imagelink);
    } )

    showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit" , (e) =>{
    e.preventDefault();
    page = 1;
    searchImages();
})

showMoreBtn.addEventListener("click", ()=>{
     page++;
     searchImages();
})
