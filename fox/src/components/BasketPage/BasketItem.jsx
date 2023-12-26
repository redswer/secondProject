import { Link } from 'react-router-dom';
import './BasketItem.css';

const BasketItem = (props) => {

  const migu = () => {
    alert(`현재 서버내 바이러스 버그가 발생하여 홈페이지 구현에 큰 차질이 빚어지고 있습니다. 고객 여러분들께 불편을 드려 대단히 죄송합니다.`);
  }

  // let salePrice = (props.price * (100 - props.salePer)) / 100;

  return (
    <>

      <div className='basket_product_list'>
        <div className='col-product_title_item'>
          <img src={props.image} alt="image" />
          <div className='col-product_tfc'>

            <div>
              <span className='basket__title'>{props.title}</span>
            </div>

            <div className='basket__fc'>
              <span className='basket__from'>{props.from}</span>
              <span className='basket__category'>{props.category}</span>
            </div>
          </div>

        </div>

        <div className='col-product_price_item'>
          <div className="col-product_price_origin">
            <div>상품 가격 : {props.price.toLocaleString()} 원</div>
          </div>
          <div className="col-product_price_saled">
            <span>할인가 : </span>
            <span className='col-product_price_saled_num'>{props.salePrice.toLocaleString()}</span>
            <span>원</span>
          </div>
        </div>

        <div className='col-product_amount_item'>
          <button onClick={props.onRemove}>-</button>
          <span className='col-product_amount_num'>{props.amount}</span>
          <button onClick={props.onAdd}>+</button>
        </div>


        <div className='col-product_del-info_item' >
          <div className="division-delivery">
            <span>배송금액 </span>
            <span> : </span>
            {props.totalAmount >= 20000 ? <span>무료</span> : <span>3,500 원</span>}
          </div>
        </div>

        <div className='col-product_btn_item'>
          <div className="divisionorder">
            <div className='divivi1'>
              <button onClick={migu}>주문하기</button>
              {/* <button><Link to='/PaymentPage'>주문하기</Link></button> */}
            </div>
            <div className='divivi2'>
              <button onClick={migu}>삭제</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasketItem;
