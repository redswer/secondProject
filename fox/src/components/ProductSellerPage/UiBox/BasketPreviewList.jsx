import './BasketPreviewList.css'

const BasketPreviewList = (props) => {

    return (
        <div className='basket_preview_item_container'>
            <div className='basket_preview_item_title'>
                {`< ${props.title} >`}
            </div>

            <div className='basket_preview_item_price'>
                <span >가격 : {props.price.toLocaleString()} 원</span>
            </div>

            <div className='basket_preview_item_price'>
                <span >할인가 : {props.salePrice} 원</span>
            </div>

            <div className='basket_preview_item_amount'>
                <button onClick={props.onRemove}>-</button>
                <span> 수량 : {props.amount}</span>
                <button onClick={props.onAdd}>+</button>
            </div>
        </div>
    );
};

export default BasketPreviewList;
