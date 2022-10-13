//jQuery
$(function(){
    //닫기 버튼
    $("#close_banner").click(function(){
        $("#banner").addClass("d-none");
    })

    // 장바구니 버튼
    // cart 버튼 누르면, 주문상품의 상품명, 수랑, 가격을 업데이트한다.
    // 그리고 나서 결제창으로 이동할 것인지 확인한다.
    $("#cart").click(function(){
        // 서버 전송을 목적으로 데이터를 생성
        var order = {
            buyItem : "보타닉가든 오발플레이트 24cm",
            buyCount : 1,
            buyPrice : 22600
        }
        // .prompt() : 사용자에게 입력창을 띄우는 내장객체 메소드 [오래된 메소드] => form을 이용
        // .confirm() : 확인 true, 취소 false로 의사선택창을 띄움
        var userChoice = confirm("장바구니에 담았습니다, 결제창으로 이동하시겠습니까?");
        userChoice ? location.href = "/payment" :null;
    })
})