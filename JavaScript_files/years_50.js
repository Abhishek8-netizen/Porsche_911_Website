headings_array = [
    ['6', '76.4 mm', '102.0 mm', '3745 cc'],
    ['640 hp', '7200 rpm', '590 lb-ft', '170.0 hp/l'],
    ['205 mph', '2.6 s', '10.5 s', '35.8 ft']
];

para_array = [
    ['Number of cylinders', 'Stroke', 'Bore', 'Displacement'],
    ['Max. engine power', 'Max. engine speed', 'Max. engine torque', 'Max. power per liter'],
    ['Top track speed (with summer tires)', '0-60 mph (with Sports Chrono Package)', '1/4 mile (with Sports Chrono Package', 'Turning circle diameter']
];

let global_index = 0;


function opacity_button(index_control, index_limit) {

    let prev_button = document.getElementById('previous_button');
    let next_button = document.getElementById('next_button');

    if (index_control == 1) {
        prev_button.style.opacity = 1;

        if (index_limit == 2) {
            next_button.style.opacity = 0;
        }
    }

    else {
        next_button.style.opacity = 1;

        if (index_limit == 0) {
            prev_button.style.opacity = 0;
        }
    }
}

function change_motor_specs(index) {

    if (index == 1) {
        global_index++;
    }
    else {
        global_index--;
    }

    let container = document.getElementById('motor_spec_card');
    let headings = container.querySelectorAll('h2');
    let para = container.querySelectorAll('p');

    headings.forEach(h2 => h2.style.opacity = 0);
    para.forEach(p => p.style.opacity = 0);

    opacity_button(index, global_index);

    setTimeout(() => {
        for (i = 0; i < 4; i++) {
            headings[i].textContent = headings_array[global_index][i];
            para[i].textContent = para_array[global_index][i];
        }

        headings.forEach(h2 => h2.style.opacity = 1);
        para.forEach(p => p.style.opacity = 1);
    }, 400)
}

/****************************************************************************************************************************************************************************************************************************/

let image = document.querySelectorAll('.gallery');

function reduce_image_size(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting == true) {
            entry.target.classList.add('shrink');
        }
        else {
            entry.target.classList.remove('shrink');
        }
    })
}

let image_observer = new IntersectionObserver(reduce_image_size, { threshold: 0.5 });
image.forEach(img => image_observer.observe(img));

/****************************************************************************************************************************************************************************************************************************/

let section = document.getElementById('highlights');
let container = section.querySelectorAll('.highlights_card');

function show_highlights_card(entries) {

    entries.forEach(entry => {
        if (entry.isIntersecting == true) {
            entry.target.classList.add('show');
        }
    })
}

let highlights_card_observer = new IntersectionObserver(show_highlights_card, { threshold: 0.5 });
container.forEach(div => highlights_card_observer.observe(div));
