import './DetailPage.css';
import DetailPageBook from './DetailPageBook';
import DetailPageInt from './DetailPageInt';
import DetailPageReview from './DetailPageReview';
import DetailPageRe from './DetailPageRe';
import SideButton from '../SideButton';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { book_list_context } from '../Data/ProductOriginData_context';

function DetailPage({setDetailPage_data}) {
    const { id } = useParams();

    const book_data = useContext(book_list_context);

    const book_data_selected = book_data.find(book => book.id === parseInt(id));

    return (
        <div className='detailPage'>
            <DetailPageBook book_data_selected={book_data_selected} setDetailPage_data={setDetailPage_data} />
            <hr className='DetailPage_line' />
            <DetailPageInt book_data_selected={book_data_selected} />
            <hr className='DetailPage_line' />
            <DetailPageReview />
            <hr className='DetailPage_line' />
            <DetailPageRe />
            <SideButton />
        </div>
    );
}

export default DetailPage;