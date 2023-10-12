const loadFirst= document.getElementById("loadFirst")
const loadSecond=document.getElementById("loadSecond")

const load= function(){

fetch("https://api.pexels.com/v1/search?query=[your-query]",{
    headers: {
        Authorization: "hxVI8L5wo5VX6PCgq8faOAF0zyJW9zdULBlpto5QVZzYeZfmAtLbJ6ai"
    }})

    .then((res)=> {if(res.ok){return res.json()} else {throw new Error("errore")}})
    .then((data)=>{console.log(data)})
    .catch((err)=>{console.log("errore",err)})
}

loadFirst.addEventListener("click", load )

const loadTwo= function(){

    fetch("https://api.pexels.com/v1/search?query=[your-secondary-query]",{
        headers: {
            Authorization: "hxVI8L5wo5VX6PCgq8faOAF0zyJW9zdULBlpto5QVZzYeZfmAtLbJ6ai"
        }})
    
        .then((res)=> {if(res.ok){return res.json()} else {throw new Error("errore")}})
        .then((data)=>{console.log(data)})
        .catch((err)=>{console.log("errore",err)})
    }
    
    loadSecond.addEventListener("click", loadTwo )


    const getImage= document.querySelectorAll("svg")

  getImage.forEach(img=>{
    load()
  })