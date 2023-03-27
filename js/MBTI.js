var name;
var count = 0;

function name_submit() {
    var n = document.getElementById("name").value;
    name = n;

    console.log(name);
}

function hreflink() {
    link = "result.html";
    location.href = link;
}

function btn_click() {
    var qn = ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8", "Q9", "Q10", "Q11", "Q12"];
    var question = ["새 학기가 시작되고 소모임 신청 기간이 찾아왔다!",
                    "등산 하느라 고생 많으셨어요~ 이제 회식하러 가요!",
                    "기다리고 기다렸던 산악회 MT를 왔다. 장기자랑 하실 분~?",
                    "오늘은 산악회에서 나물비빔밥 해 먹기로 한 날! 내가 담당한 건 콩나물 무치기.",
                    "‘산악회’하면 떠오르는 생각은?",
                    "오늘 처음으로 등산을 함께 한 선배가 정상에서 뉴진스의 하입보이를 춘다. 당신의 생각은?",
                    "친구한테 “나 오늘 컨디션이 안 좋아서 등산 같이 못 갈 것 같아ㅠㅠ 다른 사람들한테 좀 전해줘…” 라는 카톡이 왔다. 나의 대답은?",
                    "제가 산악회에 들어온 이유는…",
                    "아침에 등산 가기로 한 날 친구가 뛰어오면서 “어제 너무 늦게 자서 늦게 일어났어. 씻지도 못하고 드라이 샴푸로 대충 머리 정리하고 나옴 ㅋㅋ” 이라고 말한다. 나의 대답은?",
                    "등산 코스를 짜려고 하는 상황",
                    "등산 가기 위해 가방을 챙겨보자!",
                    "오늘은 기다리고 기다렸던 첫 등산! 무슨 옷 입을까?"];
    var btn1 = ["흠… 이번 학기엔 장사랑산악회까지 4개의 소모임에 등록해야겠다!",
                "가자~~~!",
                "나가면 상품 있대 저요 저요! (열심히 춤 추는 중)",
                "간을 어떻게 해야 하지? 고추장 넣을 거니까 조금만… 한 이 정도 넣으면 되겠지?",
                "산악회면 등산복도 맞춰 입나? 색깔은 노란색이면 좋을 듯. 등산복 입고 단체 사진 찍은 거 인스타에 올라가면 진짜 웃기겠다.",
                "와… 정상 와서 이거 하시려고 얼마나 준비하셨을까? 찍어서 인스타에 올릴 때 맞팔 해야겠다.",
                "헉 무슨 일 있어? 컨디션이 왜 안 좋은데? 너 상황은 전해 놓을게",
                "산악회에 들어오면 스스로 더 발전할 수 있을 것 같기 때문이에요!",
                "오 드라이 샴푸?? 그거 좋아? 근데 티 안 난다. 대박 ㅋㅋㅋ",
                "여기서 만나서 저기로 나오면 되겠지?",
                "필요할 것 같은 것들을 대충 생각해서 가방에 넣는다.",
                "음… 뭐 입지? 그냥 편한 옷 입을까?"];
    var btn2 = ["소모임… 좀 귀찮지만 그래도 안 할 순 없으니 장사랑산악회만 해야겠다!",
                "(등산도 겨우 했는데 회식까지…?) 적당한 핑계를 대고 집으로 간다.",
                "장기자랑에 나간 친구를 향해 박수 쳐 준다. (친구가 대단함)",
                "‘콩나물 무침 레시피’ 검색 후 정량대로 양념을 한다.",
                "서달산, 회장은 장우영, 글미의 비공식 소모임, 미라클 모닝, 등산 재미있겠다.",
                "와… 잘 춘다. 여기 처음 보는 얼굴도 많은데 대단하시네.",
                "헉 같이 못 가서 너무 아쉽다ㅜㅜ 알겠어… 전해줄게",
                "산악회에는 제가 좋아하는 사람들이 많기 때문이에요!",
                "그래도 시간은 겨우 맞춰 왔네. 어제 늦게 자서 피곤하겠다. 근데 머리는 좀 감고 오지 ㅋㅋㅋ",
                "분 단위로 플랜 B까지 생각해본다.",
                "왼쪽 상단 주머니에는 물티슈, 사이드 주머니에는 물병, 혹시 모르니 여분 양말…etc.",
                "어제 골라둔 옷을 입는다."];

    if(count == 11) {
        document.getElementById("question-num").innerHTML = "";
        document.getElementById("question").innerHTML = "결과가 궁금하나요?!";
        document.getElementsByClassName("q-answer-btn")[0].style.visibility = "hidden";
        document.getElementById("question-btn2").innerHTML = "결과 보러 가기";
        console.log(name);

        count = count + 1;
    }
    else if(count == 12) {
        window.location.href="result.html";
    }
    else {
        document.getElementById("question-num").innerHTML = qn[count+1];
        document.getElementById("question").innerHTML = question[count+1];
        document.getElementById("question-btn1").innerHTML = btn1[count+1];
        document.getElementById("question-btn2").innerHTML = btn2[count+1];
        console.log(name);

        count = count + 1;
    }
}

function name_show() {
    document.getElementById("namesh").innerHTML=name;
    console.log(name);
}