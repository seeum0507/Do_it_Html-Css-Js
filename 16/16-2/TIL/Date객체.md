### Date 객체

- 날짜와 시간 정보를 나타낼 수 있음
- 현재 날짜와 시간을 출력하거나, 달력, 특정일까지 얼마나 남았는지 알려주는 등

**Date객체 인스턴스 만들기**

```jsx
new Date(); //예약어 new를 붙여주면 된다
```

```jsx
new Date("2024-10-19"); //특정 날짜 나타내기
new Date("2024-10-19T18:00:00"); //시간 정보까지 나타낼려면 대문자 'T'를 추가
```

**Js날짜, 시간 입력방식**

1. YYYY-MM-DD형식
2. YYYY-MM-DDTHH → 시간을 나따날 떄는 날짜 뒤에 “T”를 붙이고 HH:MM:SS 형태, 맨 끝에 “Z”를 붙이면 UTC(국제 표준시)로 표시
3. MM/DD/YYYY → 연도를 마지막에 나타나고 싶을 떄 사용
4. 이름 형식 → January처럼 전체를 사용하거나 Jan으로 줄여서 사용 가능, 요일을 함께 작성 가능

### Date객체의 메서드

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/2f55a9cc-5ec8-4d85-8eda-6b865ba9835a/2c935862-d637-4b1f-b56a-1538b7f49b3e/image.png)
