/**
 * Created by jo.chan on 2016/1/4.
 */

/**
 * ÐÂÎÅÇÐ»»
 */
$(".news_nav li").hover(function () {
    $(".news_nav li.active").removeClass('active');
    $(this).addClass('active');
    var i = $(this).index();
    $(".newsBox").hide();
    $(".newsBox").eq(i).show();
});

/**
 * »î¶¯Í¼ÇÐ»»
 */
$(".chooseBtn li").hover(function () {
    $(".chooseBtn li.active").removeClass('active');
    $(this).addClass('active');
    var i = $(this).index();
    $(".picture").hide();
    $(".picture").eq(i).show();
});


$(".chooseMenu li").hover(function () {
    $(".chooseMenu li.active").removeClass('active');
    $(this).addClass('active');
    var i = $(this).index();
    $(".activityPic").hide();
    $(".activityPic").eq(i).show();
    var e = $(this).index();
    $(".smallMenu").hide();
    $(".smallMenu").eq(e).show();
});

/**
 * ÇýÖð½¢  ÇåÑ²½¢ Õ½ÁÐ½¢  º½Ä¸ ÖØÑ² Õ½ÁÐÑ²Ñó½¢
 * Ð¡Í¼ÇÐ»»
 */
$(".qzjMenu li").hover(function () {
    $(".qzjMenu li.active").removeClass('active');
    $(this).addClass('active');
    var i = $(this).index();
    $(".qzjPicture li").hide();
    $(".qzjPicture li").eq(i).show();
});


$(".qxMenu li").hover(function () {
    $(".qxMenu li.active").removeClass('active');
    $(this).addClass('active');
    var i = $(this).index();
    $(".qxPicture li").hide();
    $(".qxPicture li").eq(i).show();
});


$(".zlMenu li").hover(function () {
    $(".zlMenu li.active").removeClass('active');
    $(this).addClass('active');
    var i = $(this).index();
    $(".zlPicture li").hide();
    $(".zlPicture li").eq(i).show();
});

$(".hmMenu li").hover(function () {
    $(".hmMenu li.active").removeClass('active');
    $(this).addClass('active');
    var i = $(this).index();
    $(".hmPicture li").hide();
    $(".hmPicture li").eq(i).show();
});


$(".zxMenu li").hover(function () {
    $(".zxMenu li.active").removeClass('active');
    $(this).addClass('active');
    var i = $(this).index();
    $(".zxPicture li").hide();
    $(".zxPicture li").eq(i).show();
});

$(".zlxMenu li").hover(function () {
    $(".zlxMenu li.active").removeClass('active');
    $(this).addClass('active');
    var i = $(this).index();
    $(".zlxPicture li").hide();
    $(".zlxPicture li").eq(i).show();
});


/**
 * »­ÀÈÐ¡²Ëµ¥ÇÐ»»
 */
$(".galleryMenu li").on("mouseover", function () {
    $(".galleryMenu li.active").removeClass('active');
    $(this).addClass('active');
    var i = $(this).index();
    $(".galleryActivity").hide();
    $(".galleryActivity").eq(i).show();
});


/**
 * ¸ù¾ÝhashÇÐ»»»­ÀÈÐ¡²Ëµ¥
 */
(function () {
    var hash = location.hash;
    var hash_index;
    switch (hash) {
        case "#select01":
            hash_index = 0;
            break;
        case "#select02":
            hash_index = 1;
            break;
        case "#select03":
            hash_index = 2;
            break;
    }
    if (hash_index != undefined) {
        $(".galleryMenu li").eq(hash_index).trigger("mouseover");
    }
})();

/**
 * Í¼Æ¬µã»÷·Å´ó
 */
$(".showBigImg li").on("click", function () {
    var _t = $(this);
    var index = _t.index();
    var src = _t.find("img").attr("data-src");
    var img = new Image;
    var bhPictureUl_li = $(".bhPictureUl li");
    var bh_picture = $(".bh_picture");

    if (src) {
        bhPictureUl_li.html("");
        bh_picture.fadeIn();
        $(".blackBg").show();
        img.onload = function () {
            bh_picture.css("margin-left", -img.width / 2);
            bhPictureUl_li.css("width", img.width).html("<img src='" + src + "' />");
        };
        img.src = src;
    }
});


/**
 * ¹Ø±Õ
 */
$(".closeBtn").click(function () {
    $(".blackBg").hide();
    $(".bh_picture").fadeOut();
});





