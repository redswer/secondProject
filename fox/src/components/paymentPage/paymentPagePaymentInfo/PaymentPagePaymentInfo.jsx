import './PaymentPagePaymentInfo.css';
import { ReactComponent as Icon } from './order_name_icon.svg';
import { useContext } from "react";
import { detailPage_data_context } from '../../index/Body/Body';

function PaymentPagePaymentInfo({coupon_put}) {

    const detailPage_data_props = useContext(detailPage_data_context);

    const { price, salePer, selected_quantity } = detailPage_data_props[0];

    let delivery_price;

    if(((price - (price * salePer / 100)) * selected_quantity) >= 20000 ) {
        delivery_price = 0;
    } else {
        delivery_price = 3500
    }
    return (
        <div className="order_sum_con_R">
            <div className="order_sumName_box_R d-flex">
                <span>
                    <Icon className="order_name_icon" />
                    <span className="order_name_design">총 결제금액</span>
                </span>
                <span className="order_sum order_name_design">{((((price * selected_quantity) - ((price * salePer / 100)) * selected_quantity)) - coupon_put + delivery_price).toLocaleString()}원</span>
            </div>

            <table className="order_sum_tb_R">
                <tr>
                    <td>총 상품금액</td>
                    <td>{(price * selected_quantity).toLocaleString()}원</td>
                </tr>
                <tr>
                    <td>상품 할인</td>
                    <td>{((price * (salePer / 100)) * selected_quantity).toLocaleString()}원</td>
                </tr>
                <tr>
                    <td>쿠폰/포인트 할인</td>
                    <td>{coupon_put.toLocaleString()}원</td>
                </tr>
                <tr>
                    <td>배송료</td>
                    {
                        ((price - (price * salePer / 100)) * selected_quantity) >= 20000 ?
                        <td>{delivery_price.toLocaleString()}원</td>
                        :
                        <td>{delivery_price.toLocaleString()}원</td>
                    }
                </tr>
            </table>
        </div>
    );
}

export default PaymentPagePaymentInfo;