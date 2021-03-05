import React from 'react'
import films from "../../../Resources/Movies.json"
import ToggleInput from './ToggleInput'

const ReadAll = ({basketid}) => {




    return (

        <>
            <div className="container">
                {films.map((film) => (
                    <div key={film.id} >
                        <hr />
                        <div className="row justify-content-center">
                            <h4 style={{ color: 'gold' }} >{film.title}</h4>
                            <ToggleInput basketid={basketid} filmname={film.title} />
                        </div>
                        <h6 style={{ color: 'gold', textAlign: "center", marginTop: "3px" }}>Rated: {film.rating}</h6>

                        {/* <img style={{height:"300px", width:"300px"}} src={film.img} alt=""/> */}


                    </div>
                ))}
            </div>
        </>
    )
}

export default ReadAll