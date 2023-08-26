// NAVBAR
const btNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".navbar");

btNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// skill in counter
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerHTML = 0;

  const updateCounter = () => {
    const targetCount = +counter.getAttribute("data-target");

    const startingCount = Number(counter.innerHTML);

    const incr = targetCount / 30;

    if (startingCount < targetCount) {
      counter.innerHTML = `${Math.round(startingCount + incr)}`;
      setTimeout(updateCounter, 200);
    } else {
      counter.innerHTML = targetCount;
    }
  };

  updateCounter();
});

// sliderBox
$("#slide-box").slick({
  slidesToShow: 2,
  infinite: true,
  slidesToScroll: 1,
  arrows: false /*btn*/,
  autoplay: true,
  autoplaySpeed: 4000,
  dots: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// slider-logo
$(".slider-logo").slick({
  slidesToShow: 5,
  infinite: true,
  slidesToScroll: 1,
  arrows: false /*btn*/,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
});

// protfolio click event

$(document).ready(function () {
  $(".list").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".pet-img").show("1000");
    } else {
      $(".pet-img")
        .not("." + value)
        .hide("1000");
      $(".pet-img")
        .filter("." + value)
        .show("1000");
    }
  });
  $(".list").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});

// Form submit event

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Clear previous error messages
  clearErrors();

  // Validate form fields
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const website = document.getElementById("website").value;
  const message = document.getElementById("message").value;
  const checkbox = document.getElementById("checkbox").checked;

  let isValid = true;

  if (name === "") {
    displayError("name", "Please enter your name");
    isValid = false;
  }

  if (email === "") {
    displayError("email", "Please enter your email");
    isValid = false;
  } else if (!validateEmail(email)) {
    displayError("email", "Please enter a valid email");
    isValid = false;
  }

  if (phone === "") {
    displayError("phone", "Please enter your phone number");
    isValid = false;
  } else if (!validatePhone(phone)) {
    displayError("phone", "Please enter a valid phone number");
    isValid = false;
  }

  if (website === "") {
    displayError("website", "Please enter your website");
    isValid = false;
  } else if (!validateWebsite(website)) {
    displayError("website", "Please enter a valid website URL");
    isValid = false;
  }

  if (message === "") {
    displayError("message", "Please enter your message");
    isValid = false;
  }

  if (!checkbox) {
    displayError("checkbox", "Please agree to the terms and conditions");
    isValid = false;
  }

  if (isValid) {
    // Form is valid, submit it or perform other actions
    alert(`${name} Your Form Submitted Successfully`);
    form.reset(); // Reset the form
  }
});

function displayError(fieldId, errorMessage) {
  const errorElement = document.getElementById(`${fieldId}Error`);
  errorElement.textContent = errorMessage;
}

function clearErrors() {
  const errorElements = document.getElementsByClassName("error");
  for (let i = 0; i < errorElements.length; i++) {
    errorElements[i].textContent = "";
  }
}

function validateEmail(email) {
  // Simple email validation regex pattern
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

function validatePhone(phone) {
  // Simple phone number validation regex pattern
  const pattern = /^\d{10}$/;
  return pattern.test(phone);
}

function validateWebsite(website) {
  // Simple URL validation regex pattern
  const pattern =
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;
  return pattern.test(website);
}
