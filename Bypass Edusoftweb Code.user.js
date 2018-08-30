// ==UserScript==
// @name         Bypass Edusoftweb Code
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  bypass edusoftweb
// @author       Tiến Trần
// @include      https://edusoftweb.edu.vn/*
// @downloadURL  https://github.com/TGMaster/Bypass_Edusoftweb/raw/master/Bypass%20Edusoftweb%20Code.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var input = document.getElementById('ctl00_ContentPlaceHolder1_ctl00_txtCaptcha');
    input.value = document.getElementById('ctl00_ContentPlaceHolder1_ctl00_lblCapcha').innerText;
    var btn = document.getElementById('ctl00_ContentPlaceHolder1_ctl00_btnXacNhan');
    btn.click();
})();
