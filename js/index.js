$(document).ready(() => {
  let intervalArray = [];

  function createNav() {
    let navBarUl = $(".nav-bar ul");
    let navContents = ["About", "Education", "Experience", "Contact"];
    navContents.forEach((navContent) => {
      navBarUl.append(`<li>${navContent}</li>`);
    });
  }

  function removeAndAddActive(navText) {
    let navBarUlLi = $(".nav-bar ul li");
    navBarUlLi.each(function () {
      if ($(this).attr("class") === "active") {
        $(this).removeClass("active");
      }
      if ($(this).text() === navText) {
        $(this).addClass("active");
      }
    });
  }

  function showAboutDescription() {
    let aboutNavText = "About";
    let aboutPara =
      "A tech enthusiast seeking a platform to showcase innovation and passion towards system development and have a principle that nothing can go wrong with hard work, kindness and positivity.";
    let descriptionContainer = $(".description-container");
    descriptionContainer.empty();
    descriptionContainer.append(`<p class="about-para">${aboutPara}</p>`);

    removeAndAddActive(aboutNavText);
  }

  function showEducationDescription() {
    let eduNavText = "Education";
    let eduPara =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    let descriptionContainer = $(".description-container");
    descriptionContainer.empty();
    descriptionContainer.append(`<div class="about-para">Education</div>`);
    descriptionContainer.append(`<p class="about-para">${eduPara}</p>`);

    removeAndAddActive(eduNavText);
  }

  function showExperienceDescription() {
    let expNavText = "Experience";

    let exPara =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tincidunt vitae semper quis lectus nulla. At tempor commodo ullamcorper a lacus. Enim eu turpis egestas pretium. Purus non enim praesent elementum facilisis leo vel fringilla est.";
    let descriptionContainer = $(".description-container");
    descriptionContainer.empty();
    descriptionContainer.append(`<div class="about-para">Experience</div>`);
    descriptionContainer.append(`<p class="about-para">${exPara}</p>`);
    removeAndAddActive(expNavText);
  }

  function showContactDescription() {
    let conNavText = "Contact";

    let descriptionContainer = $(".description-container");
    descriptionContainer.empty();
    descriptionContainer.append(`<div class="about-para">Contacts</div>`);
    descriptionContainer.append(`<div class="contacts-wrapper"></div>`);
    let contactsWrapper = $(".contacts-wrapper");
    contactsWrapper.append(`<div class="about-para">LinkenIn</div>`);
    contactsWrapper.append(`<div class="about-para">Email</div>`);
    contactsWrapper.append(`<div class="about-para">Phone</div>`);
    contactsWrapper.append(`<div class="about-para">Github</div>`);

    removeAndAddActive(conNavText);
  }

  function automateSections() {
    intervalArray[0] = setInterval(showEducationDescription, 2000);
    intervalArray[1] = setInterval(showExperienceDescription, 4000);
    intervalArray[2] = setInterval(showContactDescription, 6000);
    intervalArray[3] = setInterval(showAboutDescription, 8000);
  }

  function clearAllIntervals() {
    intervalArray.forEach((interval) => {
      clearInterval(interval);
    });
  }

  createNav();
  showAboutDescription();
  automateSections();

  $(".nav-bar ul li").click(function () {
    clearAllIntervals();
    switch ($(this).text()) {
      case "About":
        showAboutDescription();
        break;

      case "Education":
        showEducationDescription();
        break;

      case "Experience":
        showExperienceDescription();
        break;

      case "Contact":
        showContactDescription();
        break;

      default:
        showAboutDescription();
    }
  });
});
