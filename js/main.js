const threads = document.getElementById("threads");

<<<<<<< HEAD
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
=======
for (let chat of CHAT_DATA) {
  const html =
    `
  <div class="thread1" id="${chat.id}" onClick="openChat(this.id)">
  <button>
    <div class="thread-img1">
      <img src="images/blankprofile.png" alt="">
    </div>
    <div class="title1"> <h3>${chat.id}</h3>
      <p>${chat.recent}</p>
    </div>
  </button>
  </div>
  `
  threads.innerHTML += html

}

// function openChat(id) {

// }

const openChat = (id) => {

  const historyDiv = document.getElementById("chat_history")
  historyDiv.innerHTML = ""

  const chat = CHAT_DATA.find(e => e.id === id)
  const placeholder = document.getElementById("inScreen");
  placeholder.style.visibility = "hidden";
  const messagesDiv = document.getElementById("threadOne");
  messagesDiv.style.visibility = "inherit";

  const chat_title = document.getElementById("chat_title")
  chat_title.innerHTML = `<h3>${chat.id}</h3>`


  

  for (let message of chat.messages) {
    let html = ""

    if (message.from === "you") {
      html =
        `
    <div class="outgoing_msg">
      <div class="sent_msg">
        <p>${message.message}</p>
        <span class="time_date"> 11:01 AM    |    June 9</span> </div>
    </div>
    `
    } else {
      html =
        `
    <div class="incoming_msg">
      <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
        <div class="received_msg">
          <div class="received_withd_msg">
            <p>${message.message}</p>
            <span class="time_date"> 11:01 AM    |    June 9</span></div>
          </div>
    </div>
    `
    }

    historyDiv.innerHTML += html

  }

}
>>>>>>> cc52f2ffa2f196f15fda7d7c623795d146735bdf
