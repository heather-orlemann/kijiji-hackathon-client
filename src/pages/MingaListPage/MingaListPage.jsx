import "./MingaListPage.scss";
import Filters from "../../components/Filters/Filters";
import ListItem from "../../components/ListItem/ListItem";
import listData from "../../data/data.json";

const MingaListPage = () => {
  return (
    <div className="MingaListPage">
      <div className="MingaListPage__title">
        <h1>Minga in Victoria</h1>
      </div>
      <div className="MingaListPage__container">
        <div className="MingaListPage__filters">
          <Filters />
        </div>

        <div className="MingaListPage__list">
          {listData.map((item) => (
            <div key={item.id} className="MingaListPage__list-item">
              <ListItem
                img={item.img_small}
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
