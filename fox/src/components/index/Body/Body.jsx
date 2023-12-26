
import './Body.css';
import { useState, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';

// index body
import IndexBody from './Index/IndexBody/IndexBody';
import EventPage from '../../ProductSellerPage/EventPage';
import EventPageItemContent from './Index/IndexBody/EventPageItemContent';

// Header--usersupport
import SearchResultPage from './Index/IndexBody/SearchResultPage';

// Customer_service
// import CustomerService from './CustomerService/CustomerService';
import CustomerServiceCategory from './CustomerService/CustomerServicePage/CustomerServiceCategory';

// footer
import Advertisement from '../Footer/Footer_menu/Advertisement';
import CompanyIntroduce from '../Footer/Footer_menu/CompanyIntroduce';
import PartnershipMarketing from '../Footer/Footer_menu/PartnershipMarketing';
import PersonalInformationPolicyInfo from '../Footer/Footer_menu/PersonalInformationPolicyInfo';
import TermsAndConditions from '../Footer/Footer_menu/TermsAndConditions';
import YouthPolicyInfo from '../Footer/Footer_menu/YouthPolicyInfo'


/* 해림 : 상세, 결제 페이지 */
import DetailPage from '../../detailPage/DetailPage';
import PaymentPage from '../../paymentPage/PaymentPage';
import Payment_server from '../../paymentPage/Payment_server';

/* AJH */
import LogIn from '../../log_in/LogIn';
import JoinMembership from '../../join_membership/JoinMembership';
import UserInfo from '../../MyPage/UserInfo';
import MyPage from '../../MyPage/MyPage';
import JoinMembershipServer from '../../join_membership/JoinMembershipServer';
import Mail from '../../join_membership/terms_of_sevice/Mail';
import Community from '../../join_membership/terms_of_sevice/Community';
import Newsletter from '../../join_membership/terms_of_sevice/Newsletter';
import Privacy from '../../join_membership/terms_of_sevice/Privacy';
import PrivacySelect from '../../join_membership/terms_of_sevice/PrivacySelect';
import TextMessage from '../../join_membership/terms_of_sevice/TextMessage';
import Use from '../../join_membership/terms_of_sevice/Use';


// 성룡
import AsaySellerPage from '../../ProductSellerPage/AsaySellerPage';
import BestSellerPage from '../../ProductSellerPage/BestSellerPage';
import FantasySellerPage from '../../ProductSellerPage/FantasySellerPage';
import ForeignSellerPage from '../../ProductSellerPage/ForeignSellerPage';
import InternalSellerPage from '../../ProductSellerPage/InternalSellerPage';
import NovelSellerPage from '../../ProductSellerPage/NovelSellerPage';
import SteadySellerPage from '../../ProductSellerPage/SteadySellerPage';
import OrderListPage from '../../OrderListPage/OrderListPage';
import BasketPage from '../../BasketPage/BasketPage';
import CustomerServiceNoticeContent from './CustomerService/CustomerServicePage/CustomerServiceNoticeContent';
import ItemPage from '../../ProductSellerPage/ItemPage';



function Body() {
    const [detailPage_data, setDetailPage_data] = useState();

    return (
        <div className="body">
            <detailPage_data_context.Provider value={detailPage_data}>
                <Routes>
                    {/* Header */}
                    {/* Logo */}
                    <Route path='/' element={<IndexBody />}></Route>

                    {/* Body */}

                    {/* 검색결과 페이지 */}
                    <Route path='/SearchResultPage' element={<SearchResultPage />}></Route>

                    {/* 도서용품 페이지 */}
                    <Route path='/ItemPage' element={<ItemPage />}></Route>

                    {/* 이벤트 페이지 */}
                    <Route path='/EventPage' element={<EventPage />}></Route>
                    <Route path='/EventPageItemContent/:id' element={<EventPageItemContent />}></Route>

                    {/* customer_service */}
                    <Route path='/CustomerServiceCategory/*' element={<CustomerServiceCategory />}></Route>
                    <Route path='/CustomerServiceContent/:no' element={<CustomerServiceNoticeContent />}></Route>


                    {/* 해림 : 상세, 결제 페이지 */}
                    <Route path='/DetailPage/:id' element={<DetailPage setDetailPage_data={setDetailPage_data} />}></Route>
                    <Route path='/PaymentPage' element={<PaymentPage />}></Route>
                    <Route path='/Payment_server' element={<Payment_server />}></Route>


                    {/* AJH */}
                    <Route path='/LogIn' element={<LogIn />}></Route>
                    <Route path='/JoinMembership' element={<JoinMembership />}></Route>
                    <Route path='/MyPage' element={<MyPage />}></Route>
                    <Route path='/UserInfo' element={<UserInfo />}></Route>
                    <Route path='/Mail' element={<Mail />}></Route>
                    <Route path='/Community' element={<Community />}></Route>
                    <Route path='/Newsletter' element={<Newsletter />}></Route>
                    <Route path='/Privacy' element={<Privacy />}></Route>
                    <Route path='/PrivacySelect' element={<PrivacySelect />}></Route>
                    <Route path='/TextMessage' element={<TextMessage />}></Route>
                    <Route path='/Use' element={<Use />}></Route>
                    <Route path='/JoinMembershipServer' element={<JoinMembershipServer />}></Route>

                    {/* 성룡 */}
                    <Route path='/OrderListPage' element={<OrderListPage />}></Route>
                    <Route path='/BasketPage' element={<BasketPage />}></Route>
                    <Route path='/AsaySellerPage' element={<AsaySellerPage />}></Route>
                    <Route path='/BestSellerPage' element={<BestSellerPage />}></Route>
                    <Route path='/FantasySellerPage' element={<FantasySellerPage />}></Route>
                    <Route path='/ForeignSellerPage' element={<ForeignSellerPage />}></Route>
                    <Route path='/InternalSellerPage' element={<InternalSellerPage />}></Route>
                    <Route path='/NovelSellerPage' element={<NovelSellerPage />}></Route>
                    <Route path='/SteadySellerPage' element={<SteadySellerPage />}></Route>

                    {/* Footer */}
                    {/* menu */}
                    <Route path='/CompanyIntroduce' element={<CompanyIntroduce />}></Route>
                    <Route path='/TermsAndConditions' element={<TermsAndConditions />}></Route>
                    <Route path='/PersonalInformationPolicyInfo' element={<PersonalInformationPolicyInfo />}></Route>
                    <Route path='/YouthPolicyInfo' element={<YouthPolicyInfo />}></Route>
                    <Route path='/PartnershipMarketing' element={<PartnershipMarketing />}></Route>
                    <Route path='/Advertisement' element={<Advertisement />}></Route>
                </Routes>
            </detailPage_data_context.Provider>
        </div>
    );
}

export default Body;
export const detailPage_data_context = createContext(null);