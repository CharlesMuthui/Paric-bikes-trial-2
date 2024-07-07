
/* HAMBURGER FUNCTION */
document.addEventListener('DOMContentLoaded', () =>{


    const navbar = document.getElementById("navbar");
    const hamburger = document.getElementById("hamburger");
    const closebtn = document.getElementById("closebtn");

    hamburger.addEventListener('click',()=>{
        if(navbar.style.display === 'none'){
                navbar.style.display = 'flex';
                hamburger.style.display = 'none';
                closebtn.style.display = 'block';
        }else{
            navbar.style.display = 'none';
            closebtn.style.display = 'none';
            hamburger.style.display = 'block';
        }
    })

    closebtn.addEventListener('click', () =>{
            navbar.style.display = 'none';
            closebtn.style.display = 'none';
            hamburger.style.display = 'block';
    })
}) 
