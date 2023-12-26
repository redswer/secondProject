
import Popup from "./Popup";
import BigSlide from "./BigSlide";
import SideButton from '../../../../SideButton';
import { SlideItemBestSeller, SlideItemSteadySeller, RecommendBook, BookItem } from "./ItemSlide";
import { DivisionBestSeller, DivisionSteadySeller, DivisionRecommendBook } from "./Division";

function IndexBody() {
    return (
        <div className="index_body">
            {/* 구현되있으나 수정필요.. */}
            {/* <Popup></Popup> */}
            <BigSlide />

            <DivisionBestSeller />
            <SlideItemBestSeller />

            <DivisionSteadySeller />
            <SlideItemSteadySeller />

            <DivisionRecommendBook />
            <RecommendBook />

            <BookItem />

            <SideButton />
        </div>
    );
}

export default IndexBody;
