import './Location.css';

const Location = ({ location }) => {
  return <div className="location">
      <p>{location.street_address}</p>
      <p>{location.street_name}</p>
      <p>{location.city}</p>
      <p>{location.state}</p>
      <p>{location.zip_code}</p>
      <p>{location.country}</p>
    </div>;
};

export default Location;
