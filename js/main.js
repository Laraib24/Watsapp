
/*
function firstThread() {
  document.getElementById("lefSide").style.visibility = "hidden";
  document.getElementById("inScreen").style.visibility = "hidden";
  document.getElementById("threadOne").style.visibility = "visible";
  document.getElementById("threadTwo").style.visibility = "hidden";
  document.getElementById("threadThree").style.visibility = "hidden";
  document.getElementById("threadFour").style.visibility = "hidden";
  document.getElementById("threadFifth").style.visibility = "hidden";
  document.getElementById("threadSix").style.visibility = "hidden";
  };
function secondThread() {
    document.getElementById("inScreen").style.visibility = "hidden";
    document.getElementById("threadOne").style.visibility = "hidden";
    document.getElementById("threadTwo").style.visibility = "visible";
    document.getElementById("threadThree").style.visibility = "hidden";
    document.getElementById("threadFour").style.visibility = "hidden";
    document.getElementById("threadFifth").style.visibility = "hidden";
    document.getElementById("threadSix").style.visibility = "hidden";
    };
function thirdThread() {
      document.getElementById("inScreen").style.visibility = "hidden";
      document.getElementById("threadOne").style.visibility = "hidden";
      document.getElementById("threadTwo").style.visibility = "hidden";
      document.getElementById("threadThree").style.visibility = "visible";
      document.getElementById("threadFour").style.visibility = "hidden";
      document.getElementById("threadFifth").style.visibility = "hidden";
      document.getElementById("threadSix").style.visibility = "hidden";
      };
function fourThread() {
        document.getElementById("inScreen").style.visibility = "hidden";
        document.getElementById("threadOne").style.visibility = "hidden";
        document.getElementById("threadTwo").style.visibility = "hidden";
        document.getElementById("threadThree").style.visibility = "hidden";
        document.getElementById("threadFour").style.visibility = "visible";
        document.getElementById("threadFifth").style.visibility = "hidden";
        document.getElementById("threadSix").style.visibility = "hidden";
        };
function fifthThread() {
          document.getElementById("inScreen").style.visibility = "hidden";
          document.getElementById("threadOne").style.visibility = "hidden";
          document.getElementById("threadTwo").style.visibility = "hidden";
          document.getElementById("threadThree").style.visibility = "hidden";
          document.getElementById("threadFour").style.visibility = "hidden";
          document.getElementById("threadFifth").style.visibility = "visible";
          document.getElementById("threadSix").style.visibility = "hidden";
          };
function sixThread() {
            document.getElementById("inScreen").style.visibility = "hidden";
            document.getElementById("threadOne").style.visibility = "hidden";
            document.getElementById("threadTwo").style.visibility = "hidden";
            document.getElementById("threadThree").style.visibility = "hidden";
            document.getElementById("threadFour").style.visibility = "hidden";
            document.getElementById("threadFifth").style.visibility = "hidden";
            document.getElementById("threadSix").style.visibility = "visible";
            };
*/


const colors = ["green","red","rgba(133,122,200)","#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".colors");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
});
function getRandomNumber(){
  return Math.floor(Math.random()* colors.length);
};
