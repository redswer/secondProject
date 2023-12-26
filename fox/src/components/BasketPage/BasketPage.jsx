import './BasketPage.css';
import { useContext, useState, useEffect } from 'react';
import BasketItem from './BasketItem';
import BasketFrame from './BasketFrame';
import { Link } from 'react-router-dom';
import BasketEtcBox from './BasketEtcBox';
import CategoryMiniBox from './CategoryMiniBox';




const BasketPage = () => {


  // 나의 것이오=============================================
  const basketframe = useContext(BasketFrame);
  const totalAmount = +basketframe.totalAmount;
  const saleTotalPrice = +basketframe.saleTotalPrice;

  const cartItemRemoveHandler = (id) => {
    basketframe.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    basketframe.addItem({ ...item, amount: 1 });
  };

  const basketList = (
    <div >
      {basketframe.items.map((item) => (
        <BasketItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          writer={item.writer}
          amount={item.amount}
          type={item.type}
          image={item.image}
          intro_image={item.intro_image}
          publisher={item.publisher}
          publishDate={item.publishDate}
          compiler={item.compiler}
          from={item.from}
          category={item.category}
          salePer={item.salePer}
          salesRate={item.salesRate}
          salePrice={item.salePrice}
          rank={item.rank}
          totalAmount={totalAmount}
          summary={item.summary}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}

        />
      ))}
    </div>
  );// 나의 것이오=============================================================

  const migu = () => {
    alert(`현재 서버내 바이러스 버그가 발생하여 홈페이지 구현에 큰 차질이 빚어지고 있습니다. 고객 여러분들께 불편을 드려 대단히 죄송합니다.`);
  }


  //===========================================================================


  return (
    <div className='basket_top_level_container'>
      <h1>장바구니 페이지</h1>
      <span>구매하실 상품목록들을 확인하실 수 있는 페이지입니다.</span>
      <div className='basketlist_list_container'>

        <div className='basketlist_head'>
          <div className="col-product_title">상품명</div>
          <div className="col-product_price">상품 가격</div>
          <div className="col-product_amount">수량</div>
          <div className="col-product_del-info">배송비</div>
          <div className="col-product_btn">주문하기 / 삭제</div>
        </div>

        <div>
          {basketList}
        </div>


      </div>

      <div className='basket_total_sum_container'>
        <div className='basket_figure_flex_box'>
          <figure className='basket_total_sum_figure'>
            <table className="basket_total_sum_table">
              <tbody>
                <tr>
                  <td>현재 총 상품 금액 </td>
                  <td> : </td>
                  <td>{totalAmount.toLocaleString()} 원</td>
                </tr>

                <tr>
                  <td>할인 적용 총 금액</td>
                  <td> : </td>
                  <td>{saleTotalPrice.toLocaleString()} 원</td>
                </tr>

                <tr className='trLine_basket'>
                  <td>배송금액</td>
                  <td> : </td>
                  {totalAmount >= 20000 ? <td>무료</td> : <td>3,500 원</td>}
                </tr>

                <tr>
                  <td className='basket_final_payment_price'>최종 결제 금액</td>
                  <td> : </td>
                  {saleTotalPrice >= 20000 ?
                    <td>
                      <span className='basket_final_payment_price'>{saleTotalPrice.toLocaleString()}</span>
                      <span> 원</span>
                    </td>
                    :
                    <td>
                      <span className='basket_final_payment_price'>{(3500 + saleTotalPrice).toLocaleString()}</span>
                      <span> 원</span>
                    </td>}
                </tr>

              </tbody>
            </table>
          </figure>

          <CategoryMiniBox />
        </div>

        <div className='basket_final_product_order_btn_box'>

          <Link to='/'><button className='basket_final_product_order_btn_1'>계속 쇼핑하기</button></Link>

          <button className='basket_final_product_order_btn_2' type='button' onClick={migu}>주문하기</button>

        </div>

      </div>

      <div>
        <BasketEtcBox />
      </div>

    </div>
  );
};

export default BasketPage;


// 1. 프로젝트 root 경로에 리액트 라우터 설치
// => npm install react-router-dom
// => package.json 으로 버전확인 ( 6.x.x 인지 )
// => 구버전 제거 : npm uninstall react-router-dom
// => 최신버전 재설치 : npm install react-router-dom@6

// import { useContext } from "react";
// import { detailPage_data_context } from '../../index/Body/Body';
//
// const detailPage_data_props = useContext(detailPage_data_context);