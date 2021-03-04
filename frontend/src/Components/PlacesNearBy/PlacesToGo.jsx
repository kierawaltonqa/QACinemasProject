import React from 'react';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const PlacesToGo = () => {
    return (
        <>
        <div className="container  "> 
        <BottomNavigationAction style={{ color: 'red', fontSize: '100px' }} label="Nearby" icon={<LocationOnIcon />} />
        <h1> Things Near By</h1>
      </div>
      </>
    )
}

export default PlacesToGo
