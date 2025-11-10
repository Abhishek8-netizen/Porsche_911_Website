let image_list_carrera = ["Pictures/porsche_911_carrera.jpg", "Pictures/porsche_911_carrera_t.avif", "Pictures/Porsche_911_Carrera_S.avif", "Pictures/Porsche_carrera_gts.avif"]

let names_carrera = ["Porsche 911 Carrera", "Porsche 911 Carrera T", "Porsche 911 Carrera S", "Porsche 911 Carrera GTS"];

let acceleration_carrera = ["3.9 s", "4.3 s", "3.3 s", "2.9 s"];

let horsepower_carrera = ["388 horsepower", "388 horsepower", "473 horsepower", "532 horsepower"];

let topspeed_carrera = ["183 mph", "183 mph", "191 mph", "194 mph"];

let prev_carrera = -1;
let prev_cabriolet = -1;


function change_carrera(index) {
    let container = document.getElementById("carrera_card");
    let image = container.querySelector("img");
    let heading = container.querySelector("h2");

    /*Get the first h3 heading encountered, which is the "0-60"*/
    let sub_heading = container.querySelector("h3");

    let paras = container.querySelectorAll("p");

    image.style.opacity = 0;
    heading.style.opacity = 0;
    paras.forEach((p) => { p.style.opacity = 0 });

    /*There is one model of the Carrera (the GTS) whose 0-60 time is measured with the Sport Chrono package. So only for that case I have to change the h3 from "0-60" to "0-60 (with Sport Chrono Package)". The index of the Carrera GTS is 3. So if the user ever chooses the button with the
    change_carrera(3) function assigned to it, the 'sub_heading' variable which holds the heading '0-60' opacity becomes 0. Also heading will have to be changed if the user goes from the GTS back to some normal model with a '0-60' heading. For that we have a variable 'prev' which monitors what the previous index was. The heading doesn't have to change for the other three models, since all of them have the same "0-60" */

    /*If the index is 3, then assign 'prev' the value and make opacity 0. If index is not 3, but prev is 3 (indicating that the user went from the GTS to another model), just make opacity 0*/
    if (index == 3 || prev_carrera == 3) {
        prev_carrera = index;
        sub_heading.style.opacity = 0;
    }

    setTimeout(function () {
        image.setAttribute("src", image_list_carrera[index]);
        heading.textContent = names_carrera[index];
        paras[0].textContent = acceleration_carrera[index];
        paras[1].textContent = horsepower_carrera[index];
        paras[2].textContent = topspeed_carrera[index];

        /*If the index is 3 (indicating its the GTS model), change heading accordingly*/
        if (index == 3) {
            sub_heading.innerHTML = "0-60 <br> (with Sport Chrono package)";
            sub_heading.style.opacity = 1;
        }
        /*If the index is not 3, but 'prev' is 3, (indicating the user is just switching from the GTS to another model), change the heading accordingly and make the 'prev' -1*/
        else {
            sub_heading.textContent = "0-60"
            sub_heading.style.opacity = 1;
        }

        /*If both index and 'prev' are not 3, that means the user is scrolling through the other three models */

        image.style.opacity = 1;
        heading.style.opacity = 1;
        paras.forEach((p) => { p.style.opacity = 1 });
    }, 500)
}

/****************************************************************************************************/

let image_list_cabriolet = ["Pictures/Porsche_911_carrera_cabriolet.avif", "Pictures/Porsche_carrera_t_cabriolet.avif", "Pictures/Porsche_carrera_s_cabriolet.avif", "Pictures/Porsche_911_carrera_gts_cabriolet.avif"]

let names_cabriolet = ["Porsche 911 Carrera Cabriolet", "Porsche 911 Carrera T Cabriolet", "Porsche 911 Carrera S Cabriolet", "Porsche 911 Carrera GTS Cabriolet"];

let acceleration_cabriolet = ["4.1 s", "4.5 s", "3.5 s", "3.0 s"];

