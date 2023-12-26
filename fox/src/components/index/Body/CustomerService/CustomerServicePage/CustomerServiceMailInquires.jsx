import './CustomerServiceMailInquires.css';
// import CustomerServiceMailInquiresSuccess from './CustomerServiceMailInquiresSuccess';

function CustomerServiceMailInquires() {
    return (
        <div className='customer_service_mail_inquires'>
            <h2 className="inquires">1:1 문의</h2>
            <div className="mail_inquires">
                <form action="/">
                    <figure>
                        <figcaption></figcaption>
                        <table className='mail_inquires_tabel'>
                            <tbody>
                                <tr>
                                    <th className="inquires_list">문의 유형 </th>
                                    <td>
                                        <select className='inquries_select' required="required">
                                            <option value="" >질문분류 선택</option>
                                            <option defaultValue="cupon">쿠폰 &#47; 이벤트</option>
                                            <option defaultValue="order">주문 &#47; 결제</option>
                                            <option defaultValue="delivery">배송</option>
                                            <option defaultValue="cancel">취소 &#47; 반품 &#47; 교환</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="inquires_list">제목</th>
                                    <td>
                                        <input className='inquires_title' type='text' required />
                                    </td>
                                </tr>
                                <tr>
                                    <th className="inquires_list">이메일 답변받기</th>
                                    <td>
                                        <input className='inquires_email' type='text' required />
                                    </td>
                                </tr>
                                <tr>
                                    <th className="inquires_list">문의 내용</th>
                                    <td>
                                        <textarea className='inquires_content' name="content" id="content" cols="80" rows="10" required />
                                    </td>
                                </tr>
                                <tr>
                                    <th className="add_file">첨부파일</th>
                                    <td>
                                        <input className="file_upload" placeholder="첨부파일" readOnly />
                                        <label className='file' htmlFor="file">파일찾기</label>
                                        <input className='file_found' type="file" id="file" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="component_btn">
                            <button className="btn_submit" type="submit" id="btnsubmit">등록하기</button>
                            <button className="btn_cencel" type="button" id="btncencel">취소하기</button>
                        </div >
                    </figure>
                </form>
            </div>
        </div>
    );
}

export default CustomerServiceMailInquires;