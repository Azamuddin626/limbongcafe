// JavaScript Document
// Get the content from the URL parameter
var urlParams = new URLSearchParams(window.location.search);
var content = urlParams.get('content');

// Insert the content into the page
document.querySelector('#content').innerHTML = decodeURIComponent(content);