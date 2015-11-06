
var resize= function(){
	$(this).height($(this).width())
};
	$('.galimg').each(resize)



$('.galimg').css('display','block');






$('galimg:nth-child(1)').addClass('portrait');
// $('galimg:nth-child(2)').addClass('landscape');
// $('galimg:nth-child(3)').addClass('landscape');
// $('galimg:nth-child(4)').addClass('landscape');
// $('galimg:nth-child(5)').addClass('landscape');
// $('galimg:nth-child(6)').addClass('landscape');
// $('.gallery .galimg:last-child').addClass('landscape');

// if ($('.galimg').width>$('.galimg').height){
// 	$('.galimg').addClass('landscape')
// }
// else{
// 	$('.galimg').addClass('portrait')
// }