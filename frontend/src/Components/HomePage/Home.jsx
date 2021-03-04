import './Home.css';
import CarouselPage from './Carousel';
import image1 from '../../Resources/cinema1.jpg';
import image2 from '../../Resources/cinema4.jpg';
import image3 from '../../Resources/cinema5.jpg';
import WelcomePage from './WelcomePage';
import Footer from '../FooterFolder/Footer';
import WelcomePage2 from './WelcomePage2';
import Connect from './Connect';
import PlacesToGo from '../PlacesNearBy/PlacesToGo';

const Home = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 id="title">Welcome To QA Cinemas
                        </h1>
                        <hr />
                    </div>
                </div>
                <div className="row" style={{ height: "500px" }}>
                    <div className="col-md-12 slider-container" id="carousel">
                        <CarouselPage image1={image1} image2={image2} image3={image3} />
                    </div>
                </div>
                <WelcomePage />
                <Connect />
                <WelcomePage2 />
            </div>
            <PlacesToGo/>
            <Footer />
        </>
    )
}
export default Home;