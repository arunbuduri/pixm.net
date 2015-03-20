/*jshint jquery:true */
/*jshint unused:false */

$(document).ready(function($) {
  "use strict";

/* Kimono is too slow
$.ajax({
  url:"https://www.kimonolabs.com/api/deu8kwmq?apikey=KNqzpTaPqOfXhtTbkZVcvq8s9rn9xjqq",
  crossDomain: true,
  dataType: "jsonp",
  success: function (response) {
    //Do something with the response
    //console.log(response.results.collection1[0].total_submissions);
    var $valid_phises = $('<h1>').text(response.results.collection1[0].valid_phises);
    var $total_submissions = $('<p>').text(response.results.collection1[0].total_submissions);
    $('#info')
      .append($valid_phises)
      .append($total_submissions);
  } /*,
  error: function (xhr, status) {
    //handle errors
    console.log(xhr, status);
  } */
//});


    /*!
     * IE10 viewport hack for Surface/desktop Windows 8 bug
     * Copyright 2014 Twitter, Inc.
     * Licensed under the Creative Commons Attribution 3.0 Unported License. For
     * details, see http://creativecommons.org/licenses/by/3.0/.
     */
    // See the Getting Started docs for more information:
    // http://getbootstrap.com/getting-started/#support-ie10-width
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style');
        msViewportStyle.appendChild(
            document.createTextNode(
                '@-ms-viewport{width:auto!important}'
            )
        );
        document.querySelector('head').appendChild(msViewportStyle);
    }

}(jQuery));