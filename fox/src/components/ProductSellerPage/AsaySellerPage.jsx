import './UiBox/SellerPageCommonCSS.css';
import { useContext, useState, useEffect } from 'react';
import SideButton from '../SideButton';
import { book_list_context } from '../Data/ProductOriginData_context';
import SellerProductCard from './UiBox/SellerProductCard';
import BasketPreviewBox from './UiBox/BasketPreviewBox';
import ProductSellerCategoryBar from './UiBox/ProductSellerCategoryBar';


const AsaySellerPage = () => {
  //
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  //

  const data = useContext(book_list_context);



  const bestbookList = data.filter((d) => {
    return d.category === '에세이'
  });

  const rankDummy = bestbookList.sort(
    function (a, b) {
      return b.salesRate - a.salesRate;
    });


  const bookList = rankDummy.map((d, i) => (
    <SellerProductCard
      rank={i}
      key={d.id}
      id={d.id}
      title={d.title}
      price={d.price}
      writer={d.writer}
      type={d.type}
      image={d.image}
      intro_image={d.intro_image}
      publisher={d.publisher}
      publishDate={d.publishDate}
      compiler={d.compiler}
      from={d.from}
      category={d.category}
      salePer={d.salePer}
      salesRate={d.salesRate}
      summary={d.summary}
    // sellCount
    />
  ));


  return (
    <div className='seller_page_container'>

      <div className='product_seller_categorybar_container' style={{ transform: `translateY(${scrollY}px)` }}>
        <ProductSellerCategoryBar />
      </div>

      <div className='basket_preview_box_container' style={{ transform: `translateY(${scrollY}px)` }}>
        <BasketPreviewBox />
      </div>


      <div className='seller_product_List_container'>
        <div className='seller_product_page_titlebox'>
          <span className='seller_product_page_title'>에세이</span>
          <span className='seller_product_page_sub_title'>당시의 작가들이 느꼈던 그 감정 그대로를 종이 한 폭에.</span>
        </div>

        <hr className='seller_product_page_titlebox_hr' />

        <div className='seller_product_bookList'>
          {bookList}
        </div>
      </div>
      <SideButton />
    </div>


  );
};

export default AsaySellerPage;
