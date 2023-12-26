import './SellerProductCard.css';
import { useContext, useState, useEffect } from 'react';
import SellerProductFormToBasket from './SellerProductFormToBasket';
import BasketFrame from '../../BasketPage/BasketFrame';
import BuyItemFrame from '../../BuyTruck/BuyItemFrame';
// import SellerProductFormToPayment from './SellerProductFormToPayment';
import { Link } from 'react-router-dom';


const SellerProductCard = (props) => {
  // 남바 라이징 애니메이션 코드 ==========================================
  const [countRate, setCount] = useState(0);
  const targetNumber = props.salesRate; // 최종 도달 숫자
  const animationDuration = 2000; // 애니메이션 시간 (밀리초)
  const increment = targetNumber / (animationDuration / 10); // 10ms마다 증가할 숫자

  useEffect(() => {
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / animationDuration, 1);

      const newValue = Math.floor(progress * targetNumber);
      setCount(newValue);

      if (progress >= 1) {
        clearInterval(interval);
      }
    }, 10);

    return () => clearInterval(interval);
  }, []); // ============================================================



  const basketframe = useContext(BasketFrame);

  const salePrice = ((props.price * (100 - props.salePer)) / 100);

  const addToCartHandler = amount => {
    basketframe.addItem({
      id: props.id,
      title: props.title,
      amount: amount,
      price: props.price,
      type: props.type,
      from: props.from,
      category: props.category,
      key: props.id,
      writer: props.writer,
      type: props.type,
      image: props.image,
      salePer: props.salePer,
      salesRate: props.salesRate,
      salePrice: ((props.price * (100 - props.salePer)) / 100),
    });
  };

  const buyframe = useContext(BuyItemFrame);

  const postToPaymentHandler = amount => {
    buyframe.postItem({
      id: props.id,
      title: props.title,
      amount: amount,
      price: props.price,
      type: props.type,
      from: props.from,
      category: props.category,
      key: props.id,
      writer: props.writer,
      type: props.type,
      image: props.image,
      salePer: props.salePer,
      salesRate: props.salesRate,
      salePrice: ((props.price * (100 - props.salePer)) / 100),
    });
  };

  const [fromLink, setFromLink] = useState('');
  const [cateLink, setCateLink] = useState('');
  const [typeLink, setTypeLink] = useState('');


  const isFrom = () => {
    if (props.from === '국내') {
      setFromLink('/InternalSellerPage');
    } else if (props.from === '해외') {
      setFromLink('/ForeignSellerPage');
    }
  }

  const isCate = () => {
    if (props.category === '판타지') {
      setCateLink('/FantasySellerPage');
    } else if (props.category === '소설') {
      setCateLink('/NovelSellerPage');
    } else if (props.category === '에세이') {
      setCateLink('/AsaySellerPage');
    }
  }

  const isType = () => {
    if (props.type === 'best') {
      setTypeLink('/BestSellerPage');
    } else if (props.type === 'steady') {
      setTypeLink('/SteadySellerPage');
    }
    // else if (props.type === 'recommend') {
    //   setTypeLink('/SteadySellerPage');
    // }
  }

  return (
    <div>
      <div className="seller_product_card_container">

        <div>
          <Link to={`/DetailPage/${props.id}`}><img src={props.image} alt="이미지" /></Link>
        </div>

        <div className="seller_product_infomation">
          <div className='seller_product_rtfc_box'>
            <Link to={`/DetailPage/${props.id}`}><span className="seller_product_rank">{props.rank + 1}</span></Link>
            <Link to={`/DetailPage/${props.id}`}><span className="seller_product_title">{props.title}</span></Link>

            <Link to={fromLink}><button className="seller_product_from" onClick={isFrom}>{props.from}</button></Link>
            <Link to={cateLink}><button className="seller_product_category" onClick={isCate}>{props.category}</button></Link>
            <Link to={typeLink}><button className="seller_product_type" onClick={isType}>
              {props.type === 'best' ? '베스트셀러' : '스테디셀러'}
            </button></Link>
          </div>

          <div>
            <span className='seller_product_writer'>{props.writer}</span>
            <span className="seller_compiler_name">{props.compiler}</span>
          </div>

          <Link to={`/DetailPage/${props.id}`}><div className="seller_product_explain">{props.summary}</div></Link>

        </div>

        <div className="seller_product_sell_sub_infomation">

          <div className="seller_publisher_box">
            <span className="seller_publisher_name">{props.publisher}</span>
            <span>|</span>
            <span className="seller_publisher_date">{props.publishDate}</span>
          </div>

          <hr />

          <div className="seller_product_expense">

            <div className='seller_product_pricebox'>
              <span>상품 가격 : </span>
              <span className='seller_product_price'>{props.price.toLocaleString()}</span>
              <span> 원</span>
            </div>

            <div className='seller_product_saleperbox'>
              <span>할인 적용가 : </span>
              <span className="seller_product_saleper">{salePrice.toLocaleString()}</span>
              <span> 원</span>

            </div>
          </div>

          <hr />

          <div className='seller_product_sales_rate_box'>
            <span className='product_sales_rate_1'>누적 판매량</span>
            <span className='product_sales_rate_1'> : </span>
            <span className='product_sales_rate'>{countRate.toLocaleString()}</span>
            <span className='product_sales_rate_3'> 권</span>
          </div>

          <hr />

          <div>
            <SellerProductFormToBasket id={props.id}
              onAddToCart={addToCartHandler}
              onPostToPay={postToPaymentHandler} />
          </div>
        </div>

      </div>
      <hr className='seller_product_division_hr' />

    </div>
  );
};

export default SellerProductCard;
