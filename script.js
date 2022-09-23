"use strict";

const eyesContainer = document.querySelector(".eyes");
const eyes = document.querySelectorAll(".eye");
const eyeWhite = document.querySelector(".baseWhite");
const eyeBrown = document.querySelector(".baseBrown");
const eyeBlack = document.querySelector(".baseBlack");
const anchor = eyeWhite.getBoundingClientRect();
const anchorX = anchor.left + anchor.width / 2;
const anchorY = anchor.top + anchor.height / 2;
const lid1 = document.querySelector(".lid1");
const lid2 = document.querySelector(".lid2");
console.log(lid1, lid2);
console.log(lid1.translate);
const angle = function (cx, cy, ex, ey) {
	const dy = ey - cy;
	const dx = ex - cx;
	const rad = Math.atan2(dy, dx);
	const deg = (rad * 180) / Math.PI;
	return deg;
};
const eye = function (e) {
	const mouseX = e.clientX;
	const mouseY = e.clientY;
	const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
	// console.log(angleEye);
	eyes.forEach((eye) => {
		// const angleEye =
		// 	anchorX + 100 >= mouseX &&
		// 	anchorX - 100 <= mouseX &&
		// 	anchorY + 100 >= mouseY &&
		// 	anchorY - 100 <= mouseY
		// 		? `rotate(${angleDeg - 90}deg)`
		// 		: `rotate(${90 + angleDeg}deg)`;
		eye.style.transform = `rotate(${90 + angleDeg}deg)`;
		eyeBrown.style.filter = `hue-rotate(${angleDeg}deg)`;
	});
};
const blink = () => {
	lid1.classList.add("lid1-animate", "transition");
	lid2.classList.add("lid2-animate", "transition");
	setTimeout(() => {
		lid1.classList.remove("lid1-animate");
		lid2.classList.remove("lid2-animate");
	}, 500);
};
setInterval(blink, 12000);
document.addEventListener("mousemove", eye);
