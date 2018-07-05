// ==UserScript==
// @name         Bypass Edusoftweb Code
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  bypass edusoftweb
// @author       Tiến Trần
// @include      https://hcmiu.edu.vn/edusoftweb/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var input = document.getElementById('ctl00_ContentPlaceHolder1_ctl00_txtCaptcha');
    input.value = document.getElementById('ctl00_ContentPlaceHolder1_ctl00_lblCapcha').innerText;
    var btn = document.getElementById('ctl00_ContentPlaceHolder1_ctl00_btnXacNhan');
    btn.click();
})();