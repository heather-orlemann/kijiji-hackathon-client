import "./MingaListPage.scss";
import { useNavigate } from "react-router-dom";
import Filters from "../../components/Filters/Filters";
import ListItem from "../../components/ListItem/ListItem";
import listData from "../../data/data.json";

const MingaListPage = () => {
  const navigate = useNavigate();
  return (
    <div className="MingaListPage">
      <div className="MingaListPage__title">
        <h1>Mingas in Victoria</h1>
      </div>
      <div className="MingaListPage__container">
        <div className="MingaListPage__filters">
          <Filters />
        </div>

        <div className="MingaListPage__list">
          {listData.map((item) => (
            <div
              key={item.id}
              className="MingaListPage__list-item"
              onClick={() => navigate(`/details`)}
            >
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
