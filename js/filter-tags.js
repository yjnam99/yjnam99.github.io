(function() {                                     //즉시 실행되는 함수 작성

  var $imgs = $('#gallery img');                  // $img변수에 이미지를 저장하고 있는 셀렉션 저장
  var $buttons = $('#buttons');                   // $button변수에 버튼을 저장할 요소의 셀렉션 저장
  var tagged = {};                                // tagged 객체 생성

  $imgs.each(function() {                         // .each메서드를 이용해서 $img변수에 저장된 이미지에 루프 실행. 동일한 익명함수 적용
    var img = this;                               // 현재 이미지를 img변수에 저장
    var tags = $(this).data('tags');              // 현재 이미지 태그를 tags 변수에 저장

    if (tags) {                                   // tag변수가 값을 가진다면
      tags.split(',').forEach(function(tagName) { // String객체의 split()메서드를 이용하여 태그의 배열 만듦.(콤마로 분리) 그 후.forEach()메서드로 배열의 요소에 대해 루프 실행
        if (tagged[tagName] == null) {            // 태그가 tagged객체에 존재하는지 검사
          tagged[tagName] = [];                   // 존재하지않으면 빈배열을 가지는 새로운 속성 추가
        }
        tagged[tagName].push(img);                // 태그 이름에 해당하는 tagged 객체의 속성을 가져와 해당 속성값으로 저장되어 있는 배열에 이미지추가.
      });
    }
  });

  $('<button/>', {                                 // 모든 이미지를 보이게 하기 위한 버튼 생성. 두번째 매개 변수는 객체 표현식이며 버튼 속성 지정
    text: 'Show All',                              // 버튼 텍스트 추가
    class: 'active',                               // 버튼 활성화
    click: function() {                            // click 핸들러 추가
      $(this)                                      // 클릭된 버튼 가져오기
        .addClass('active')                        // active 클래스 추가
        .siblings()                                // 이웃 요소들 가져오기
        .removeClass('active');                    // 이웃 요소들에서 active 클래스 제거
      $imgs.show();                                // 모든 이미지 보이게하기.
    }
  }).appendTo($buttons);                           // buttons요소에 추가

  $.each(tagged, function(tagName) {               // 
    $('<button/>', {                               // 다른 필터버튼 생성. ()each메서드로 tagged 객체의 속성에 대해 루프 실행. 각 태그에 대해 동일한 익명함수 적용
      text: tagName + ' (' + tagged[tagName].length + ')', // 버튼 텍스트는 태그 이름과 동일하게 지정, 그다음에 태그가 지정된 이미지 개수 추가
      click: function() {                          // 클릭된 버튼에 함수 연결
        $(this)                                     
          .addClass('active')                      // active클래스 추가
          .siblings()                              // 이웃요소 가져오기
          .removeClass('active');                  // active클래스 제거
        $imgs                                      // 모든이미지를
          .hide()                                  // 숨김
          .filter(tagged[tagName])                 // .filter()메서드를 이용하여 지정된 태그가 이미지 선택
          .show();                                 // .show()메서드로 .filter()메서드가 리턴한 이미지들 보이게 함.
      }
    }).appendTo($buttons);                         // .appendTo() 메서드로 새로생성된 필터 버튼을 부모요소에 추가.
  });

}());