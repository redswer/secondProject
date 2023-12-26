// import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './CustomerServiceCategory.css';
import CustomerServiceFaq from './CustomerServiceFaq';
import CustomerServiceMailInquires from './CustomerServiceMailInquires';
import CustomerServiceNotice from './CustomerServiceNotice';
import CustomerServiceNoticeContent from './CustomerServiceNoticeContent';



function CustomerServiceCategory() {
    // const { id } = useParams();
    // const notice_content = useContext(notice_list_context);
    // const notice_content_selected = notice_content.find(notice => notice.id === parseInt(id));

    
    // console.log(notice_content);
    // console.log(notice_content_selected);
    // console.log(notice_content_selected.id);
    // const book_data = useContext(book_list_context);

    // const book_data_selected = book_data.find(book => book.id === parseInt(id));
    // console.log(book_data_selected.id);

    return (
        <div className="customer_service_category">
            <h2>고 객 센 터</h2>
            <div className="customer_service_notice-faq-mail">
                <button className='btn_notice'>
                    <Link to='/CustomerServiceCategory/CustomerServiceNotice' className='customer_service_notice'>공지사항</Link>
                </button>
                <button className='btn_faq'>
                    <Link to='/CustomerServiceCategory/CustomerServiceFaq' className='customer_service_faq'>FAQ</Link>
                </button>
                <button className='btn_mail'>
                    <Link to='/CustomerServiceCategory/CustomerServiceMailInquires' className='customer_service_mail'>1:1 문의</Link>
                </button>
            </div>
            <Routes>
                <Route path='/CustomerServiceNotice' element={<CustomerServiceNotice />}></Route>
                <Route path='/CustomerServiceFaq' element={<CustomerServiceFaq />}></Route>
                <Route path='/CustomerServiceMailInquires' element={<CustomerServiceMailInquires />}></Route>
                {/* <Route path='/CustomerServiceNoticeContent/:id' element={<CustomerServiceNoticeContent />}></Route> */}
                <Route path='/CustomerServiceNoticeContent/:id' element={<CustomerServiceNoticeContent />}></Route>
            </Routes>
        </div>
    );
}

export default CustomerServiceCategory;
