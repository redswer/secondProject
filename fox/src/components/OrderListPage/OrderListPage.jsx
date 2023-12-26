import './OrderListPage.css';
import OrderListDateSelect from './OrderListDateSelect';
import OrderListProductCard from './OrderListProductCard';
import OrderListDelProCau from './OrderListDelProCau';
// import { Link } from 'react-router-dom';
import BasketFrame from '../BasketPage/BasketFrame';
import { useContext } from 'react';

function OrderListPage() {

    // 나의 것이오=============================================
    const order = useContext(BasketFrame);
    const totalAmount = +order.totalAmount;
    const saleTotalPrice = +order.saleTotalPrice;

    const orderlist = (
        <div >
            {order.items.map((item) => (
                <OrderListProductCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    writer={item.writer}
                    amount={item.amount}
                    type={item.type}
                    image={item.image}
                    compiler={item.compiler}
                    from={item.from}
                    category={item.category}
                    salePer={item.salePer}
                    salesRate={item.salesRate}
                    salePrice={item.salePrice}
                    totalAmount={totalAmount}
                    saleTotalPrice={saleTotalPrice}
                />
            ))}
        </div>
    );

    return (

        <div className="order_list_page_container">

            <OrderListDateSelect />


            <div className='order_list_head_box'>
                <div className="order_list_head_date_number">주문 일자 / 번호</div>
                <div className="order_list_head_product_infomation">상품 정보</div>
                <div className="order_list_head_price_amount">가격 / 수량</div>
                <div className="order_list_head_delivery-state">배송 상태</div>
                <div className="order_list_head_cancel_btn">주문 취소</div>
            </div>


            <div>
                {orderlist}
            </div>




            <OrderListDelProCau />

        </div>
    );
}

export default OrderListPage;