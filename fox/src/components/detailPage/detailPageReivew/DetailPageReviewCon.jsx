import './DetailPageReviewCon.css';
import { ReactComponent as Star } from './review_star.svg';

function DetailPageReviewCon({ num, star_count, user_id, review_date, review_con, onClick_review_delete }) {

    return (
        <>
            <hr className='DetailPage_line' />

            <div className="review_con_01 d-flex">
                <div className="review_con_01_L">
                    <span className="review_con_star">
                        {
                            [1, 2, 3, 4, 5].map((index) => (
                                <Star key={index} className={`star_index${index <= star_count ? '_count_selected' : ''}`} />
                            ))
                        }
                    </span>
                </div>
                <div className="review_con_01_R">
                    <div className="review_user_info d-flex">
                        <span>
                            <span className="review_user_name">{user_id}</span>
                            <span className="review_date">{new Date(review_date).toLocaleDateString()}</span>
                        </span>
                        <span>
                            <span className="review_delete_btn_box">
                                <button className='review_delete_btn' onClick={() => onClick_review_delete(num)}>X</button>
                            </span>
                        </span>
                    </div>
                    <div className="review_user_con">{review_con}</div>
                </div>
            </div>
        </>
    );
}

export default DetailPageReviewCon;