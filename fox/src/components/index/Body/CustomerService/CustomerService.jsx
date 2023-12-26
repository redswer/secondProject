import { Routes, Route } from "react-router-dom";
import CustomerServiceCategory from "./CustomerServicePage/CustomerServiceCategory";
import CustomerServiceFaq from "./CustomerServicePage/CustomerServiceFaq";
import CustomerServiceMailInquires from "./CustomerServicePage/CustomerServiceMailInquires";
import CustomerServiceNotice from "./CustomerServicePage/CustomerServiceNotice";

function CustomerService() {
    return (
        <div>
            <h2>anjrh</h2>
            <Routes>
                <Route path='/CustomerServiceCategory' element={<CustomerServiceCategory />}></Route>
            </Routes>
        </div>
    );
}

export default CustomerService;