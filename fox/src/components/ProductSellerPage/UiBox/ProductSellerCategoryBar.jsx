import './ProductSellerCategoryBar.css';
import { Link } from 'react-router-dom';

function ProductSellerCategoryBar() {
    return (
        <div className='ProductSellerCategoryBar_container'>
            <div className='ProductSellerCategoryBar_h4'>
                <div>메인 카테고리</div>
                <div className='product_seller_category_link_box'>
                    <Link to='/BestSellerPage' className='product_seller_category_link_box_font'>베스트 셀러</Link>
                </div>

                <div className='product_seller_category_link_box'>
                    <Link to='/SteadySellerPage' className='product_seller_category_link_box_font'>스테디 셀러</Link>
                </div>

                <div className='product_seller_category_link_box'>
                    <Link to='/InternalSellerPage' className='product_seller_category_link_box_font'>국내 도서</Link>
                </div>

                <div className='product_seller_category_link_box'>
                    <Link to='/ForeignSellerPage' className='product_seller_category_link_box_font'>해외 도서</Link>
                </div>

            </div>


            <div className='ProductSellerCategoryBar_h5'>
                <div>상세 카테고리</div>
                <div className='product_seller_category_link_box'>
                    <Link to='/FantasySellerPage' className='product_seller_category_link_box_font'>판타지</Link>
                </div>

                <div className='product_seller_category_link_box'>
                    <Link to='/AsaySellerPage' className='product_seller_category_link_box_font'>에세이</Link>
                </div>

                <div className='product_seller_category_link_box'>
                    <Link to='/NovelSellerPage' className='product_seller_category_link_box_font'>소설</Link>
                </div>
            </div>



        </div>
    );
}
export default ProductSellerCategoryBar;