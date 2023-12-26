import './SellerProductFormToBasket.css';
import { useRef, useState } from 'react';
// import { Link } from 'react-router-dom';
import AmountInput from './AmountInput';

const SellerProductFormToBasket = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
  };

  //=============================================================================================

  const goToBasket = (event) => {                         //장바구니
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  //==========================================================================================================

  const goToPay = (event) => {                            // 결제페이지
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onPostToPay(enteredAmountNumber);
  };

  const migu = () => {
    alert(`현재 서버내 바이러스 버그가 발생하여 홈페이지 구현에 큰 차질이 빚어지고 있습니다. 고객 여러분들께 불편을 드려 대단히 죄송합니다.`);
  }





  return (
    <div className='seller_product_form_container'>
      <form onSubmit={submitHandler}>
        <AmountInput
          ref={amountInputRef}
          label='Amount'
          input={{
            id: 'amount_' + props.id,
            type: 'number',
            min: '1',
            step: '1',
            defaultValue: '1',
          }}
        />
        <hr />
        <div>
          <button onClick={goToBasket} className='seller_product_addcart_btn' >장바구니에 담기</button>
          <button onClick={migu} className='seller_product_payment_btn' >결제하기</button>
        </div>
      </form>
    </div>
  );
};

export default SellerProductFormToBasket;
