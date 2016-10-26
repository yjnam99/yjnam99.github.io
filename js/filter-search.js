(function() {                             // 즉시 실행되는 함수에 작성
  var $imgs = $('#gallery img');          // $img변수에 이미지를 저장하는 셀렉션 저장.
  var $search = $('#filter-search');      // $search 변수에 검색어 입력창 저장
  var cache = [];                         // cache 배열 생성. {element:img, text:'text'}의 형태

  $imgs.each(function() {                 // $img배열의 모든 이미지에 대해 each()메서드로 루프 실행, 익명함수 적용
    cache.push({                          // push()메서드로 cache 배열에 이미지 표현하는 객체추가
      element: this,                      // 현재 이미지 저장
      text: this.alt.trim().toLowerCase() // 이미지의 대체 텍스트 저장 .trim()=텍스트의 양끝 공백 제거/ .toLowerCase() 메서드는 텍스트를 모두 소문자로 변환.
    });
  });

  function filter() {                     // filter 함수정의
    var query = this.value.trim().toLowerCase();  // 검색어를 query 변수에 저장, 텍스트에 .trim(),toLowerCase()메서드 적용
    cache.forEach(function(img) {         // cache배열에대해 루프 실행하면서 객체에 동일한 익명함수 적용
      var index = 0;                      // index 변수에 0 대입

      if (query) {                        // 만약 query변수에 값이 저장되어있으면,
        index = img.text.indexOf(query);  // indexOf()메서드로 검색어가 객체의 text속성에 포함되어있는지 확인, 결과 index변수에 저장/발견시 양수,그렇지 않으면 -1
      }

      img.element.style.display = index === -1 ? 'none' : '';  //변수값이 -1이면 이미지의 display속성값을 none으로 지정. 그렇지 않으면 빈문자로 지정.
    });
  }

  if ('oninput' in $search[0]) {          // 브라우저가 input 이벤트 지원하는지 확인/ 지원하면
    $search.on('input', filter);          // input 이벤트 발생시 filter()메서드 호출
  } else {                                // 그렇지 않으면
    $search.on('keyup', filter);          // keyup이벤트가 발생할 때 filter() 메서드 호출
  }              

}());