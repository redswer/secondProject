import { useContext } from "react";
import { detailPage_data_context } from '../../index/Body/Body';

function PaymentPageOrderProductAdd() {

    const detailPage_data_props = useContext(detailPage_data_context);

    const { title, image, price, salePer, selected_quantity } = detailPage_data_props[0];

    return (
        <tr>
            <td>
                <img className="order_book_img" src={image} alt="책 이미지" />
            </td>
            <td>{title}</td>
            <td>{price.toLocaleString()}원</td>
            <td>{(price - (price * salePer / 100)).toLocaleString()}원</td>
            <td>{selected_quantity}</td>
            <td>{((price - (price * salePer / 100)) * selected_quantity).toLocaleString()}원</td>
        </tr>
    );
}

export default PaymentPageOrderProductAdd;