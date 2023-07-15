n=['Razan ', 'Anfal','Abeda','Sawsan'];
a= [25,26,23,22];

function task(n,a){
    var bigdiv = document.createElement('div');
    bigdiv.setAttribute('class', 'container');
    

for (i=0; i<n.length; i++){    
    const card = document.createElement("div");
    card.style='border:3px solid pink ; display:inline-block ; margin: 5px ; padding:5px'
    const namee = document.createElement("h1");
    const agee = document.createElement("p");
    const imag = document.createElement("img");
    imag.src = "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
    imag.style ='width:200px'

    let nameall = document.createTextNode(`${n[i]}`);
    let ageall = document.createTextNode(`${a[i]}`);

    namee.appendChild(nameall);
    agee.appendChild(ageall);
    card.appendChild(namee);
    card.appendChild(agee);
    card.appendChild(imag);
    bigdiv.appendChild(card);
    
}
document.body.appendChild(bigdiv);
}

task(n,a)