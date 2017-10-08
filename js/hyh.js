(function($) {

	$(function() {
		$("#addPic").on("click", function(){
			var min=$('#min').val();
			var pic=$('#pic').val();
			var des=$('#des').val();
			addPicUrl(min,pic,des);
		});

	});

 $(function(){
 	// alert("showPic");
 });

})(jQuery);

function addPicUrl(min,pic,des){
	AV.initialize('lvGBqWMwDN3NwEWDG1LmfgCK-gzGzoHsz', 'xFm44Y3iEY51P65afvqNjypq');
	var Photo = AV.Object.extend('Photo');
	var photo = new Photo();
	photo.set('min',min);
	photo.set('pic',pic);
	photo.set('des',des);
	photo.save().then(function (todo) {
    console.log('objectId is ' + todo.id);
  }, function (error) {
    console.error(error);
    alert("图片添加错误，重新添加");
  });
}
