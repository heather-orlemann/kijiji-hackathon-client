import './MingaListPage.scss';  
import Filters from '../../components/Filters/Filters';
import ListItem from '../../components/ListItem/ListItem';

import gardenImg from '../../assets/images/garden-small.png';
import paintImg from '../../assets/images/paint-small.png';

const listData = [
    {
        id: '001',
        img: gardenImg,
        title: 'Gardening',
        location: 'Toronto, ON',
        time: '1 hour',
        description: 'Help me plant some flowers in my backyard.'
    },
    {
        id: '002',
        img: paintImg,
        title: 'Painting',
        location: 'Toronto, ON',
        time: '2 hours',
        description: 'Paint my living room.'
    }
];


const MingaListPage = () => {
    return (
        <div className='MingaListPage'>
            <div className='MingaListPage__title'>
                <h1>Minga in Toronto</h1>
            </div>
            <div className='MingaListPage__container'>
                <div className='MingaListPage__filters'>
                    <Filters />
                </div>

                <div className='MingaListPage__list'>
                    {listData.map( (item) => (
                        <div key={item.id} className='MingaListPage__list-item' >
                        
                            <ListItem                        
                                img={item.img }
                                title={item.title} 
                                description={item.description}
                                time={item.time}
                                location={item.location}
                                />
                        </div>
                    ))}                    
                </div>
            </div>
        </div>
    );
};

export default MingaListPage;