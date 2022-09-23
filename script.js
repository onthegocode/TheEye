"use strict";
const eyes = document.querySelectorAll(".eye");
const main = document.querySelector(".main");
const eyeWhite = document.querySelector(".baseWhite");
const eyeBrown = document.querySelector(".baseBrown");
const lid1 = document.querySelector(".lid1");
const lid2 = document.querySelector(".lid2");
const anchor = eyeWhite.getBoundingClientRect();
const anchorX = anchor.left + anchor.width / 2;
const anchorY = anchor.top + anchor.height / 2;
const angle = (cx, cy, ex, ey) =>
	(Math.atan2(ey - cy, ex - cx) * 180) / Math.PI;

const eye = (e) => {
	const angleDeg = angle(e.clientX, e.clientY, anchorX, anchorY);
	eyes.forEach((eye) => {
		eye.style.transform = `rotate(${90 + angleDeg}deg)`;
		eyeBrown.style.filter = `hue-rotate(${angleDeg}deg)`;
	});
};

const blink = () => {
	lid1.classList.add("lid-close", "transition");
	lid2.classList.add("lid-close", "transition");
	setTimeout(() => {
		lid1.classList.remove("lid-close");
		lid2.classList.remove("lid-close");
	}, 500);
};

setInterval(blink, 10000);
document.addEventListener("mousemove", eye);

main.addEventListener("click", (e) => {
	setInterval(() => {
		document.removeEventListener("mousemove", eye);
		let randX = Math.random() * 800 + 1;
		let randY = Math.random() * 900 + 1;
		eyes.forEach((eye) => {
			const angleDeg = angle(randX, randY, anchorX, anchorY);
			eye.style.transition = "all 1s ease";
			eye.style.transform = `rotate(${90 + angleDeg}deg)`;
			eyeBrown.style.filter = `hue-rotate(${Math.random() * 200 + 1}deg)`;
		});
	}, 800);
});

if (navigator.userAgentData.mobile) {
	freeeye();
}
