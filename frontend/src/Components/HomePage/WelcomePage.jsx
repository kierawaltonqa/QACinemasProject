import { AiFillStar } from "react-icons/ai";

const WelcomePage = () => {
  return (
    <>
      <div id="welcomepage1">
        <hr />
      </div>
      <div className="row" id="welcomepage2">
        <div className="col-md-6">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae velit sequi architecto deserunt corporis quod officiis,
            debitis ipsum atque reprehenderit? Dignissimos ut hic accusamus.
            Laborum voluptatibus unde sint harum? Expedita?{" "}
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
            corrupti velit nulla. Quos voluptatum quo amet adipisci consectetur
            iste odit officia, dolor, deserunt voluptatibus veniam excepturi sed
            assumenda dolores. Quibusdam.
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
