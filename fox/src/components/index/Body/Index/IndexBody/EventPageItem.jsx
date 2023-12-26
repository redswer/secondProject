import './EventPageItem.css'
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { event_item_list_context } from "../../../../Data/ProductOriginData_context";

function EventPageItem() {
    const event_data = useContext(event_item_list_context);

    const EventItemList = ({ id, title, image, view_image, end_image, date }) => {
        return (
            <ul>
                <li className='event_item_list'>
                    <Link to={`/EventPageItemContent/${id}`}>
                        <div>
                            <img className='event_view_image' src={view_image} alt={title}/>
                            <h3 className='event_title'>{title}</h3>
                            <div className='event_date'>{date}</div>
                        </div>
                    </Link>
                </li>
            </ul>
        )
    }
    return (
        <div className="event_list_container">
            <div className='event_item'>
                <span className='event_page_title'>이벤트</span>
            </div>
            <hr className='event_page_title_hr' />
            {event_data.map((event, index) => (
                <EventItemList
                    key={index}
                    id={event.id}
                    title={event.title}
                    image={event.image}
                    view_image={event.view_image}
                    end_image={event.end_image}
                    date={event.date}
                />
            ))}
        </div>
    );
}

export default EventPageItem;