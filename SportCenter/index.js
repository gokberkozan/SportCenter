function showContent(contentId) {

    // Hide all content divs within the 'organic' section
    document.querySelectorAll('.organic > div').forEach(div => {
        div.style.display = 'none';
    });

    // Display the selected content based on the contentId
    document.getElementById(contentId + 'Content').style.display = 'block';

    // Hide all images within the 'image-content' section
    document.querySelectorAll('.image-content img').forEach(img => {
        img.style.display = 'none';
    });

    // Determine which image to display based on the contentId
    var imageId = '';
    switch (contentId) {
        case 'yoga':
            imageId = 'yogaImage';
            break;
        case 'group':
            imageId = 'groupImage';
            break;
        case 'solo':
            imageId = 'soloImage';
            break;
        case 'stretching':
            imageId = 'stretchingImage';
            break;
        default:
            break;
    }

    // If an imageId is selected, display the corresponding image
    if (imageId !== '') {
        document.getElementById(imageId).style.display = 'block';
    }
}

// Select the navbar background element
var navbarbg = document.querySelector('.navbarbg');

window.addEventListener('scroll', function() {

    // Change the navbar background color when scrolling down
    if (window.scrollY > 0) {
        navbarbg.style.backgroundColor = '#355592';
    } else {

        // Reset the background color to transparent when at the top
        navbarbg.style.backgroundColor = 'transparent';
    }
});

function calculateBMI() {

    // Get height and weight values from the input fields
    const height = parseFloat(document.querySelector("#height").value);
    const weight = parseFloat(document.querySelector("#weight").value);

    // Calculate BMI
    const bmi = weight / ((height / 100) * (height / 100));

    const bmiValueElement = document.querySelector("#bmiValue");
    bmiValueElement.textContent = "Your BMI: " + bmi.toFixed(2);

    const screenWidth = window.innerWidth;
    const divdirAfter = document.querySelector(".divdir2");

    // Adjust the position of the div based on BMI and screen width
    if (screenWidth > 576) {
        if (bmi < 18.5) {
            divdirAfter.style.left = "93px";
        } else if (bmi >= 18.5 && bmi < 25) {
            divdirAfter.style.left = "190px";
        } else if (bmi >= 25 && bmi < 30) {
            divdirAfter.style.left = "290px";
        } else if (bmi >= 30 && bmi < 35) {
            divdirAfter.style.left = "390px";
        } else {
            divdirAfter.style.left = "490px";
        }
    } else {
        if (bmi < 18.5) {
            divdirAfter.style.left = "60px";
        } else if (bmi >= 18.5 && bmi < 25) {
            divdirAfter.style.left = "125px";
        } else if (bmi >= 25 && bmi < 30) {
            divdirAfter.style.left = "190px";
        } else if (bmi >= 30 && bmi < 35) {
            divdirAfter.style.left = "255px";
        } else {
            divdirAfter.style.left = "320px";
        }
    }

    // Clear the height and weight input fields
    document.querySelector("#height").value = "";
    document.querySelector("#weight").value = "";

    // If height or weight is not a number, reset the div position
    if (isNaN(height) || isNaN(weight)) {
        divdirAfter.style.left = "";
    }
}

function toggleMenu() {

    // Toggle the active class on the navbar menu and menu toggle button
    var navbarMenu = document.getElementById("navbarUl");
    var navbarMenuToggle = document.querySelector(".navbar-menu-toggle");
    navbarMenu.classList.toggle("active");
    navbarMenuToggle.classList.toggle("active");
}