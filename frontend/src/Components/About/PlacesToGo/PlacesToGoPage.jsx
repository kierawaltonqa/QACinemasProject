import "./Places.css"
import BarsModal from "./BarsModal";
import RestaurantsModal from "./RestaurantsModal";
import { FaCocktail } from 'react-icons/fa';
import { IoRestaurantSharp } from 'react-icons/io5';

const PlacesToGoPage = () => {
    return (
        <>

            <h1>Local Venues Nearby...</h1>
            <hr />
            <center>
                <br />
                <h5>Bars <FaCocktail size={50} /></h5>
                <BarsModal />
                <h5>Restaurants <IoRestaurantSharp size={40} /></h5>
                <RestaurantsModal />
            </center>
        </>
    )
}
export default PlacesToGoPage;