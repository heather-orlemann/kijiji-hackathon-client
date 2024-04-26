import './ListItem.scss'


const ListItem = ({img, title, location, time, description }) => {
    return (
        <div className='ListItem'>
            <div className='ListItem__image'>
                <img src={img} alt={title}/>
                </div>
            <div className='ListItem__content-container'>
                <div className='ListItem__title'>
                    <p>{title}</p>
                </div>

                <div className='ListItem__location'>
                    <p>{location}</p>
                </div>

                <div className='ListItem__time'>
                    <p>{time}</p>
                </div>

                <div className='ListItem__description'>
                    <p>{description}</p>
                </div>
            </div>            
        </div>
    );
};

export default ListItem;