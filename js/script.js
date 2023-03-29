var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

async function topSectionData() {
  const topSectionRes = await fetch("http://127.0.0.1:5000/topSection").then(
    (data) => {
      return data.json();
    }
  );
  console.log(topSectionRes);
  document.querySelector(
    ".top-section"
  ).style.backgroundImage = `url(${topSectionRes[0].imageURL})`;
  document.querySelector(
    ".top-section-heading"
  ).textContent = `${topSectionRes[0].heading}`;
  document.querySelector(
    ".top-section-description"
  ).textContent = `${topSectionRes[0].description}`;
}

topSectionData();

async function cardData() {
  const cardRes = await fetch("http://127.0.0.1:5000/card").then((data) => {
    return data.json();
  });
  console.log(cardRes);

  for (let i = 0; i < cardRes.length; i++) {
    console.log(cardRes.length);
    document
      .querySelectorAll(".services-image")
      [i].setAttribute("src", `${cardRes[i].imageURL}`);
    document.querySelectorAll(".services-sub-heading")[
      i
    ].textContent = `${cardRes[i].subHeading}`;
    document.querySelectorAll(".services-description")[
      i
    ].textContent = `${cardRes[i].description}`;
    document.querySelectorAll(".services-heading")[
      i
    ].textContent = `${cardRes[i].heading}`;
  }
}

cardData();

async function swipperData() {
  const swipperRes = await fetch("http://127.0.0.1:5000/swipper").then(
    (data) => {
      return data.json();
    }
  );
  console.log(swipperRes);

  for (let i = 0; i < swipperRes.length; i++) {
    console.log(swipperRes.length);
    console.log(swipperRes[i].imageURL);
    document
      .querySelectorAll(".swiper-image")
      [i].setAttribute("src", `${swipperRes[i].imageURL}`);

    // document.querySelector(
    //   ".swiper-heading"
    // ).textContent = `${swipperRes[i].heading}`;

    // if (i=0){
    //     document.querySelector(
    //   ".swiper-heading"
    // ).textContent = `${swipperRes[i].heading}`;
    // }
  }

  //   document.querySelector(
  //     ".swiper-sub-heading"
  //   ).textContent = `${swipperRes[0].subHeading}`;
  //   document.querySelector(
  //     ".swiper-description"
  //   ).textContent = `${swipperRes[0].description}`;
}

swipperData();
