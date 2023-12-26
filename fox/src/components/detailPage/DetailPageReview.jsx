import { useRef, useState } from 'react';
import './DetailPageReview.css';
import DetailPageReviewCon from './detailPageReivew/DetailPageReviewCon';
import { ReactComponent as Star } from './review_star.svg';

const review_mockdata = [
    {
        num: 0,
        star_count: 5,
        user_id: 'summer',
        review_date: '2023-08-23',
        review_con:
            `믿고 읽는 작가님 너무 오랬동안 기다렸네요
            책을 받을때까지 힘든시간이 되겠지요 ㅎ`
    },
    {
        num: 1,
        star_count: 2,
        user_id: 'green123',
        review_date: '2023-06-06',
        review_con:
            `많이 구매하길래 기대했는데 문장이 영 별로고, 등장인물들한테 위로라고 하는 말들이 sns출처 글처럼 깊이도 없고 별로 공감이 안됨. 무엇보다 스토리 진행이 걍 노잼이었다... 책 디자인 예뻐서 별점 하나 더 줌`
    },
    {
        num: 2,
        star_count: 4,
        user_id: 'qwerty',
        review_date: '2023-04-19',
        review_con: `재밌어요 추천드려요`
    }
];

function DetailPageReview() {

    // 별점 기능 구현 =========================================================
    const [click_count, setClick_count] = useState(6);

    // 별 클릭 시 동작
    const onClick_star = (index_number) => {
        setClick_count(index_number);
    }

    // 리뷰 데이터 전달 =======================================================
    const [review_list, setReivew_list] = useState(review_mockdata);

    // 리뷰 등록 ==============================================================
    const [review_content, setReview_content] = useState("");

    const [user_count, setUser_count] = useState(1);

    const review_ref = useRef();

    let review_num_count = review_list.length;

    const onChange_review_content = (e) => {
        setReview_content(e.target.value);
    }

    const review_update = () => {
        if (!review_content) {
            review_ref.current.focus();
        } else {
            review_create(review_content);
            setReview_content('');
        }
    }

    const click_count_reversal = 6 - click_count;

    // 리뷰 등록 버튼 이벤트 ==========================================================
    const review_create = () => {
        if (click_count >= 6) {
            alert('별점을 선택해 주세요~');
            review_ref.current.focus();
        } else {
            const updated_user_count = user_count + 1; // user_count 값 증가
            setUser_count(updated_user_count);

            const review_content_update = [
                {
                    num: review_num_count,
                    star_count: click_count_reversal,
                    user_id: 'user' + user_count,
                    review_date: new Date().getTime(),
                    review_con: review_content
                },
                ...review_list
            ];
            setReivew_list(review_content_update);
            review_num_count += 1;
            // setReview_user('user' + user_count);
        }

    }

    // 리뷰 삭제 버튼 이벤트 ==========================================================
    const onClick_review_delete = (num) => {
        const review_data_delete = review_list.filter(book => book.num !== num);
        setReivew_list(review_data_delete);
    }

    console.log(review_list);

    return (
        <div className="review">
            <div className="review_box d-flex">
                <div className="review_L">리뷰</div>
                <div className="review_write">
                    <div className="review_star_cover">
                        <span className="review_star">
                            {
                                [1, 2, 3, 4, 5].map((index) => (
                                    <Star key={index}
                                        className={`star${index >= click_count ? '_select' : ''}`}
                                        onClick={() => { onClick_star(index) }}
                                    />
                                ))
                            }
                        </span>
                    </div>
                    <div className="review_note_cover d-flex">
                        <div className="review_note">
                            <textarea
                                ref={review_ref}
                                value={review_content}
                                onChange={onChange_review_content}
                                className="review_note_01"
                                name="review_note"
                                placeholder="500자 이내 작성 가능"
                                maxLength="500"

                            />
                        </div>
                        <div className="review_btn_cover">
                            <button className="review_btn" onClick={review_update} >등록</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="review_con_box">
                {review_list.map((it, index) => (<DetailPageReviewCon key={index} {...it} onClick_review_delete={onClick_review_delete} />))}
            </div>
        </div>
    );
}

export default DetailPageReview;