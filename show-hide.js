$(document).ready(function(){
    //$(".building_now .news-block .news").hide();
$(".switcher button").click(function() {
    var button = $(this);
    var switcher = button.parent();
    var news = switcher.siblings(".news");
    //var sp = button.children();
    if (news.is(":visible")) {
        news.slideDown(500, function() {
            $(this).parents(".news-block").removeClass("non-collapsed").addClass("collapsed");
        });
        //sp.removeClass("sw-arrow").addClass("hid");

 } else {
        news.slideUp(500, function() {
            $(this).parents(".news-block").removeClass("collapsed").addClass("non-collapsed");
        });
        //sp.removeClass("hid").addClass("sw-arrow");
    }
});

});
