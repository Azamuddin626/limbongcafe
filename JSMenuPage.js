// Get the tab menu items
var tabMenuItems = document.querySelectorAll('.tab-menu li');

// Get the tab content items
var tabContentItems = document.querySelectorAll('.tab-content');
var tabContentsItems = document.querySelectorAll('.tab-menu li.active');

// Add a click event listener to each tab menu item
tabMenuItems.forEach(function (item) {
  item.addEventListener('click', function () {
    // Remove the 'active' class from all tab menu items
    tabMenuItems.forEach(function (item) {
      item.classList.remove('active');
    });
    // Remove the 'active' class from all tab menu items
    tabContentsItems.forEach(function (item) {
      item.classList.remove('active');
    });

    // Add the 'active' class to the clicked tab menu item
    item.classList.add('active');

    // Get the value of the "data-tab" attribute of the clicked tab menu item
    var tab = item.getAttribute('data-tab');

    // Hide all tab content items
    tabContentItems.forEach(function (item) {
      item.classList.remove('active');
    });

    // Show the corresponding tab content item
    document.querySelector('#' + tab).classList.add('active');
  });
});


/*Click to direct other page section */
// Get the box elements
var boxElements = document.querySelectorAll('.tab-content .box');

// Add a click event listener to each box element
boxElements.forEach(function (box) {
  box.addEventListener('click', function () {
    // Get the content of the clicked item
    var content = box.innerHTML;
    // Encode the content as a URL parameter
    var encodedContent = encodeURIComponent(content);
    // Redirect to the "Add to Cart" page and include the content as a URL parameter
    window.location.href = 'AddtoCart.html?content=' + encodedContent;
  });
});

// Get the search form
var searchForm = document.querySelector('.search-form');

// Add a submit event listener to the search form
searchForm.addEventListener('submit', function (event) {
  // Prevent the default behavior of the form submission
  event.preventDefault();

  // Perform the search
  performSearch();
});

function performSearch(tab) {
  // Get the search input
  var searchInput = document.querySelector('.search-form input[type="text"]').value;

  // Get all menu items
  var menuItems = document.querySelectorAll('.tab-content .box');

  // Loop through each menu item
  menuItems.forEach(function (item) {
    // Get the class list of the menu item
    var classList = item.classList;

    // Check if the search input is found in the class list
    if (classList.contains(searchInput)) {
      // If found, show the menu item
      item.style.display = 'block';
      // Add the 'active' class to the menu item
      document.querySelector('#' + tab).classList.add('active');
    }
  });
}

