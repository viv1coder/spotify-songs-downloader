const songlink = document.querySelector("#link");

const  searchbtn = document.querySelector("#search");

const  downloadbtn = document.querySelector("#download")

const msg = document.querySelector(".message")

const linkcon = document.querySelector("#linkcon")




searchbtn.addEventListener("click",()=>{
    let song = songlink.value ;
    if(song == ""){
        msg.innerText = "Enter Valid Link"
    }else{
    
    
    console.log(song)
   
 const url = "https://spotify-downloader9.p.rapidapi.com/downloadSong?songId=${song}";


const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'efdc9dead0msh3d6b04344364212p1e7029jsn40fd6cc8da39',
		'x-rapidapi-host': 'spotify-downloader9.p.rapidapi.com'
	}
};  


msg.classList.add("les")
setTimeout(()=>{msg.classList.remove("les")},2000)
fetch(url,options).then((res)=>{
    return res.json();
}).then((data)=>{
 //  console.log(data)
 //  for(i in data){
 //       console.log(i,data[i])
  //  }
    

//for(i in data.data){

     // console.log(i,data.data[i])

//}
  
 
 

   link = data.data.downloadLink;

   linkcon.setAttribute("href",link);
   downloadbtn.style.display = "block"

});
}});