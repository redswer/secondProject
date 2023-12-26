import './DetailPageBook.css';
import { Link } from "react-router-dom";
import React, { useState } from 'react';

function DetailPageBook({ book_data_selected, setDetailPage_data }) {
    /* const book_data = useContext(book_list_context_01);
    const { id } = useParams();
    const findBook = book_data.find(book => book.id === parseInt(id)); */

    const { title, writer, image, publisher, compiler, price, salePer } = book_data_selected;

    // 배송예정일
    const deliveryDate = new Date();


    // 수량에 따른 합계 금액 출력
    const [selected_quantity, setSelected_quantity] = useState(1);

    const quantity_sum = selected_quantity * (price - (price * salePer / 100));

    const onChange_quantity = (e) => {
        setSelected_quantity(parseInt(e.target.value));
    }

    const salePercentage = salePer === '' ? 0 : parseFloat(salePer);

    const detailPage_data_delivery = () => {
        setDetailPage_data([{
            ...book_data_selected,
            selected_quantity: selected_quantity
        }]);
    }


    return (
        <div className="book d-flex">
            <div className="book_img">
                <img className="book_img_01" src={image} alt="book" />
            </div>

            <div className="book_info_box d-flex">
                <div className="book_name_box">
                    <strong className="book_name">{title}</strong>
                    {
                        publisher ?
                            <strong className='book_author'>{writer} (지은이),</strong>
                            :
                            ''
                    }

                    {
                        publisher && compiler !== '' ?
                            <strong className='book_compiler'>{compiler} (옮긴이),</strong>
                            :
                            ''
                    }

                    {
                        publisher ?
                            <strong className='book_publishingHouse'>{publisher} (출판사)</strong>
                            :
                            ''
                    }


                </div>
                <div className='book_info_box_line'>
                    <hr className='DetailPage_line' />
                </div>

                <div className="book_info">
                    <div className="book_info_01 d-flex">
                        <div className="book_info_01_L">정가</div>
                        <div className="book_info_01_R"
                        style={{textDecoration: salePer ? 'line-through' : 'none'}}>{price.toLocaleString()}원</div>
                    </div>

                    <div className="book_info_02 d-flex">
                        <div className="book_info_02_L">판매가</div>
                        <div className="book_info_02_R">
                            <span className="book_info_02_pri">{(price - (price * (salePercentage / 100))).toLocaleString()}원</span>
                            <span className="book_info_02_dis">&#40; {salePercentage}%, {(price * (salePercentage / 100)).toLocaleString()}원 할인 &#41;</span>
                        </div>
                    </div>

                    {
                        publisher ?
                            <div className="book_info_03 d-flex" >
                                <div className="book_info_03_L">전자책</div>
                                <div className="book_info_03_R">10,000원</div>
                            </div>
                            :
                            <div className="book_info_03 d-flex" >
                                <div className="book_info_03_L">제조사</div>
                                <div className="book_info_03_R">주식회사 여우</div>
                            </div>
                    }

                    <div className="book_info_04 d-flex">
                        <div className="book_info_04_L">배송료</div>
                        {
                            quantity_sum >= 20000 ?
                                <div className="book_info_04_R" >무료</div>
                                :
                                <div className="book_info_04_R">3,500원</div>
                        }

                    </div>

                    <div className="book_info_05 d-flex">
                        <div className="book_info_05_L">배송예정일</div>
                        <div className="book_info_05_R">
                            내일({deliveryDate.getMonth() + 1}/{deliveryDate.getDate() + 1}) 도착예정
                        </div>
                    </div>

                    <div className="book_info_06 d-flex">
                        <div className="book_info_06_L">수량</div>
                        <div className="book_info_06_R d-flex">
                            <select className='quantity' min='1' onChange={onChange_quantity} value={selected_quantity}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                            <p className='quantity_sum_box'>
                                총 상품금액 <span className='quantity_sum_price'>{quantity_sum.toLocaleString()}</span>원
                            </p>
                        </div>
                    </div>
                </div>

                <div className="book_info_07 d-flex">
                    <div className="book_info_07_L">
                        <Link to='/' className="basket" onClick={(e) => e.preventDefault()}>장바구니</Link>
                    </div>
                    <div className="book_info_07_R">
                        <Link to='/PaymentPage' className='buy' onClick={detailPage_data_delivery}>바로구매</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailPageBook;