/***************************boardWrite.jsp**********************************/
 $(document).ready(function() { 
	  $('#summernote').summernote({
 	    	placeholder: 'content',
	        minHeight: 700, //최소높이
	        maxHeight: 700, //최대높이
	        focus: true,  //에디터 로딩 후 초커스를 맞출지 여부
	        lang : 'ko-KR' // 한글 설정
	  });
	}); 
	
$('document').ready(function(){
  $('.switch_infomation').hide();
  $('.writeOptionDiv').hide();
  $('.view_replyBoard').toggle();
  let option= $('.view_controlOption').offset();
});

$('.switch').mouseover(function(){
  $('.switch_infomation').show();
});
$('.switch').mouseout(function(){
  $('.switch_infomation').hide();
});



$('#boardWriteBtn').click(function(){
	$('#subjectDiv').empty();
	$('#contentDiv').empty();
	
	if($('#subject').val() ==''){
		alert("제목을 입력하세요");
	}else if($('#summernote').val() ==''){
		alert("내용을 입력하세요");
         
	}else{
		$.ajax({
			type: 'post',
			url: '/morip/board/boardWrite',
			data: {'subject': $('#subject').val(),
				   'content': $('#summernote').val()},
			success: function(){
			$('#testBtn').trigger('click', 'continue');
					Swal.fire({
 					icon: 'success',
  					title: '글작성 완료!',
  					text: '작성하신글이 저장 되었습니다.',
  					confirmButtonText: '확인'
				}).then((result) => {
					if (result.value) {											
					location.href = '/morip/board/boardList';
					}
				})
			},
			error: function(err){
				console.log(err);
			}
		});
		
	}
});

$('.resetBtn').click(function(){
	$('#subject').val('');
	$('#summernote').summernote('reset');
});





