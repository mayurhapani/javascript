let img_arr = [
  { img: `<img src="img/1.JPG" alt="" />` },
  { img: `<img src="img/2.JPG" alt="" />` },
  { img: `<img src="img/3.JPG" alt="" />` },
  { img: `<img src="img/4.JPG" alt="" />` },
  { img: `<img src="img/5.JPG" alt="" />` },
  { img: `<img src="img/6.JPG" alt="" />` },
  { img: `<img src="img/7.JPG" alt="" />` },
  { img: `<img src="img/8.JPG" alt="" />` },
];

let live_img;
let i = 0;
live_img = img_arr[i].img;

document.querySelector("#slider").innerHTML = live_img;

function c_next() {
  if (i < img_arr.length - 1) {
    ++i;
    live_img = img_arr[i].img;
    // console.log(i);
    document.querySelector("#slider").innerHTML = live_img;

    // document.querySelector("#slider").style.transition = `all ${1}s linear`;
    // document.querySelector("#slider> img").style.transition = `all ${1}s linear`;

    // setTimeout(() => {
    // }, 500);
  }
}

function c_priv() {
  if (i > 0) {
    --i;
    live_img = img_arr[i].img;
    // console.log(i);
    document.querySelector("#slider").innerHTML = live_img;
  }
}
// console.log(c_next());
// console.log(c_priv());
