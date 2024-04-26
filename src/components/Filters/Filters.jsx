import './Filters.scss';

const Filters = () => {
    return (
        <div className="filters">
            <div className="filters__title filters__header ">
                <p>Filters</p>
            </div>

            <div className="filters__title filters__container">
                
                </div>

                <div className="filters__title filters__location">
                    <p>Location</p>
                </div>

                <div className="filters__title filters__price">
                    <p>Price</p>
                </div>

                <div className="filters__title filters__offer">
                    <p>Offer type</p>
                    <p> Offering</p>
                </div>

                <div className="filters__title filters__payment">
                    <p>Payment</p>
                </div>
        </div>
    );
};

export default Filters;