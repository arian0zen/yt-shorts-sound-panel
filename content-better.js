console.log("YT Shorts volume slider extension is running 🚀");

// Function to create the volume slider
function createVolumeSlider(whereToInsert) {
  const volumeSliderContainer = document.createElement("div");
  volumeSliderContainer.id = "yt-shorts-volume-slider-container";
  volumeSliderContainer.style.cssText = `
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 9999;
    pointer-events: all;
    background-color: #ffffff;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  `;

  const volumeSlider = document.createElement("input");
  volumeSlider.type = "range";
  volumeSlider.min = "0";
  volumeSlider.max = "1";
  volumeSlider.step = "0.01";
  volumeSlider.value = "1";
  volumeSlider.style.width = "80px";

  volumeSlider.addEventListener("input", function () {
    const video = document.querySelector(".video-stream");
    if (video) {
      video.volume = parseFloat(this.value);
    }
  });

  volumeSliderContainer.appendChild(volumeSlider);
  document.body.appendChild(volumeSliderContainer);
  whereToInsert.appendChild(volumeSliderContainer);
}

// Function to find and insert the volume slider
function findAndInsert() {
  const insertionPoint = document.querySelector("ytd-shorts-player-controls");
  if (insertionPoint) {
    console.log("Insertion point found, creating volume slider...");
    createVolumeSlider(insertionPoint);
  } else {
    console.log("Insertion point not found, retrying in 1 second...");
    setTimeout(findAndInsert, 1000);
  }
}

findAndInsert();
