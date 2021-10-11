/**
 * Created by komu on 11/16/16.
 */
//mobile-filter
$(document).ready(function ($) {
    $('a#project_pie_cta').click(function() {
        console.log('project_pie_cta');
        $('.pie-overlay').fadeIn();

        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(mainProjectDrawChart);


    });
    $("form#mobile-filter .selectboxdiv").on('change', function (event) {

        $("form#mobile-filter").submit();
    });
    //hide page-excerpt if empty

    $('.page-excerpt').each(function () {
        if ($(this).html().trim().length == 0) {
            $(this).hide().addClass('hide');
        }
    });
    $("#press_releases_select_box").on('change', function (event) {

        var value = $('#press_releases_select_box').val();
        var new_sub_data = {select_year: value};
        console.log(window.release_by_year);
        $.ajax({
            type: 'POST',
            url: window.release_by_year,
            data: new_sub_data,
            //processData: false,
            //contentType: false,
            success: function (returnData) {
                console.log(returnData);
                $('#press_list_view').html(returnData);
                $('span#press_release_year').html(value);
                accUp();

            },
            error: function (data) { // if error occured

            },

            // dataType: 'html'
        });
    });


    function accUp() {
        var allPanels = $('.accordion > dd').hide();
        $('.accordion > dt > a').click(function () {
            $('.accordion > dt > a').removeClass('active');
            $(this).addClass('active');
            allPanels.slideUp();
            $(this).parent().next().slideDown();
            return false;
        });
        $(".accordion > dt > a").first().trigger('click');
    }
});
function match_all_heights(id, data) {
console.log('match_all_heights');

        $('.common-col, .single-focus, .external-logo, .team-details, .single-team, .divisional-container, .each-division, .photo-warp, .press-release-excerpt, .event-inner,.single-project, .single-project-main.know .project-left,.single-project-main.know .project-right, .single-logo, .single-funding').matchHeight();



}
function match_project_heights() {
    console.log('match_project_heights');
    $(".single-project").matchHeight();
}

$(".news-list-holder .single-press").on('load', function(){ });

function projects_pagination(id,options) {

            setTimeout(function() {
                match_project_heights();
            }, 500);
            //match_project_heights();



}

$(document).load(function() {
    console.log('"loaded project list')
    match_project_heights();
});

