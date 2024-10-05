function setSpeed(speed) {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.scripting.executeScript({
			target: { tabId: tabs[0].id },
			func: function (speed) {
				const mediaElements = document.querySelectorAll("video, audio")
				mediaElements.forEach((media) => {
					media.playbackRate = speed
				})
			},
			args: [speed],
		})
	})
}

document.getElementById("speed1").addEventListener("click", function () {
	setSpeed(1)
})

document.getElementById("speed1_25").addEventListener("click", function () {
	setSpeed(1.25)
})

document.getElementById("speed1_5").addEventListener("click", function () {
	setSpeed(1.5)
})

document.getElementById("speed1_75").addEventListener("click", function () {
	setSpeed(1.75)
})

document.getElementById("speed2").addEventListener("click", function () {
	setSpeed(2)
})

document
	.getElementById("setCustomSpeed")
	.addEventListener("click", function () {
		const customSpeed = parseFloat(document.getElementById("customSpeed").value)
		if (customSpeed && customSpeed > 0) {
			setSpeed(customSpeed)
		} else {
			alert("Please enter a valid number greater than 0.")
		}
	})
