import { AiFillStar } from "react-icons/ai";

const WelcomePage = () => {
  return (
    <>
      <div id="welcomepage1">
        <hr />
      </div>
      <div className="row" id="welcomepage2">
        <div className="col-md-6" id="welcome-div">
          <p>
            QA Cinemas have received some excellent reviews from our customers,
            and a variety of famous figures (including Eddie Murphy and Meryl Streep)
            who took the time to visit our cinema.
          </p>
          <p>
            We have received an average rating of 4 stars, reflecting the quality of the
            experience that we provide.  We believe this rating is a testement to our success
            as an independent cinema company...
          </p>
        </div>
        <div className="col-md-6">
          <center>
            <br />
            <p>'...the best cinema that I have ever been to'</p>
            <p id="name1">- Quentin Tatantino</p>
            <br />
            <p>'...a truly brilliant cinema with a memorable penguin brand!'</p>
            <p id="name2">- Eddie Murphy</p>
            <br />
            <p>'...QA cinemas deserves 5 stars'</p>
            <p id="name3">- Meryl Streep</p>
          </center>
          <center>
            <br />
            <h3 id="star">
              <AiFillStar size={50} /> <AiFillStar size={50} />{" "}
              <AiFillStar size={50} /> <AiFillStar size={50} />{" "}
            </h3>
          </center>
        </div>
      </div>
    </>
  );
};
export default WelcomePage;
