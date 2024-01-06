import "./styles.scss";
import {
  faPenToSquare,
  faHeart,
  faClock,
} from "@fortawesome/free-regular-svg-icons";
import { faBriefcase, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false);

  // const fetchData = async () => {
  //   const { postId, userId } = match.params;

  //   try {
  //     setLoading(true);
  //     const response = await axios.get(
  //       `http://localhost:3001/api/data/${postId}/${userId}`
  //     );
  //     setData(response.data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const handleButtonClick = () => {
  //   fetchData();
  // };

  return (
    <div className="home-container">
      {/* HEADER */}
      <div className="home-header">
        <div className="main-title">
          <h2>Senior/Middle Java Developer</h2>
          <p className="home-des-com">company name</p>
        </div>
        <div className="home-row-favou">
          <button style={{ flex: 10 }}>APPLY NOW</button>
          <FontAwesomeIcon
            style={{ flex: 1, height: "35px", color: "red", cursor: "pointer" }}
            icon={faHeart}
          />
        </div>
      </div>

      <hr className="space" />

      {/* DESCRIPTION */}
      <div className="home-company-descrip">
        <div className="home-des-com home-address">
          <FontAwesomeIcon className="home-icon" icon={faLocationDot} />
          <div className="home-des">HA NOI</div>
        </div>
        <div className="home-des-com home-work-place">
          <FontAwesomeIcon className="home-icon" icon={faBriefcase} />
          <div className="home-des">At offfice</div>
        </div>
        <div className="home-des-com home-time-post">
          <FontAwesomeIcon className="home-icon" icon={faClock} />
          <div className="home-des">21h ago</div>
        </div>
      </div>
      {/* Edit information */}

      {/* JD */}
      <div className="home-jd">
        <div className="jd-header">
          <h1>Job Description</h1>
          <FontAwesomeIcon icon={faPenToSquare} />
        </div>
      </div>
      {/* Your skill and exp need */}
      <div className="home-exp-needed">
        <div className="jd-header">
          <h1>Your skills and experience</h1>
          <FontAwesomeIcon icon={faPenToSquare} />
        </div>
      </div>
      {/* Why you love working here */}
      <div className="home-will-love">
        <div className="jd-header">
          <h1> Why you love working here</h1>
          <FontAwesomeIcon icon={faPenToSquare} />
        </div>
      </div>
    </div>
  );
};

export default Home;
