import './OrderListProductCard.css';
import { useState } from 'react';
import OrderListBedalModal from './OrderListBedalModal';


function OrderListProductCard(props) {
    const t = new Date();

    const today = `${t.getFullYear()} - ${t.getMonth() + 1} - ${Number(t.getDate())}`;

    // const tomorrow = `${t.getFullYear()} - ${t.getMonth() + 1} - ${Number(t.getDate()) + 1}`;

    const price = props.price;
    let salePrice = (props.price * (100 - props.salePer)) / 100;


    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const length = 4; // 원하는 문자열 길이
    let randordnum = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randordnum += characters.charAt(randomIndex);
    }

    const n1 = Math.floor(Math.random() * 9);
    const n2 = Math.floor(Math.random() * 9) + 1;
    const n3 = Math.floor(Math.random() * 9) + 1;
    const n4 = Math.floor(Math.random() * 9) + 1;
    const n5 = Math.floor(Math.random() * 9);
    const n6 = Math.floor(Math.random() * 9) + 1;
    const n7 = Math.floor(Math.random() * 9);
    const n8 = Math.floor(Math.random() * 9);

    const migu = () => {
        alert(`현재 서버내 바이러스 버그가 발생하여 홈페이지 구현에 큰 차질이 빚어지고 있습니다. 고객 여러분들께 불편을 드려 대단히 죄송합니다.`);
    }


    return (
        <div className='order_list_product_card_container'>

            <div className='order_list_item_date_number'>
                <div>
                    2023 - 08 - 24
                </div>

                <div>
                    {`${randordnum}${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}`}
                </div>
            </div>



            <div className='order_list_item_product_infomation'>
                <div>
                    <img src={props.image} alt="image" />
                </div>

                <div className='order_list_item_title'>{props.title} </div>

                <div className='order_list_item_from'>{props.from}</div>
                <div className='order_list_item_category'>{props.category}</div>

            </div>

            <div className='order_list_item_price_amount'>

                <div>
                    <span>상품 가격 : </span>
                    <span>{price}</span>
                    <span> 원</span>
                </div>

                <div>
                    <span>할인가 : </span>
                    <span className='col-product_price_saled_num'>{salePrice}</span>
                    <span> 원</span>
                </div>

                <div>
                    <span>수량 : </span>
                    <span >{props.amount}</span>
                </div>

            </div>

            <div className='order_list_item_delivery-state'>
                <div> 배송중 </div>

                <OrderListBedalModal
                />

            </div>


            <div className='order_list_item_cancel_btn' >
                <button onClick={migu}>주문 취소</button>
            </div>


        </div >
    );
};





export default OrderListProductCard;