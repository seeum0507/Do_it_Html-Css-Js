let heading =
  document.querySelector(
    "#heading"
  ); /* html의 id가 heading인 요소를 데리고 와서 heading이라는 변수를 만듬 */
heading.onclick = function () {
  /*heading이라는 변수가 클릭이 되었을 떄 function이 실행된다*/
  heading.style.color =
    "red"; /*함수는 heading의 style에서 color가 red로 바뀐다는 뜻, heading이 아니라 headings처럼 이름 이상하게 적으면 작동X*/
};
