import './index.css';
import Project from './Project/index'

const RightSection = () => {
  return (
    <div className="RightSection">
      <div className="Projects">
        <p className="section-title">Projects</p>
        <Project
          name="Calculator App"
          year="2019"
          techStack={["HTML", "CSS", "Bootstrap", "JavaScript"]}
					point1="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.."
          point2="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
				 <Project
          name="Order Status Management App"
          year="2021"
          techStack={["HTML", "CSS", "Bootstrap", "React.js"]}
					point1="It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout."
          point2="The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English."
        />
				 <Project
          name="Registration App"
          year="2019"
          techStack={["HTML", "CSS", "JavaScript"]}
					point1="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
          point2="If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
        />
      </div>
      <hr />
      <div className="Achievements">
        <p className="section-title">Achievements</p>
        <ul>
					<li>Secured runner-up in XYZ Champions Hackathon (2019)</li>
					<li>Secured consolation in ABC Contest (2020)</li>
					<li>Secured first prize in DEF Fest (2021)</li>
				</ul>
      </div>
			<hr />
      <div className="Languages">
        <p className="section-title">Languages</p>
        <ul>
					<li>English</li>
					<li>Hindi</li>
					<li>Punjabi</li>
				</ul>
      </div>
    </div>
  );
};

export default RightSection;
