const createNav = () => {
    let nav = document.querySelector('.navbar');
    
    nav.innerHTML =`
        <nav>
            <img src="image/name-logo1.png" class="name-logo" alt="">
            <ul>
                <li><a href="#section" id="about">About</a></li>
                <li><a href="#section1">Projects</a></li>
                <li><a href="#section2">Achievements</a></li>
                <li><a href="#section3">Service</a></li>
                <li><a href="#section4">Contact</a></li>
                <img src="image/sun.png" id="icon" alt="theme">
            </ul>                    
        </nav>
    `;
    var icon = document.getElementById("icon");
        icon.onclick = function(){
            document.body.classList.toggle("dark-theme");
            if(document.body.classList.contains("dark-theme")){
                icon.src = "image/moon.png";
                
            }else{
                icon.src = "image/sun.png";
            }
        }

//         var scrollAbout = document.getElementById("about");
//         scrollAbout.onclick = function(){
//         window.location.href = '#section';
//         console.log(document.querySelector("#section h1"));
//         document.querySelector("#section h1").style.textDecoration = "underline";
//         }
//         var scroll1 = document.getElementById("section1");
//         if(scroll1)
//         {
//             scroll1.onclick = function(){
//                 window.location.href = '#section2';
//             }
//         }
//         var scroll2 = document.getElementById("section2");
//         if(scroll2)
//         {
//             scroll2.onclick = function(){
//                 window.location.href = '#section3';
//             }
//         }
//         var scroll3 = document.getElementById("section3");
//         if(scroll3)
//         {
//             scroll3.onclick = function(){
//                 window.location.href = '#section3';
//             }
//         }
//         var scroll4 = document.getElementById("section4");
//         if(scroll4)
//         {
//             scroll4.onclick = function(){
//                 window.location.href = '#section4';
//             }
//         }    

}
createNav();