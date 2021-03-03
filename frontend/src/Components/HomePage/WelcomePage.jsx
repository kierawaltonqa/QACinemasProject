import { AiFillStar } from 'react-icons/ai';

const WelcomePage = () => {
    return (
        <>
            <div className="col-md-12" id="welcomepage1">
                <h4 id="welcome-header">Bringing the latest and best rated films to a screen near you</h4>
                <hr />
            </div>
            <div className="row" id="welcomepage2">
                <div className="col-md-6">
                    {/* <p>Browse this website to: view our current listings and new releases,
                book tickets for films on your preferred choice of screen,
                post on our discussion page to express your opinions and discuss the films you have watched. To learn more about us click here. */}
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae velit sequi architecto deserunt corporis quod officiis, debitis ipsum atque reprehenderit? Dignissimos ut hic accusamus. Laborum voluptatibus unde sint harum? Expedita? </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora corrupti velit nulla. Quos voluptatum quo amet adipisci consectetur iste odit officia, dolor, deserunt voluptatibus veniam excepturi sed assumenda dolores. Quibusdam.</p>
                </div>
                <div className="col-md-6">
                    <h3 id="star"><AiFillStar size={50} /> <AiFillStar size={50} /> <AiFillStar size={50} /> <AiFillStar size={50} /></h3>
                </div>

            </div>
        </>
    )
}
export default WelcomePage;