import React from "react";
import styled from "styled-components";

const CONTAINER = styled.div`
  margin-left:70px;
  margin-top:70px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border: 2px solid rgba(150,150,150,0.1);
  width: 1150px;
  height: 510px;
  `
const CONTENT = styled.div`
  margin-top:30px;
`
const NAME = styled.div`
  width:1050px;
  height:80px;
  border-bottom: 3px solid rgba(150,150,150,0.5);
  margin-left:40px;
`
const INFO = styled.div`
  margin-left:50px;
`

function CheckPayment(){

    return(
        <>
        <div>
            <CONTAINER>
                <CONTENT>
                    <NAME>
                        <span style={{color:'#7D3838',fontSize:"50px"}}>결제가 완료</span>
                        <span style={{fontSize:"50px"}}>되었습니다</span>
                    </NAME>
                    <INFO>
                        <div><span>상품명</span> <span>아이셔 레몬맛외 3개</span></div>
                        <div><span>픽업장소</span><span>CS25 충무로역점</span></div>
                        <div><span>주문번호</span><span>AB3312312B232</span></div>
                        <div><span>주문일자</span><span>2023/11/02 11:37</span></div>
                        <div><span>결제수단</span><span>신용/체크카드</span></div>
                    </INFO>
                    <div>
                        <div><span>총 주문 금액 6000원 - 포인트 사용 2000원</span><span> / 적립된 포인트 200원</span></div>
                        <div><span>총 결제 금액</span><span> 4000원</span></div>
                    </div>
                    <div>
                    <button>확인</button>
                    </div>
                </CONTENT>
            </CONTAINER>
        </div>
        </>
    )
}

export default CheckPayment;