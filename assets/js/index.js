//KODE JAVASCRIPT UNTUK MENGHANDLE NAVIGASI PADA MOBILE

let status = 0;
const button = document.querySelector("#btnmobile");
const linknav = document.getElementsByClassName("linknav");

button.addEventListener('click', function(event){

    if(status==0){
        document.getElementById("listnav").setAttribute("class","show");
        status = 1;
    }else{
        document.getElementById("listnav").setAttribute("class","hide");
        status = 0;
    }

});

for(let link of linknav){
    link.addEventListener('click', function(event){
        document.getElementById("listnav").setAttribute("class","hide");
        status = 0;
    })
}