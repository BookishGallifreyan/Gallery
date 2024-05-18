let minsterpics = [
  {
    url: "https://images.unsplash.com/photo-1648229010023-137a95b87903?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Lincoln Cathedral and the surrounding city under a gloomy, grey sky",
  },
  {
    url: "https://images.unsplash.com/photo-1586432680458-bcbfcc1e4bd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8eW9yayUyMG1pbnN0ZXJ8ZW58MHx8MHx8fDI%3D",
    alt: "York Minster in the setting sun, the minster in the distance and the city wall in the foreground off to the left",
  },
  {
    url: "https://images.unsplash.com/photo-1615140533833-f9cd154f4381?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FudGVyYnVyeSUyMGNhdGhlZHJhbHxlbnwwfHwwfHx8Mg%3D%3D",
    alt: "The front of Canterbury Cathedral against a bright blue sky",
  },
  {
    url: "https://images.unsplash.com/photo-1699465923872-7694ba72ce58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGR1cmhhbSUyMGNhdGhlZHJhbHxlbnwwfHwwfHx8Mg%3D%3D",
    alt: "Durham Cathedral against a cloudy sunset with some yellowing trees in the foreground",
  },
  {
    url: "https://images.unsplash.com/photo-1455811344761-eb6d034e670d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "An internal shot of three stain-glass windows in Norwhich Cathedral with the sun casting shadows against the walls",
  },
];

const imagelist = document.getElementById("imagelist");
const showpic = document.getElementById("show-pic");

let currentPicBe = 0;

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const aria = document.getElementById("announcer");

prevBtn.addEventListener("click", function () {
  selectPicBasedOnIndex(-1);
});

nextBtn.addEventListener("click", function () {
  selectPicBasedOnIndex(1);
});

function selectPicBasedOnIndex(newIndexValue) {
  currentPicBe = currentPicBe + newIndexValue;

  if (currentPicBe > minsterpics.length - 1) {
    currentPicBe = 0;
  }
  if (currentPicBe < 0) {
    currentPicBe = minsterpics.length - 1;
  }
  createDisplayImg(minsterpics[currentPicBe]);
}

function createPicList(minsterpics) {
  for (let i = 0; i < minsterpics.length; i++) {
    let img = document.createElement("img");

    img.src = minsterpics[i].url;
    img.alt = minsterpics[i].alt;

    img.setAttribute("tabindex", "0");

    img.classList.add("thumb-img");

    img.addEventListener("click", function () {
      console.log(minsterpics[i]);
      currentPic = i;
      console.log(currentPicBe);
      createDisplayImg(minsterpics[i]);
    });

    imagelist.appendChild(img);
  }
}

createPicList(minsterpics);

function createDisplayImg(PicObj) {
  const aria = document.getElementById("aria");
  aria.textContent = PicObj.alt;
  showpic.innerHTML = "";
  let imgTag = document.createElement("img");
  imgTag.classList.add("main-pic");
  imgTag.src = PicObj.url;
  imgTag.alt = PicObj.alt;
  showpic.appendChild(imgTag);
}
