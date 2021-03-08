import "./Places.css"
import BarsModal from "./BarsModal";
import RestaurantsModal from "./RestaurantsModal";

const PlacesToGoPage = () => {
    return (
        <>
            <hr />
            <h3>Local Venues Nearby...</h3>
            <hr />
            <p>Bars: Turtle Bay, All Bar One <BarsModal /> </p>
            <p>Restaurants: Pizza Express, Carluccio's <RestaurantsModal /> </p>
            <p>Other Entertainment:</p>
        </>
    )
}
export default PlacesToGoPage;