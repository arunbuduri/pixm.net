$.ajax({
  url:"https://www.kimonolabs.com/api/deu8kwmq?apikey=KNqzpTaPqOfXhtTbkZVcvq8s9rn9xjqq",
  crossDomain: true,
  data: {
    format: 'json'
  },
  dataType: "jsonp",
  success: function (response) {
    //Do something with the response
    //console.log(response.results.collection1[0].total_submissions);
    var $valid_phises = $('<h1>').text(response.results.collection1[0].valid_phises);
    var $total_submissions = $('<p>').text(response.results.collection1[0].total_submissions);
    $('#info')
      .append($valid_phises)
      .append($total_submissions);
  },
  error: function (xhr, status) {
    //handle errors
    console.log(xhr, status);
  },
  type: 'GET'
});