let horsepower_cabriolet = ["388 horsepower", "388 horsepower", "473 horsepower", "532 horsepower"];

let topspeed_cabriolet = ["181 mph", "182 mph", "191 mph", "194 mph"];

function change_cabriolet(index) {
    let container = document.getElementById("cabriolet_card");
    let image = container.querySelector("img");
    let heading = container.querySelector("h2");
    let paras = container.querySelectorAll("p");

    image.style.opacity = 0;
    heading.style.opacity = 0;
    paras.forEach(p => p.style.opacity = 0);

    setTimeout(function () {
        image.setAttribute("src", image_list_cabriolet[index]);
        heading.textContent = names_cabriolet[index];
        paras[0].textContent = acceleration_cabriolet[index];
        paras[1].textContent = horsepower_cabriolet[index];
        paras[2].textContent = topspeed_cabriolet[index];

        image.style.opacity = 1;
        heading.style.opacity = 1;
        paras.forEach((p) => { p.style.opacity = 1 });
    }, 500)
}

/***************************************************************************************************/

let image_list_turbo = ["Pictures/Porsche_911_Turbo.avif", "Pictures/Porsche_911_Turbo_cabriolet.avif", "Pictures/Porsche_911_Turbo_s.avif", "Pictures/Porsche_911_Turbo_s_cabriolet.avif"];

let names_turbo = ["Porsche 911 Turbo", "Porsche 911 Turbo Cabriolet", "Porsche 911 Turbo S", "Porsche 911 Turbo S Cabriolet"];

let acceleration_turbo = ["2.7 s", "2.8 s", "2.6 s", "2.7 s"];

let horsepower_turbo = ["572 horsepower", "572 horsepower", "640 horsepower", "640 horsepower"];

let topspeed_turbo = ["199 mph", "199 mph", "205 mph", "205 mph"];

function change_turbo(index) {
    let container = document.getElementById("turbo_card");
    let image = container.querySelector("img");
    let heading = container.querySelector("h2");
    let paras = container.querySelectorAll("p");

    image.style.opacity = 0;
    heading.style.opacity = 0;
    paras.forEach(p => p.style.opacity = 0);

    setTimeout(function () {
        image.setAttribute("src", image_list_turbo[index]);
        heading.textContent = names_turbo[index];
        paras[0].textContent = acceleration_turbo[index];
        paras[1].textContent = horsepower_turbo[index];
        paras[2].textContent = topspeed_turbo[index];

        image.style.opacity = 1;
        heading.style.opacity = 1;
        paras.forEach(p => p.style.opacity = 1);
    }, 500)
}

/******************************************************************************************************/

let image_list_gt3 = ["Pictures/Porsche_911_gt3.avif", "Pictures/Porsche_911_gt3_touring.avif", "Pictures/Porsche_911_gt3_rs.avif"];

let names_gt3 = ["Porsche 911 GT3", "Porsche 911 GT3 with Touring Package", "Porsche 911 GT3 RS"];

let acceleration_gt3 = ["3.2 s", "3.7 s", "3.0 s"];

let horsepower_gt3 = ["502 horsepower", "502 horsepower", "518 horsepower"];

let topspeed_gt3 = ["193 mph", "194 mph", "184 mph"];

function change_gt3(index) {
    let container = document.getElementById("gt3_card");
    let image = container.querySelector("img");
    let heading = container.querySelector("h2");
    let paras = container.querySelectorAll("p");

    image.style.opacity = 0;
    heading.style.opacity = 0;
    paras.forEach(p => p.style.opacity = 0);

    setTimeout(function () {
        image.setAttribute("src", image_list_gt3[index]);
        heading.textContent = names_gt3[index];
        paras[0].textContent = acceleration_gt3[index];
        paras[1].textContent = horsepower_gt3[index];
        paras[2].textContent = topspeed_gt3[index];

        image.style.opacity = 1;
        heading.style.opacity = 1;
        paras.forEach((p) => { p.style.opacity = 1 });
    }, 500)
}