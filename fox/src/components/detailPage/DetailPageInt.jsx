import './DetailPageInt.css';

function DetailPageInt({ book_data_selected }) {

    const { intro_image, contents, int_author } = book_data_selected;

    return (
        <div className="int">
            <div className="int_int d-flex">
                <div className="int_int_L">상품소개</div>
                <div className="int_int_R">
                    <img src={intro_image} />
                </div>
            </div>

            <hr className='DetailPage_line' style={{ display: contents ? 'block' : 'none' }} />

            <div className="int_contents" style={{ display: contents ? 'flex' : 'none' }}>
                <div className="int_contents_L">목차</div>
                <div className="int_contents_R">
                    {contents}
                </div>
            </div>

            <hr className='DetailPage_line' style={{ display: contents ? 'block' : 'none' }} />

            <div className="int_author" style={{ display: contents ? 'flex' : 'none' }}>
                <div className="int_author_L">저자 및 역자소개</div>
                <div className="int_author_R">
                    {int_author}
                </div>
            </div>
        </div>
    );
}

export default DetailPageInt;