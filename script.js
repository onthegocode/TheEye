"use strict";
const eyes = document.querySelectorAll(".eye");
const eyeWhite = document.querySelector(".baseWhite");
const eyeBrown = document.querySelector(".baseBrown");
const eyeBlack = document.querySelector(".baseBlack");
const anchor = eyeWhite.getBoundingClientRect();
const anchorX = anchor.left + anchor.width / 2;
const anchorY = anchor.top + anchor.height / 2;

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
	eyes.forEach(
		(eye) =>
			(eye.style.transform = `rotate(${
				(anchorX + 100 >= mouseX &&
				anchorX - 100 <= mouseX &&
				anchorY + 100 >= mouseY &&
				anchorY - 100 <= mouseY
					? -90
					: 90) + angleDeg
			}deg)`)
	);
};

document.addEventListener("mousemove", eye);
