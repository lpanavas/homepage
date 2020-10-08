// may be useful to use let instead of var. var has unique scoping rules that can lead to bugs if not careful
var leftIndex = 1;
var rightIndex = 2;

function flipForward() {
  var leftPage = document.getElementById("page" + String(leftIndex)); // creative use of casting to get the pages!
  leftPage.style.visibility = "hidden";
  if (leftIndex <= 11) {
    leftIndex = leftIndex + 2;
  }
  pageNumberLeft = "page" + String(leftIndex);

  var newLeftPage = document.getElementById(pageNumberLeft);

  newLeftPage.style.visibility = "visible";

  //RightPage

  var rightPage = document.getElementById("page" + String(rightIndex));
  rightPage.style.visibility = "hidden";
  if (rightIndex <= 12) {
    rightIndex = rightIndex + 2;
  }
  pageNumberRight = "page" + String(rightIndex);

  var newRightPage = document.getElementById(pageNumberRight);

  newRightPage.style.visibility = "visible";
  console.log("forward");
}

function flipBackward() {
  var leftPage = document.getElementById("page" + String(leftIndex));
  leftPage.style.visibility = "hidden";
  if (leftIndex >= 3) {
    leftIndex = leftIndex - 2;
  }
  pageNumberLeft = "page" + String(leftIndex);

  var newLeftPage = document.getElementById(pageNumberLeft);

  newLeftPage.style.visibility = "visible";

  //RightPage

  var rightPage = document.getElementById("page" + String(rightIndex));
  rightPage.style.visibility = "hidden";
  if (rightIndex >= 4) {
    rightIndex = rightIndex - 2;
  }
  pageNumberRight = "page" + String(rightIndex);

  var newRightPage = document.getElementById(pageNumberRight);

  newRightPage.style.visibility = "visible";
}
