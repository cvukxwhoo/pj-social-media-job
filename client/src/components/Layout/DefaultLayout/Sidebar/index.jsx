import "./styles.scss";

const Sidebar = () => {
  return (
    <>
      <div className="container">
        <div className="post-items">
          <div className="post-item">
            <div className="layout-post-item">
              <div className="time-posted text-flex">
                <span>2 DAYS AGO</span>
              </div>
              <h3 className="titlePost">
                <a href="">PM</a>
              </h3>
              <div className="companyName">
                <a href="">FPT</a>
              </div>
              <div className="rangeSalary text-flex">
                <div>Icon</div>
                <div className="text">1000</div>
              </div>
              <div className="border-top-dashed"></div>
              <div className="workPlace text-flex">
                <div>Icon</div>
                <div className="text">Hybrid</div>
              </div>
              <div className="workLocation text-flex">
                <div>Icon</div>
                <div className="text">Hanoi</div>
              </div>
              <div className="vacancies text-flex">
                <div>Icon</div>
                <div className="text">PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
