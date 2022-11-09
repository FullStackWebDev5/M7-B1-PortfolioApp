import "./index.css";

const LeftSection = () => {
  return (
    <div className="LeftSection">
      <div className="Education">
        <p className="section-title">Education</p>
        <p className="section-sub-title">
          Institute of Engineering <span className="year">(2015-2019)</span>
        </p>
        <p className="section-sub-title">
          St. Joseph University <span className="year">(2013-2015)</span>
        </p>
        <p className="section-sub-title">
          Max High Scool <span className="year">(2003-2013)</span>
        </p>
      </div>
      <hr />
      <div className="Skill">
        <p className="section-title">Skills</p>
        <p className="section-sub-title">Skill 1</p>
        <p className="section-sub-title">Skill 2</p>
        <p className="section-sub-title">Skill 3</p>
      </div>
    </div>
  );
};

export default LeftSection;
