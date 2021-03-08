import "../../Css/AboutStyle.css";
import Mo from "./TeamMembers/Mo";
import Rob from "./TeamMembers/Rob";
import Sam from "./TeamMembers/Sam";
import Kiera from "./TeamMembers/Kiera";

const MeetTheTeam = () => {
  return (
    <div className="container" maxWidth="md" >
      <div className="beauty">


        <>
          <h1 > Meet The Team</h1>
          <hr />

          <br></br>

          <Mo />
          <Rob />
          <Sam />
          <Kiera />

        </>
      </div>
    </div >
  );
};

export default MeetTheTeam;
