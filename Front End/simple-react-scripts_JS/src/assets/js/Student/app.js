const sideMenu = document.querySelector("aside");
const profileBtn = document.querySelector("#profile-btn");
const themeToggler = document.querySelector(".theme-toggler");
const nextDay = document.getElementById('nextDay');
const prevDay = document.getElementById('prevDay');

// profileBtn.onclick = function() {
//     sideMenu.classList.toggle('active');
// }
window.onscroll = () => {
    sideMenu.classList.remove('active');
    if(window.scrollY > 0){document.querySelector('header').classList.add('active');}
    else{document.querySelector('header').classList.remove('active');}
}

themeToggler.onclick = function() {
    document.body.classList.toggle('dark-theme');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active')
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active')
}

const  setData = (day) =>{
    document.querySelector('table tbody').innerHTML = ' ';   
    const daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    document.querySelector('.timetable div h2').innerHTML = daylist[day];
    switch(day){
        case(0): day = 'Sunday'; break;
        case(1): day = 'Monday'; break;
        case(2): day = 'Tuesday'; break;
        case(3): day = 'Wednesday'; break;
        case(4): day = 'Thursday'; break;
        case(5): day = 'Friday'; break;
        case(6): day = 'Saturday'; break;
        default : day = 'Saturday';
    }

    day.forEach(sub => {
        const tr = document.createElement('tr');
        const trContent = `
                            <td>${sub.time}</td>
                            <td>${sub.roomNumber}</td>
                            <td>${sub.subject}</td>
                            <td>${sub.type}</td>
                        `
        tr.innerHTML = trContent;
        document.querySelector('table tbody').appendChild(tr)                        
    });
}

const now = new Date();
const today = now.getDay(); 
let day = today; 
function timeTableAll(){
    document.getElementById('timetable').classList.toggle('active');
    setData(today);
    document.querySelector('.timetable div h2').innerHTML = "Today's Timetable";
}

nextDay.onclick = function() {
    if (day <= 5) {
        day += 1;
    } else {
        day = 0;
    }
    setData(day);
}

prevDay.onclick = function() {
    if (day >= 1) {
        day -= 1;
    } else {
        day = 6;
    }
    setData(day);
}

setData(day); 
document.querySelector('.timetable div h2').innerHTML = "Today's Timetable"; 
