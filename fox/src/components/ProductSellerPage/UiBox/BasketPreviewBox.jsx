import './BasketPreviewBox.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import BasketFrame from '../../BasketPage/BasketFrame';
import BasketPreviewList from './BasketPreviewList';


const BasketPreviewBox = (props) => {

  const basketframe = useContext(BasketFrame);
  // console.log(props);

  const totalAmount = basketframe.totalAmount;
  const saleTotalPrice = basketframe.saleTotalPrice;

  const { items } = basketframe;

  const salePrice = items.salePrice;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const cartItemRemoveHandler = (id) => {
    basketframe.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    basketframe.addItem({ ...item, amount: 1 });
  };

  const basketList = (
    <div >
      {basketframe.items.map((item) => (
        <BasketPreviewList
          key={item.id}
          id={item.id}
          title={item.title}
          amount={item.amount}
          price={item.price}
          salePrice={item.salePrice}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </div>
  );

  return (
    <div className='basket_preview_box_detail_container'>

      <Link to='/BasketPage' className='from_preview_go_basket_btn'>
        장바구니로 이동하기
      </Link>
      <div className='basket_preview_total_psa'>

        <div className='basket_preview_total_amount'>
          <span>상품 개수 : </span>
          <span >{numberOfCartItems}</span>
        </div>

        <div className='basket_preview_total_price'>
          <span>상품 총 가격 : </span>
          <span>{totalAmount.toLocaleString()} </span>
          <span> 원</span>
        </div>

        <div className='basket_preview_total_salePrice'>
          <span>할인적용가 : </span>
          <span className='basket_preview_total_salePrice_num'>{saleTotalPrice.toLocaleString()}</span>
          <span> 원</span>
        </div>

        <div className='basket_preview_total_price'>
          <span>배송비 : </span>
          {totalAmount >= 20000 ? <span>무료</span> : <span>3,500 원 </span>}
        </div>

        <div className='you_buy_20000_free'>지금 20,000원 이상 구매하면 배송비 무료!</div>


      </div>


      <div className='basket_preview_list'>
        {basketList}
      </div>

    </div>
  );
};

export default BasketPreviewBox;


// 1. 프로젝트 root 경로에 리액트 라우터 설치
// => npm install react-router-dom
// => package.json 으로 버전확인 ( 6.x.x 인지 )
// => 구버전 제거 : npm uninstall react-router-dom
// => 최신버전 재설치 : npm install react-router-dom@6