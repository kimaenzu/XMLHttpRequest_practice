const fs = require('fs'); 

// 파일 존재여부 확인
let path = 'student.json';
let res = fs.existsSync("./student.json");

if (res) {
    // 파일이 있으면 : 기존 파일 load
    var jsonData = require('./student.json'); 
}
else {
    // 파일이 없으면 : 배열 생성
    var jsonData = []; 
}

// 입력될 데이터
var a = `jin      94  67   89   78
Ryu      44  98   89   60
Canaria  98  98   90   87
Chuck    47  34   99   34
Hans     76   69   34   78
Karl     23   89   56   27
Maria    91   78    85   78
Jon       33  54   45    66
Galia     45   65  82   91
Misha    78    80   76   77
Chloe    45    78    29  88`;


var testarray = new Array();
a = a.replaceAll("\n", " ");
testarray = a.split(" ");

function makeObject(name) {
    this.id = 0; // json은 id로 검색하기 때문에? id를 추가해줘야 함.
    this.name = name; // 이름으로 검색해서 값을 바꾼다고 /student/name으로 찾을 수 없음
    this.sci = 0;
    this.soc = 0;
    this.geo = 0;
    this.cul = 0;
};
// 문자인지 확인하는 함수
const isNumeric = n => !isNaN(n);
var count = 0; // id를 넣기 위해서 선언
for (let i = 0; i < testarray.length; i++) {
    if (testarray[i] != '') {
        // 공백이 아니며 숫자이면
        if (isNumeric(testarray[i])) {
            if (score_num == 0) {
                data_name.sci = testarray[i];
            }
            if (score_num == 1) {
                data_name.soc = testarray[i];
                    }
                    if (score_num == 2) {
                        data_name.geo = testarray[i];
                    }
                    if (score_num == 3) {
                        data_name.cul = testarray[i];
                        data_name.id = count;
                        jsonData.push(data_name); 
                        count++;
                    }
                    score_num++;
                }
                // 공백이 아니며 문자열이면
                else {
                    data_name = new makeObject(testarray[i]);
                    data_name.name = testarray[i];
                    score_num = 0;  // 0으로 초기화
                }
    }
}
console.log(jsonData);
// 파일에 쓰기 
fs.writeFile('student.json', "{ \"student\" : "+JSON.stringify(jsonData)+"}", 'utf8', function (err) {
    if (err) {
        console.log('파일을 작성하는 중에 오류가 발생했습니다.');
        return console.log(err);
    }

    console.log('JSON 파일이 성공적으로 작성되었습니다.');
});
/*





const jsonContent = JSON.stringify(data); // JavaScript 객체를 JSON 문자열로 변환합니다.

fs.writeFile('student.json', jsonContent, 'utf8', function (err) {
    if (err) {
        console.log('파일을 작성하는 중에 오류가 발생했습니다.');
        return console.log(err);
    }

    console.log('JSON 파일이 성공적으로 작성되었습니다.');
});*/