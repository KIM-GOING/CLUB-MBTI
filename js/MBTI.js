var name;
var count = 0;

var e = 0;
var i = 0;
var n = 0;
var s = 0;
var t = 0;
var f = 0;
var p = 0;
var j = 0;

var mbti = "";

function name_submit() {
    var n = document.getElementById("name").value;
    name = n;

    console.log(name);
}

function btn_click() {
    var qn = ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8", "Q9", "Q10", "Q11", "Q12"];
    var question = [
                    ["ei", "새 학기가 시작되고 소모임 신청 기간이 찾아왔다!"],
                    ["tf", "제가 산악회에 들어온 이유는…"],
                    ["ns", "오늘은 산악회에서 나물비빔밥 해 먹기로 한 날! 내가 담당한 건 콩나물 무치기."],
                    ["pj", "등산 가기 위해 가방을 챙겨보자!"],
                    ["ns", "오늘 처음으로 등산을 함께 한 선배가 정상에서 뉴진스의 하입보이를 춘다. 당신의 생각은?"],
                    ["tf", "친구한테 “나 오늘 컨디션이 안 좋아서 등산 같이 못 갈 것 같아ㅠㅠ 다른 사람들한테 좀 전해줘…” 라는 카톡이 왔다. 나의 대답은?"],
                    ["ei", "등산 하느라 고생 많으셨어요~ 이제 회식하러 가요!"],
                    ["tf", "아침에 등산 가기로 한 날 친구가 뛰어오면서 “어제 너무 늦게 자서 늦게 일어났어. 씻지도 못하고 드라이 샴푸로 대충 머리 정리하고 나옴 ㅋㅋ” 이라고 말한다. 나의 대답은?"],
                    ["pj", "등산 코스를 짜려고 하는 상황"],
                    ["ns", "‘산악회’하면 떠오르는 생각은?"],
                    ["ei", "기다리고 기다렸던 산악회 MT를 왔다. 장기자랑 하실 분~?"],
                    ["pj", "오늘은 기다리고 기다렸던 첫 등산! 무슨 옷 입을까?"]
                   ];
    var btn1 = [
                ["e", "흠… 이번 학기엔 장사랑산악회까지 4개의 소모임에 등록해야겠다!"],
                ["f", "산악회에는 제가 좋아하는 사람들이 많기 때문이에요!"],
                ["s", "‘콩나물 무침 레시피’ 검색 후 정량대로 양념을 한다."],
                ["p", "필요할 것 같은 것들을 대충 생각해서 가방에 넣는다."],
                ["n", "와… 정상 와서 이거 하시려고 얼마나 준비하셨을까? 찍어서 인스타에 올릴 때 맞팔 해야겠다."],
                ["t", "헉 무슨 일 있어? 컨디션이 왜 안 좋은데? 너 상황은 전해 놓을게"],
                ["i", "(등산도 겨우 했는데 회식까지…?) 적당한 핑계를 대고 집으로 간다."],
                ["f", "그래도 시간은 겨우 맞춰 왔네. 어제 늦게 자서 피곤하겠다. 근데 머리는 좀 감고 오지 ㅋㅋㅋ"],
                ["j", "분 단위로 플랜 B까지 생각해본다."],
                ["n", "산악회면 등산복도 맞춰 입나? 색깔은 노란색이면 좋을 듯. 등산복 입고 단체 사진 찍은 거 인스타에 올라가면 진짜 웃기겠다."],
                ["e", "나가면 상품 있대 저요 저요! (열심히 춤 추는 중)"],
                ["p", "음… 뭐 입지? 그냥 편한 옷 입을까?"]
               ];
    var btn2 = [
                ["i", "소모임… 좀 귀찮지만 그래도 안 할 순 없으니 장사랑산악회만 해야겠다!"],
                ["t", "산악회에 들어오면 스스로 더 발전할 수 있을 것 같기 때문이에요!"],
                ["n", "간을 어떻게 해야 하지? 고추장 넣을 거니까 조금만… 한 이 정도 넣으면 되겠지?"],
                ["j", "왼쪽 상단 주머니에는 물티슈, 사이드 주머니에는 물병, 혹시 모르니 여분 양말…etc."],
                ["s", "와… 잘 춘다. 여기 처음 보는 얼굴도 많은데 대단하시네."],
                ["f", "헉 같이 못 가서 너무 아쉽다ㅜㅜ 알겠어… 전해줄게"],
                ["e", "가자~~~!"],
                ["t", "오 드라이 샴푸?? 그거 좋아? 근데 티 안 난다. 대박 ㅋㅋㅋ"],
                ["p", "여기서 만나서 저기로 나오면 되겠지?"],
                ["s", "서달산, 회장은 장우영, 글미의 비공식 소모임, 미라클 모닝, 등산 재미있겠다."],
                ["i", "장기자랑에 나간 친구를 향해 박수 쳐 준다. (친구가 대단함)"],
                ["j", "어제 골라둔 옷을 입는다."]
               ];
    var comment = [
                    ["ENTP", "ENTP에 대한 설명입니다. ENTP에 대한 설명입니다. ENTP에 대한 설명입니다. ENTP에 대한 설명입니다. ENTP에 대한 설명입니다. ENTP에 대한 설명입니다. ENTP에 대한 설명입니다. ENTP에 대한 설명입니다. ENTP에 대한 설명입니다."],
                    ["ISTJ", "ISTJ에 대한 설명입니다. ISTJ에 대한 설명입니다. ISTJ에 대한 설명입니다. ISTJ에 대한 설명입니다. ISTJ에 대한 설명입니다. ISTJ에 대한 설명입니다. ISTJ에 대한 설명입니다. ISTJ에 대한 설명입니다. ISTJ에 대한 설명입니다."],
                    ["ISFJ", "ISFJ에 대한 설명입니다. ISFJ에 대한 설명입니다. ISFJ에 대한 설명입니다. ISFJ에 대한 설명입니다. ISFJ에 대한 설명입니다. ISFJ에 대한 설명입니다. ISFJ에 대한 설명입니다. ISFJ에 대한 설명입니다. ISFJ에 대한 설명입니다."],
                    ["ESTJ", "ESTJ에 대한 설명입니다. ESTJ에 대한 설명입니다. ESTJ에 대한 설명입니다. ESTJ에 대한 설명입니다. ESTJ에 대한 설명입니다. ESTJ에 대한 설명입니다. ESTJ에 대한 설명입니다. ESTJ에 대한 설명입니다. ESTJ에 대한 설명입니다."],
                    ["ESFJ", "ESFJ에 대한 설명입니다. ESFJ에 대한 설명입니다. ESFJ에 대한 설명입니다. ESFJ에 대한 설명입니다. ESFJ에 대한 설명입니다. ESFJ에 대한 설명입니다. ESFJ에 대한 설명입니다. ESFJ에 대한 설명입니다. ESFJ에 대한 설명입니다."],
                    ["INTJ", "INTJ에 대한 설명입니다. INTJ에 대한 설명입니다. INTJ에 대한 설명입니다. INTJ에 대한 설명입니다. INTJ에 대한 설명입니다. INTJ에 대한 설명입니다. INTJ에 대한 설명입니다. INTJ에 대한 설명입니다. INTJ에 대한 설명입니다."],
                    ["INTP", "INTP에 대한 설명입니다. INTP에 대한 설명입니다. INTP에 대한 설명입니다. INTP에 대한 설명입니다. INTP에 대한 설명입니다. INTP에 대한 설명입니다. INTP에 대한 설명입니다. INTP에 대한 설명입니다. INTP에 대한 설명입니다."],
                    ["ENTJ", "ENTJ에 대한 설명입니다. ENTJ에 대한 설명입니다. ENTJ에 대한 설명입니다. ENTJ에 대한 설명입니다. ENTJ에 대한 설명입니다. ENTJ에 대한 설명입니다. ENTJ에 대한 설명입니다. ENTJ에 대한 설명입니다. ENTJ에 대한 설명입니다."],
                    ["INFJ", "INFJ에 대한 설명입니다. INFJ에 대한 설명입니다. INFJ에 대한 설명입니다. INFJ에 대한 설명입니다. INFJ에 대한 설명입니다. INFJ에 대한 설명입니다. INFJ에 대한 설명입니다. INFJ에 대한 설명입니다. INFJ에 대한 설명입니다."],
                    ["INFP", "INFP에 대한 설명입니다. INFP에 대한 설명입니다. INFP에 대한 설명입니다. INFP에 대한 설명입니다. INFP에 대한 설명입니다. INFP에 대한 설명입니다. INFP에 대한 설명입니다. INFP에 대한 설명입니다. INFP에 대한 설명입니다."],
                    ["ENFJ", "ENFJ에 대한 설명입니다. ENFJ에 대한 설명입니다. ENFJ에 대한 설명입니다. ENFJ에 대한 설명입니다. ENFJ에 대한 설명입니다. ENFJ에 대한 설명입니다. ENFJ에 대한 설명입니다. ENFJ에 대한 설명입니다. ENFJ에 대한 설명입니다."],
                    ["ENFP", "ENFP에 대한 설명입니다. ENFP에 대한 설명입니다. ENFP에 대한 설명입니다. ENFP에 대한 설명입니다. ENFP에 대한 설명입니다. ENFP에 대한 설명입니다. ENFP에 대한 설명입니다. ENFP에 대한 설명입니다. ENFP에 대한 설명입니다."],
                    ["ISTP", "ISTP에 대한 설명입니다. ISTP에 대한 설명입니다. ISTP에 대한 설명입니다. ISTP에 대한 설명입니다. ISTP에 대한 설명입니다. ISTP에 대한 설명입니다. ISTP에 대한 설명입니다. ISTP에 대한 설명입니다. ISTP에 대한 설명입니다."],
                    ["ISFP", "ISFP에 대한 설명입니다. ISFP에 대한 설명입니다. ISFP에 대한 설명입니다. ISFP에 대한 설명입니다. ISFP에 대한 설명입니다. ISFP에 대한 설명입니다. ISFP에 대한 설명입니다. ISFP에 대한 설명입니다. ISFP에 대한 설명입니다."],
                    ["ESTP", "ESTP에 대한 설명입니다. ESTP에 대한 설명입니다. ESTP에 대한 설명입니다. ESTP에 대한 설명입니다. ESTP에 대한 설명입니다. ESTP에 대한 설명입니다. ESTP에 대한 설명입니다. ESTP에 대한 설명입니다. ESTP에 대한 설명입니다."],
                    ["ESFP", "ESFP에 대한 설명입니다. ESFP에 대한 설명입니다. ESFP에 대한 설명입니다. ESFP에 대한 설명입니다. ESFP에 대한 설명입니다. ESFP에 대한 설명입니다. ESFP에 대한 설명입니다. ESFP에 대한 설명입니다. ESFP에 대한 설명입니다."]
                  ]

    if(count == 0) {
        if(event.target.id == "question-btn1") {
            e = e + 1;
            console.log("e");
        }
        else {
            i = i + 1;
            console.log("i");
        }
        document.getElementById("question-num").innerHTML = qn[count+1];
        document.getElementById("question").innerHTML = question[count+1][1];
        document.getElementById("question-btn1").innerHTML = btn1[count+1][1];
        document.getElementById("question-btn2").innerHTML = btn2[count+1][1];

        count = count + 1;
    }
    else if(count == 11) {
        if(event.target.id == "question-btn1") {
            p = p + 1;
            console.log("p");
        }
        else {
            j = j + 1;
            console.log("j");
        }

        document.getElementById("question-num").innerHTML = "";
        document.getElementById("question").innerHTML = "결과가 궁금하나요?!";
        document.getElementsByClassName("q-answer-btn")[0].style.visibility = "hidden";
        document.getElementById("question-btn2").innerHTML = "결과 보러 가기";

        if(e > i) {
            mbti = mbti + "E";
        } else {
            mbti = mbti + "I";
        }
        if(n > s) {
            mbti = mbti + "N";
        } else {
            mbti = mbti + "S";
        }
        if(t > f) {
            mbti = mbti + "T";
        } else {
            mbti = mbti + "F";
        }
        if(p > j) {
            mbti = mbti + "P";
        } else {
            mbti = mbti + "J";
        }
        console.log(mbti);

        count = count + 1;
    }
    else if(count == 12) {
        document.getElementsByClassName("content")[0].style.display = 'none';
        document.getElementsByClassName("result-site")[0].style.display = 'flex';
        document.getElementById("namesh").innerHTML = name;
        document.getElementsByClassName("mbti")[0].innerHTML = mbti;

        var q;
        for(q = 0; q < 16; q++) {
            if(mbti == comment[q][0]) {
                document.getElementsByClassName("mbti-comment")[0].innerHTML = comment[q][1];
            }
        }
    }
    else {
        document.getElementById("question-num").innerHTML = qn[count+1];
        document.getElementById("question").innerHTML = question[count+1][1];
        document.getElementById("question-btn1").innerHTML = btn1[count+1][1];
        document.getElementById("question-btn2").innerHTML = btn2[count+1][1];

        if(event.target.id == "question-btn1") {
            if(btn1[count][0] == "e") {
                e = e + 1;
                console.log("e");
            }
            if(btn1[count][0] == "i") {
                i = i + 1;
                console.log("i");
            }
            if(btn1[count][0] == "n") {
                n = n + 1;
                console.log("n");
            }
            if(btn1[count][0] == "s") {
                s = s + 1;
                console.log("s");
            }
            if(btn1[count][0] == "t") {
                t = t + 1;
                console.log("t");
            }
            if(btn1[count][0] == "f") {
                f = f + 1;
                console.log("f");
            }
            if(btn1[count][0] == "p") {
                p = p + 1;
                console.log("p");
            }
            if(btn1[count][0] == "j") {
                j = j + 1;
                console.log("j");
            }
        }
        if(event.target.id == "question-btn2") {
            if(btn2[count][0] == "e") {
                e = e + 1;
                console.log("e");
            }
            if(btn2[count][0] == "i") {
                i = i + 1;
                console.log("i");
            }
            if(btn2[count][0] == "n") {
                n = n + 1;
                console.log("n");
            }
            if(btn2[count][0] == "s") {
                s = s + 1;
                console.log("s");
            }
            if(btn2[count][0] == "t") {
                t = t + 1;
                console.log("t");
            }
            if(btn2[count][0] == "f") {
                f = f + 1;
                console.log("f");
            }
            if(btn2[count][0] == "p") {
                p = p + 1;
                console.log("p");
            }
            if(btn2[count][0] == "j") {
                j = j + 1;
                console.log("j");
            }
        }

        count = count + 1;
    }
}