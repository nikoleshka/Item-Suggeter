const displayResult = (userName, userGender) => {
  let img1URL = "";
  let img2URL = "";
  let img3URL = "";
  const isFemale = userGender && userGender === "female";
  const isMale = userGender && userGender === "male";
  document.getElementById(
    "user-info"
  ).textContent = `Hi ${userName}! This is our suggestion based on your gender:`;

  if (isFemale) {
    img1URL = "assets/female1.jpg";
    img2URL = "assets/female2.webp";
    img3URL = "assets/female3.jpg";
  } else if (isMale) {
    img1URL = "assets/male1.jpg";
    img2URL = "assets/male2.jpg";
    img3URL = "assets/male3.webp";
  } else {
    img1URL = "assets/nogender.avif";
    img2URL = "assets/nogender2.webp";
    img3URL = "assets/nogender3.avif";
  }

  document.getElementById("img-1").src = img1URL;
  document.getElementById("img-2").src = img2URL;
  document.getElementById("img-3").src = img3URL;

  document.getElementById("placeholder-container").classList.add("d-none");
  document.getElementById("info-container").classList.remove("d-none");
};

const getUserInfo = () => {
  const name = prompt("Enter Your Name");
  const gender = prompt("Enter Your gender(Male or Female)");

  document.getElementById("button-container").classList.add("d-none");

  document.getElementById("placeholder-container").classList.remove("d-none");
  setTimeout(() => {
    displayResult(name, gender);
  }, 2000);
};
