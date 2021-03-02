import React from 'react'
import ScreenInfoCard from './ScreenInfoCard';

const ReadMoreText = ({toggleOn}) => {


    if (toggleOn == "standard") {
        const title = "Standard Seating";
        const cost = "£8.50   per ticket " ;
        const desc = "Standard seating allows you access to the large array of seating inside our cinema! Providing you with the full QACinema Experience. ";
        return(
        
            <ScreenInfoCard title={title} cost={cost} desc={desc} />
            
        )
    }
    else if(toggleOn == "deluxe"){
        const title = "Deluxe Seating";
        const cost = "£12.50";
        const desc = "Deluxe seating provides you with the full QACinema experience, A new fully immersive feeling to movie viewing in premium seats with a premium view!";
        return(
            <ScreenInfoCard title={title} cost={cost} desc={desc} />
        )
    }
    else{ 
        return null;
}
}

export default ReadMoreText
