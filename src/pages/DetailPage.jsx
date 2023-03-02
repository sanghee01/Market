import { useState, useContext } from "react";
import styled from "styled-components";
import Nav from "../components/main/Nav";
import { DataContext } from "../App";
import { useNavigate } from "react-router-dom";

const DetailPage = () => {

  const [detail, setDetail] = useState([]);
  
  return (
    <>
      <main className={detail.main}>

        <section className={detail.product}>
          <div className={detail.product_img}>
            <img src="assets/img/image01.jpg" alt="product" />
          </div>
        </section>

        <section className={detail.product}>
          <div className={detail.product_info}>
            <p className={detail.product_name}>아이폰 레드</p>
            <span className={detail.price}>
              120,000
              <span className={detail.unit}>원</span>
            </span>
          </div>
          <div className={detail.explain}>
            <p>올해 샀구 한번도 안뜯은 멀쩡한 아이폰 팝니다. 이런 매물 구하기 쉽지 않습니다. </p>
          </div>       
          <div className={detail.line}></div>
          <div className={detail.btn}>
            <button className={detail.btn_buy}>바로 구매</button>
          </div>
        </section>


        <section className={detail.product}>

          <div className={detail.product_img}>
            <img src="assets/img/image02.jpg" alt="product" />
          </div>

        </section>

        <section className={detail.product}>

          <div className={detail.product_info}>
            <p className={detail.product_name}>그냥 소파</p>
            <span className={detail.price}>
              1,000
              <span className={detail.unit}>원</span>
            </span>
          </div>

          <div className={detail.explain}>
            <p>사가세요. 집에 소파 하나씩은 있잖아요?? </p>
          </div>
          
          <div className={detail.line}></div>
          <div className={detail.btn}>
            <button className={detail.btn_buy}>바로 구매</button>
          </div>
        </section>

        <section className={detail.product}>

          <div className={detail.product_img}>
            <img src="assets/img/image03.jpg" alt="product" />
          </div>

        </section>

        <section className={detail.product}>

          <div className={detail.product_info}>
            <p className={detail.product_name}>송강 패딩</p>
            <span className={detail.price}>
              1,000
              <span className={detail.unit}>원</span>
            </span>
          </div>

          <div className={detail.explain}>
            <p>송강이 입었던 패딩 팝니다. 송강 좋아하시는 분들 이라면 구매 부탁드려요.  </p>
          </div>
          
          <div className={detail.line}></div>
          <div className={detail.btn}>
            <button className={detail.btn_buy}>바로 구매</button>
          </div>
        </section>

        <section className={detail.product}>

          <div className={detail.product_img}>
            <img src="assets/img/image04.jpg" alt="product" />
          </div>

        </section>

        <section className={detail.product}>

          <div className={detail.product_info}>
            <p className={detail.product_name}>맥북입니다</p>
            <span className={detail.price}>
              50,000
              <span className={detail.unit}>원</span>
            </span>
          </div>

          <div className={detail.explain}>
            <p>싸게 처분함. 개발자라면 맥북 1개 정도는!! </p>
          </div>
          
          <div className={detail.line}></div>
          <div className={detail.btn}>
            <button className={detail.btn_buy}>바로 구매</button>
          </div>
        </section>

        <section className={detail.product}>

          <div className={detail.product_img}>
            <img src="assets/img/image01.jpg" alt="product" />
          </div>

        </section>

        <section className={detail.product}>

          <div className={detail.product_info}>
            <p className={detail.product_name}>자전거 팔아요</p>
            <span className={detail.price}>
              5,000
              <span className={detail.unit}>원</span>
            </span>
          </div>

          <div className={detail.explain}>
            <p>팝니다. 댓글주세요. 가볍게 타기 좋은 자전거 입니다.  </p>
          </div>
          
          <div className={detail.line}></div>
          <div className={detail.btn}>
            <button className={detail.btn_buy}>바로 구매</button>
          </div>
        </section>
      </main>
    </>
  );
};
export default DetailPage;