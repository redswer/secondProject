import { Link } from "react-router-dom";


function HeaderCategory() {
    return (
        <div className="header_category">
            <nav>
                <div className="header_maincategory">
                    <ul className="header_maincategory_list">
                        <li className="header_maincategory_menu_category">
                            <Link to="/InternalSellerPage">국내도서</Link>
                            {/* <div>
                                <span>소설</span>
                                <span>에세이</span>
                                <span>판타지</span>
                            </div> */}
                        </li>
                        <li className="header_maincategory_menu_category">
                            <Link to='/ForeignSellerPage'>해외도서</Link>
                            {/* <div>
                                <span>소설</span>
                                <span>에세이</span>
                                <span>판타지</span>
                            </div> */}
                        </li>
                        <li className="header_maincategory_menu_category">
                            <Link to='/BestSellerPage'>베스트 셀러</Link>
                            {/* <div>
                                <span>
                                    베스트 셀러
                                </span>
                                <span>
                                    이달의 추천 도서
                                </span>
                                <span>
                                    편집장 추천 도서
                                </span>
                            </div> */}
                        </li>
                        <li className="header_maincategory_menu_category">
                            <Link to='/ItemPage'>도서용품</Link>
                        </li>
                        <li className="header_maincategory_menu_category">
                            <Link to='/EventPage'>이벤트</Link>
                            {/* <div>
                                <span>
                                    진행중인 이벤트
                                </span>
                                <span>
                                    종료된 이벤트
                                </span>
                            </div> */}
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default HeaderCategory;