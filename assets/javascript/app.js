 // $("button").on("click", function () {
        // var animal = $(this).attr("data-animal");
        var apiKey = "MAd6z3CvYCgWehKbQNCcs4la5y15YvyM";
        // var search = "Michelle Obama"
        var startYear = "20120101";
        var endYear = "20180101";
        // var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=" + apiKey + "&begin_date=" + startYear + "&end_date=" + endYear;


        $("#search-button").on("click", function (event) {

            // Here, it prevents the submit button from trying to submit a form when clicked
            event.preventDefault();

            // Here we grab the text from the input box
            var search = $("#searchInput").val();
            // starYear = $("#1Year").val() + "0101";
            // endYear = $("#2Year").val() + "0101";

            var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=" + apiKey + "&begin_date=" + startYear + "&end_date=" + endYear;


            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {

                console.log(response);
                // $("#search-view").text(JSON.stringify(response));
                console.log(response.response.docs);
                var results = response.response.docs;
                // ========================

                for (var i = 0; i < results.length; i++) {
                    var searchDiv = $("<div class='searchDiv'></div>")
                    console.log(results[i].headline.main)
                    console.log(results[i].snippet)
                    console.log(results[i].web_url)
                    var headline = $("<div class='headline'>" + results[i].headline.main + "</div>")
                    var snippet = $("<div class='snippet'>" + results[i].snippet + "</div>")
                    var web_url = $("<div class='web_url'>" + results[i].web_url + "</div>")

                    $("#topArticles").prepend(searchDiv);
                    searchDiv.append(headline).append(snippet).append(web_url);
                    //     var animalDiv = $("<div>");
                    //     var p = $("<p>");
                    //     p.html(results[i].rating);
                    //     var animalImage = $("<img>")
                    //     animalImage.attr("src", results[i].images.fix_height.url);
                    //     animalDiv.append(p).append(animalImage);
                    //     $("#gifs-appear-here").prepend(animalDiv);

                }

            });


            //END on click
        });
        // });