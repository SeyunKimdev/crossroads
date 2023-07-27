<h1>운전연수 신청 사이트 - '교차로'</h1>


<h2>1. 기획 의도</h2>
<div dir="auto" style="display: flex;">
<img width="1180" alt="스크린샷 2022-12-27 오전 12 09 34" src="https://user-images.githubusercontent.com/122762202/233516894-6786533c-41da-4253-8c7e-9754db5cd681.png" style = "width: 45%; height : 45%">
</div>


<h2>2. 기대 효과</h2>
<img width="1161" alt="스크린샷 2022-12-27 오전 12 20 31" src="https://user-images.githubusercontent.com/122762202/233516945-286cad78-74ad-4274-85f9-66ecfabf1353.png" style = "width: 45%; height : 45%">


<h2>3. 프로젝트 사용 툴</h2>
<img width="1160" alt="스크린샷 2022-12-27 오전 12 23 33" src="https://user-images.githubusercontent.com/122762202/233516994-0efd63f6-f000-4566-b108-14dba6d0ac86.png" style = "width: 45%; height : 45%">


<h2>4. 퍼블리싱 담당 업무</h2>
<img width="1160" alt="김세윤 퍼블리싱 진행률" src="https://user-images.githubusercontent.com/115637705/233588356-9669ef05-31f5-425b-8efc-c770706235d2.png" style = "width: 80%; height : 45%">

4-1. 리뷰 게시판
  - 리뷰 게시판 목록 페이지
  - 리뷰 게시판 작성 페이지
  - 리뷰 게시판 수정 페이지

4-1. 자유 게시판
  - 자유 게시판 목록 페이지
  - 자유 게시판 작성 페이지
  - 자유 게시판 수정 페이지


4-3. FAQ
  - 자주 하는 질문

4-4. 사업소개
  - 사업소개
  
<h2>5. 백엔드 담당 업무</h2>
<img width="1160" alt="김세윤 백엔드 진행률" src="https://user-images.githubusercontent.com/115637705/233588353-7c004e09-9bdc-4493-8cfc-103ec7401bc6.png" style = "width: 80%; height : 45%">

<h3>5-1. 모바일 - 베테랑 연수신청 목록(연수 수락, 거절)</h3>h3><br>
  <strong>- 연수신청 목록</strong><br>
    (연수자의 간단한 정보와 연수 신청 코스 보임)<br>
    (다른 베테랑이 수락한 연수 신청은 나에게 보이지 않음)<br>
  <strong>- 연수 신청 목록에서 수락 가능</strong><br>
    (수락 후 취소 가능)<br>
  <strong>- 내가 원하는 연수신청 검색</strong><br>
    (내가 원하는 지역, 날짜를 선택하여 검색 가능)<br>
  
5-2. 환전<br>
  <strong>- 포인트 환전</strong>
  <strong>- 모바일 환전</strong>
    
  
<h2>6. 느낀점</h2>
<h3>6-1. 어려웠던 부분</h3>
📌무한스크롤 페이징처리를 하는것이 어려웠다. <br>
✔ 강사님의 강의를 다시 듣고 처음부터 재구축 하였다. 한번 제대로 알게 되니 방법을 제대로 익혀 다른 동기들의 무한스크롤 페이징처리를 도와주었다.<br><br>
📌프로젝트 초반에는 service와 controller를 어떻게 구분해서 사용해야 하는지 감이 잘 잡히지 않아서 헷갈렸다. <br>
✔ 프로젝트를 통해 학습과 적용을 반복하다보니 자연스레 언제 사용해야 하는지 알게됐다. 특히, service에 내가 필요한 변수를 능숙하게 선언, 사용 할 수 있게 됐다는 점이 큰 수확이었다. <br><br><br><br>


<h3>6-2. 아쉬웠던 부분</h3>
<h4>📌연수 신청 날짜가 지난 후에는 연수 신청이 보이지 않거나 자동 취소되어야 하는 부분</h4> <br>
🌩문제 상황🌩<br>
연수 신청이 수락되거나 수락되지 않은 상태로 신청날짜가 넘어가게 되면 신청이 취소되거나 보이지 않아야 하는데 보임 <br><br>
🚨해결 방안🚨 <br>
쿼츠를 사용하여 시간이 지났으면 취소되게 하거나 다른 이미 마감된 신청으로 분류하는 방식으로 해결할 수 있을 것 같다. <br><br>


<h3>6-3. 총평</h3>
<h4>🌟 프로젝트를 진행하면서 많은 공부가 됐고 팀원간의 소통이 중요하다고 느꼈다. </h4>


<h4>🌟 내가 마주한 오류와 해결방안을 구체적으로 기록해두자. </h4>

정말 많은 오류를 경험하고 해결했는데, 기록을 해두지 않아서 많이 잊어버린 점이 프로젝트가 끝난 이후 아쉬웠다. 간단하게라도 기록하면서 기상천외한 오류를 겪을 동료 개발자들에게 한 줌의 도움이라도 주고싶다. 


<h4>🌟 어떻게 더 소통하는 동료, 소통하는 리더가 될 것인가. </h4>



해당 프로젝트를 진행하면서, 백엔드 작업을 진행할 때 팀장과 팀원들과의 의사소통이 부족했다. GIT을 pull,push,pr 하면서 제때 안해서 많은 오류가 일어났고 해결하는데 많은 시간이 소비되었다. 약 한달간 각자의 역할을 수행하면서 자신의 업무뿐 아니라 다른 사람과의 소통도 중요하다는 걸 느꼈다. 항상 이 경험을 되새기면서 팀원들에게 먼저 다가가고 적극적으로 소통하는 사람이 되어야겠다.    


<h2>ERD</h2>
<img width="100%" alt="erd" src="https://user-images.githubusercontent.com/122762202/233519739-7989a676-8520-44ea-842f-feb20ec16a38.png">

