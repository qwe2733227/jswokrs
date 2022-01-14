/* 조건
   성적 점수가 90점 이상이면 'A'학점 출력
   성적 점수가 80점 이상이면 'B'학점
   성적 점수가 70점 이상이면 'C'학점
   성적 점수가 60점 이상이면 'D'학점
   성적 점수가 60점 미만이면 'F'학점
*/

var score = 91;
var Point= "";

if(score >= 90){
    Point = "A학점";
}
else if(score < 90 && score >= 80){
    Point = "B학점";
}
else if(score < 80 && score >= 70){
    Point = "C학점";
}
else if(score < 70 && score >= 60){
    Point = "D학점";
}
else if(score < 60){
    Point = "F학점";
}

document.write("학생은 <span>" + Point + "</span> 입니다.")