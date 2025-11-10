image_list = ["Pictures_targa/chassis.avif", "Pictures_targa/engine.avif", "Pictures_targa/electric_motor.avif", "Pictures_targa/exhaust_turbocharger.avif", "Pictures_targa/High_voltage_battery.png", "Pictures_targa/performance.avif"];

heading_list = ["Structure", "3.6-liter flat 6 engine", "Electric motor in the PDK", "Electric exhaust turbocharger", "High voltage battery", "Performance"];

description_list = [

    "Crucial to the high performance of the T-Hybrid system: the innovative main components. From the completely redeveloped 3.6-liter flat 6 engine with electric exhaust turbocharger to the electric motor integrated in the PDK and light, powerful traction battery.",

    "This is what only a 911 sounds like: the new flat engine in the rear is impressive with its classic 6 cylinder symphony, an increase in displacement from 3.0 to 3.6 l and further increased power output",

    "The electric motor integrated in the Porsche Doppelkupplung (PDK) offers high torque even at low speeds - and delivers its power directly. In Recuperation mode, it sends energy back to the battery",

    "The electric exhaust turbocharger ensures a faster increase in the performance-determining boost pressure and thus accelerated response behaviour. In Recuperation mode, energy from the exhaust steam is converted into electrical energy - similar to the Porsche 919 Hybrid developed for racing",

    "The light and compact 400-volt traction battery has been optimized for maximum performance. It stores the energy gained through recuperation for new, unforgettable acceleration processes",

    "System power: 398 kW (532 hp). Top track speed: 194 mph. Maximum torque combined: 449 lb-ft and a sprint from 0-62 mph in 3.1 s, it's highly unlikely that you will ever want to get out again"];

let index = 0;

function change() {
    let container = document.getElementById("hybrid_tech_card");
    let image = container.querySelector("img");
    let heading = container.querySelector("h2");
    let para = container.querySelector("p");

    index = (index + 1) % image_list.length;

    image.style.opacity = 0;
    heading.style.opacity = 0;
    para.style.opacity = 0;

    setTimeout(() => {
        image.setAttribute("src", image_list[index]);
        heading.textContent = heading_list[index];
        para.textContent = description_list[index];

        image.style.opacity = 1;
        heading.style.opacity = 1;
        para.style.opacity = 1;
    }, 500)
}