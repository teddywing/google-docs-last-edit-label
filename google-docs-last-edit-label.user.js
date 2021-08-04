// ==UserScript==
// @name Google Docs Last Edit Label
// @description Show a tooltip when hovering over the last edit time label
// @namespace com.teddywing
// @version 0.0.1
// @run-at document-idle
// @match https://docs.google.com/*
// ==/UserScript==

// Copyright (c) 2021  Teddy Wing
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program. If not, see <https://www.gnu.org/licenses/>.


var last_edit_label = document.querySelector('.docs-title-save-label-text');
last_edit_label.setAttribute('title', last_edit_label.textContent);
