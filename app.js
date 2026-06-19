let url="https://catfact.ninja/fact";
async function getfact(){
    try{
        let res= await axios.get(url);
        let fact=res.data.fact;
        return fact;
    }
    catch(e){
        console.log ("error is :",e);
    }
}
let button=document.querySelector('button');
let p=document.querySelector('p');
button.addEventListener('click',async()=>{
    let ans=await getfact();
    p.innerText=ans;

})
