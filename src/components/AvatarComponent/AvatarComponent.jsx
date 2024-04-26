import "./AvatarComponent.scss"

const AvatarComponent = ({ color, letter }) => {
    return (
      <div className="MD__avatar" style={{ backgroundColor: color }}>
        {letter}
      </div>
    );
  };

export default AvatarComponent;