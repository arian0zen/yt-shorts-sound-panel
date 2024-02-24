console.log("Content script loaded"); // Check if content script is loaded

const newElement = document.createElement("div");
newElement.textContent = "This is a new element!";
newElement.style.cssText =
  "background-color: red; color: white; pointer-events: all; padding: 10px; border-radius: 5px; cursor: pointer;";

console.log("New element created:", newElement); // Check if the new element is created

// add onClick event to the new element

newElement.onclick = function () {
  console.log("New element clicked!");
  let video = document.querySelector(".video-stream");
  video.volume = 0.001;
};

// Function to find the insertion point and append the new element
function findAndInsert() {
  console.log("Finding insertion point..."); // Check if the function is executed
  const insertionPoint = document.querySelector("ytd-shorts-player-controls");

  //   const insertionPoint = document.querySelector(
  //     "div.player-controls.style-scope.ytd-reel-video-renderer"
  //   );

  console.log("Insertion point:", insertionPoint); // Check if insertion point is found

  if (insertionPoint) {
    insertionPoint.appendChild(newElement);
  } else {
    console.log("Insertion point not found");
  }
}

// Delay execution by 1000 milliseconds (1 second)
setTimeout(findAndInsert, 3000);
