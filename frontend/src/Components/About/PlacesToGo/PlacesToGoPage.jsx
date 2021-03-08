import "./Places.css"
import BarsModal from "./BarsModal";
import RestaurantsModal from "./RestaurantsModal";

const PlacesToGoPage = () => {
    return (
        <>
            <hr />
            <h3>Local Venues Nearby...</h3>
            <hr />
            <center>
                <h5>Bars: Turtle Bay, All Bar One... </h5>
                <BarsModal />
                <h5>Restaurants: Pizza Express, Carluccio's... </h5>
                <RestaurantsModal />
                <p>Other Entertainment:</p>
            </center>
        </>
    )
}
export default PlacesToGoPage;