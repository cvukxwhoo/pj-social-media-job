import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-header-content">
          <div className="profile-header-row">
            <div className="profile-avatar">
              <img
                className="profile-logo"
                src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBK1J1REE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--53ab4877387c44be52c1fda170364fa542dc4173/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcEFhb3ciLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bb0ebae071595ab1791dc0ad640ef70a76504047/vietinbank-logo.png"
                alt=""
              />
            </div>
            <div className="profile-header-details">
              <h1 className="profile-title">VietinBank </h1>
              <div className="profile-location">
                {" "}
                <FontAwesomeIcon icon={faLocationDot} /> Ha Noi
              </div>

              <button className="profile-header-follow">Follow</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
