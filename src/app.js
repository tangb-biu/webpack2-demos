'use strict';

import moment from "moment";
import style from "./app.css";
import jpg from "./facered.jpg";
import btm from './m.html';

setInterval(() => {
	document.querySelector('.time').innerHTML = moment().format('YYYY-MM-DD hh:mm:ss A');
}, 1000)

var img = document.createElement('img');
img.src = jpg;
document.body.appendChild(img);
document.querySelector('.test').innerHTML = btm;