function first() {
  var elem1 = document.querySelector("#elem1");
  var img1 = document.querySelector("#elem1 #img1");
  elem1.addEventListener("mouseenter", function (dets) {
    img1.style.transform = "translate(-50%, -50%) scale(1)";
    img1.style.transition = "transform 0.5s ease-in-out";
  });

  elem1.addEventListener("mousemove", function (dets) {
    img1.style.top = dets.offsetY + "px";
    img1.style.left = dets.offsetX + "px";
  });

  elem1.addEventListener("mouseleave", function () {
    img1.style.transform = "translate(-50%, -50%) scale(0)";
    img1.style.transition = "transform 0.5s ease-in-out";
  });
};
first();


function second() {
  var elem2 = document.querySelector("#elem2");
  var img2 = document.querySelector("#elem2 #img2");
  elem2.addEventListener("mouseenter", function (dets) {
    img2.style.transform = "translate(-50%, -50%) scale(1)";
    img2.style.transition = "transform 0.5s ease-in-out";
  });

  elem2.addEventListener("mousemove", function (dets) {
    img2.style.top = dets.offsetY + "px";
    img2.style.left = dets.offsetX + "px";
  });

  elem2.addEventListener("mouseleave", function () {
    img2.style.transform = "translate(-50%, -50%) scale(0)";
    img2.style.transition = "transform 0.5s ease-in-out";
  });
};
second();


function third() {
  var elem3 = document.querySelector("#elem3");
  var img3 = document.querySelector("#elem3 #img3");
  elem3.addEventListener("mouseenter", function (dets) {
    img3.style.transform = "translate(-50%, -50%) scale(1)";
    img3.style.transition = "transform 0.5s ease-in-out";
  });

  elem3.addEventListener("mousemove", function (dets) {
    img3.style.top = dets.offsetY + "px";
    img3.style.left = dets.offsetX + "px";
  });

  elem3.addEventListener("mouseleave", function () {
    img3.style.transform = "translate(-50%, -50%) scale(0)";
    img3.style.transition = "transform 0.5s ease-in-out";
  });
};
third();


function fourth() {
  var elem4 = document.querySelector("#elem4");
  var img4 = document.querySelector("#elem4 #img4");
  elem4.addEventListener("mouseenter", function (dets) {
    img4.style.transform = "translate(-50%, -50%) scale(1)";
    img4.style.transition = "transform 0.5s ease-in-out";
  });

  elem4.addEventListener("mousemove", function (dets) {
    img4.style.top = dets.offsetY + "px";
    img4.style.left = dets.offsetX + "px";
  });

  elem4.addEventListener("mouseleave", function () {
    img4.style.transform = "translate(-50%, -50%) scale(0)";
    img4.style.transition = "transform 0.5s ease-in-out";
  });
};
fourth();