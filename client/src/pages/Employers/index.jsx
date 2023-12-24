import HireTheBestIT from "./components/HireTHeBestIT/index.jsx";
import ITViecDifferent from "./components/ITViecDifferent/index.jsx";
import "./styles.scss";

const Employers = () => {
  return (
    <main>
      <div className="flex-grow-1">
        <section className="employer-landing-container">
          <HireTheBestIT />
          <ITViecDifferent />
        </section>
      </div>
    </main>
  );
};

export default Employers;
