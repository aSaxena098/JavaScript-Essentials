"use strict";
const textarea = document.querySelector(".notetext");
const notearea = document.querySelector(".notearea");
const noteCard = document.querySelector(".noteCard");
const addbtn = document.querySelector(".addbtn");

let noteCardContent = "";
// let noteCount = 1;
function showNote(text) {
  noteCardContent = `<div
    style="margin-top: auto; background-color: #e9ecef;"
    class="slds-card slds-col slds-size_4-of-12 slds-m-horizontal_x-small slds-m-bottom_x-small"
  >
    <div class="slds-p-around_small">
      <span style="font-weight: bold;color:black;">Note 🎫</span>
      <p style="color:black" class="slds-m-bottom_small notearea">
        ${text}
      </p>
      <button class="slds-button slds-button_text-destructive deletebtn">
        Delete Note
      </button>
    </div>
  </div>`;
  noteCard.innerHTML += noteCardContent;
  // noteCount++;
}

addbtn.addEventListener("click", (event) => {
  if(textarea.value.length){
    showNote(textarea.value);
  }
  textarea.value = "";
});

noteCard.addEventListener("click", (event) => {
  if (event.target.classList.contains("deletebtn")) {
    event.target.parentElement.parentElement.remove();
  }
});
