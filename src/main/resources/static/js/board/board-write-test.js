    /*사진 첨부*/

    /*첨부된 이미리즐을 배열에 넣고 미리보기 */
    imageLoader = function(file){
        var sel_files = [];
        sel_files.push(file);
        var reader = new FileReader();
        reader.onload = function(ee){
          let img = document.createElement('img');
          img.setAttribute("src", ee.target.result);
          img.setAttribute("class", "review-images");
          document.querySelector("div#image_container").appendChild(img);
        //   img.src = ee.target.result;
        }
        
        reader.readAsDataURL(file);
      }

FileList.prototype.forEach = Array.prototype.forEach;
function setThumbnail(event) {
        // var reader = new FileReader();
        // reader.onload = function(event) {
        var img = document.createElement("img");
        var images=  document.querySelector("#image1");

        var files = event.target.files;
        var fileArr = Array.prototype.slice.call(files)
        if(images.files.length > 3){
            $(".modal-wrapper").css('display', 'block');
            $(".modal-message").text("이미지는 최대 3개까지 입력 가능합니다.");
        } else {
            for(f of fileArr){
                imageLoader(f);
            }
        }
  }

  document.querySelector("#image_container").addEventListener("click", function(){
      var child = document.querySelector("div#image_container img");  // 만들어진 자식
      document.querySelector("div#image_container").removeChild(child); // 만들어진 이미지 삭제
      document.querySelector("#image").value(null);      // input type:file 에 들어간 이미지 비워주기
    //   document.querySelector("#image").value = null;      // input type:file 에 들어간 이미지 비워주기

      if(document.querySelector("#image_container").childElementCount == 0 ){
        document.querySelector(".MainImage_wrapper").style.display = "flex";  // 없어진 이미지 넣기 버튼 다시 보여주기
      }
  });

//   테스트 image 각각 누를 때 삭제
//   $("#image_container div").on('click', function(){
//     $(this).
//   })

  /* 테스트 - input file에 담긴 것들 출력 */
    $('#test-button').on('click', function(event){
        const removeTargetId = event.target.dataset.index;
        console.log(removeTargetId);
        // const removeTarget = event.getElementById(removeTargetId);
        var images =  document.querySelector("#image1");
        console.log(images.files)
        console.log(images.files[0])
        console.log(images.files[1])
        /* 테스트 */
        const dataTranster = new DataTransfer();

        Array.from(images)
            .filter(image => image.lastModified != removeTargetId)
            .forEach(image => {
                dataTranster.items.add(image);
            });

        document.querySelector('#image1').files = dataTranster.files;
        /* 테스트 */
        console.log(images.files[0])
    });

// 별점
const rating = document.querySelector('.rating');
const score = document.querySelector('.score');

/* 별점 옆에 점수 */
// rating.addEventListener('change', function(e) {
//   score.textContent = `${e.target.value}점`;
// });


// 리뷰 작성 확인 및 제출
$(".registButton_button").on('click', function(){
  let flag1 = true;
  let flag2 = true;
  let flag3 = true;
  console.log("들어옴");
  var $title = $("#input-title");
  var $content = $("#input-content");
  var $star = $("input[name=rating]:checked");

  console.log("star : " + $star.val());
  if($title.val().length < 1){
    // alert("제목을 작성해주세요.");
    $(".modal-wrapper").css('display', 'block');
    $(".modal-message").text("제목을 작성해주세요.");
    $("#input-title").focus();
    flag1 = false;
  } else if($content.val().length < 1){
    // alert("내용을 작성해주세요.");
    $(".modal-wrapper").css('display', 'block');
    $(".modal-message").text("내용을 작성해주세요.");
    $("#input-content").focus();
    flag2 = false;
  } else if($star.val() < 1 || $star.val() == null){
    // alert("만족도를 체크해주세요.");
    $(".modal-wrapper").css('display', 'block');
    $(".modal-message").text("만족도를 체크해주세요.");
    $star.focus();
    flag3 = false;
  }
  
  if(flag1 && flag2 && flag3){
    // alert("완료");
    document.reviewForm.submit();
  }

})



/* 파일 목록 출력*/
// var files = fileInput.files;
//             var file;
            
//             for (var i = 0; i < files.length; i++) {
                
//                 file = files[i];
 
//                 alert(file.name);
//             }

/* 모달 창 띄우기, 끄기 */
$(".modal-close-btn").on("click", function(){
    $(".modal-wrapper").css('display', 'none');
  })
  