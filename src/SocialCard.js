import './SocialCard.css';

import Location from './Location';
import Phone from './Phone';
import JobTitle from './JobTitle'

const SocialCard = (props) => {
  
    const { userData } = props;
    return (
        // <div className="card" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
        <div className="card">
            <div className="card__body" >
             
                    <div className="front"> 
                        <div className="card__image"><img src={userData.avatar} /></div>
                        <div className="card__title">{userData.first_name} {userData.last_name}</div>
                        <JobTitle jobtitle={userData.employment} />
                    </div>
             
                    <div className="back">  
                    <Location location={userData.address} />
                    <Phone number={userData.phone_number} type="Phone Number" /></div>
            </div>

        </div>
    )
};

export default SocialCard;