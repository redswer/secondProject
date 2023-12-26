import './PaymentPage.css';
import PaymentPageOrderProduct from './PaymentPageOrderProduct';
import PaymentPageAddress from './PaymentPageAddress';
import PaymentPageCoupon from './PaymentPageCoupon';
import PaymentPagePaymentType from './PaymentPagePaymentType';
import SideButton from '../SideButton';

function PaymentPage() {

    return (
        <div className='PaymentPage'>
            <PaymentPageOrderProduct />
            <PaymentPageAddress />
            <PaymentPageCoupon />
            <PaymentPagePaymentType />
            <SideButton />
        </div>
    );
}

export default PaymentPage;