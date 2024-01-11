import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Profile = () => {
  const [details, setDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getDetails = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/${id}`);
        console.log(res);
        setDetails(res.data.data);
      } catch (error) {
        console.error("Error fetching details:", error);
      }
    };

    getDetails();
  }, [id]);

  return (
    <>
      {details.map((d) => (
        <div className="profile-container" key={d._id}>
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
                <div className="profile-header-ds">
                  <h1 className="profile-title">{d.userName} </h1>
                  <div className="profile-location">
                    {" "}
                    <FontAwesomeIcon icon={faLocationDot} />
                    {d.location}
                  </div>
                  <button className="profile-header-follow">Follow</button>
                </div>
              </div>
            </div>
          </div>
          <div className="test">{d.workPlace}</div>
        </div>
      ))}
    </>
  );
};

export default Profile;
