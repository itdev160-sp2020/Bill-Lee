

var title = '3 Visual Code Extensions For Front End Developers'; //Title
var author = 'By: Bill Lee'; //Author

var titleEl = document.getElementById("title");
titleEl.textContent = title;

var authorEl = document.getElementById("author");
authorEl.textContent = author;


/**
 * Wrap everything in an IIFE (Immediately Invoked Function Expression) to keep
 * our variables constrained to the scope of this function and out of the global scope.
 */
(function() {

  /******************************************************
  * Package data and constructor objects
  *******************************************************/

  // Package data array (simulated data source, such as JSON or database recordset)
  var data = [
    {
      name: 'Trailing  Spaces',
      description: 'Highlight trailing spaces and delete them in a flash!',
      author: 'Shardul Mahadik',
      url: 'https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spacest',
      downloads: 343232,
      stars: '5.0/5.0',
      price: 'Free',
      selector: 'p1'
    },
    {
      name: 'HTML Snippets',
      description: 'This extension adds rich language support for the HTML Markup to VS Code.',
      author: 'Mohamed Abusaid',
      url: 'https://marketplace.visualstudio.com/items?itemName=abusaidm.html-snippets',
      downloads: 3211777,
      stars: '4.5/5.0',
      price: 'Free',
      selector: 'p2'
    },
    {
      name: 'Shopify Liquid Template Snippets',
      description: 'This extension for Visual Studio Code adds snippets for Shopify Liquid Template.',
      author: 'Franky Lau',
      url: 'https://marketplace.visualstudio.com/items?itemName=killalau.vscode-liquid-snippets',
      downloads:  29529,
      stars: '5.0/5.0',
      price: 'Free',
      selector: 'p3'
    }
  ];

  // (Atom) Package constructor function
  function Package(data) {
    this.name = data.name;
    this.description = data.description;
    this.author = data.author;
    this.url = data.url;
    this.downloads = data.downloads;
    this.stars = data.stars;
    this.selector = data.selector; // *** REMEMBER TO ADD THIS IF YOU ADDED IT TO THE DATA OBJECTS ** //

    this.getFormattedDownloads = function () {
      return this.downloads.toLocaleString();
    };

    this.getFormattedStars = function () {
      return this.stars.toLocaleString();
    };
  }

  /******************************************************
   * Utility functions
   ******************************************************/

  // Returns today's date, formatted
  var getTodaysDate = function() {
    var today = new Date();
    return today.toDateString();
  };

  // Returns DOM element by id.
  // We're just wrapping document.getElementById
  // in a shorthand function. If this seems confusing,
  // then just replace getEl with document.getElementById
  // in the writePackageInfo function.
  var getEl = function (id) {
    return document.getElementById(id);
  }

  /**
   * Write's the package object's data to the appropriate
   * DOM elements utilizing the package selector property.
   * @param  {Package} package  Package object
   * @return {void}
   */
  var writePackageInfo = function(package) {
    // Get reference to DOM elements
    var selector = package.selector,
      nameEl = getEl(selector + '-name'),
      descEl = getEl(selector + '-description'),
      authEl = getEl(selector + '-author'),
      downloadEl = getEl(selector + '-downloads'),
      starsEl = getEl(selector + '-stars');

      // Write package data to DOM elements
      nameEl.textContent = package.name;
      descEl.textContent = package.description;
      authEl.textContent = package.author;
      downloadEl.textContent = package.getFormattedDownloads();
      starsEl.textContent = package.getFormattedStars();
  }

  /******************************************************
   * Utilize package data and constuctor objects to
   * construct each package, then add package data to
   * the page via DOM functions.
   ******************************************************/

  // Write date
  dateEl = getEl('date');
  dateEl.textContent = getTodaysDate();

  /**
   * Write package data one-by-one or with a for loop.
   * Remember to comment out the one you don't use.
   */

  // Write package data one-by-one
  var emmet = new Package(data[0]);
  writePackageInfo(emmet);

  var htmlSnippet = new Package(data[1]);
  writePackageInfo(htmlSnippet);

  var htmlSnippet = new Package(data[2]);
  writePackageInfo(htmlSnippet);

  // continue with eight more packages... OR

  // Write package data using for loop
  // for (var i = 0; i < data.length; i++) {
  //   var package = new Package(data[i]);
  //   writePackageInfo(package);
  // }

}());