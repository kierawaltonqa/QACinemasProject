import Eighteen from './FilmClassifications/Eighteen';
import Fifteen from './FilmClassifications/Fifteen';
import PG from './FilmClassifications/PG';
import TwelveA from './FilmClassifications/TwelveA';
import Twelve from './FilmClassifications/Twelve';
import U from './FilmClassifications/U';
// import '../Resources/Sidebar.css';
import { useState } from "react";
import EighteenToast from './FilmClassifications/EighteenToast';
import FifteenToast from './FilmClassifications/FifteenToast';
import TwelveToast from './FilmClassifications/TwelveToast';
import TwelveAToast from './FilmClassifications/TwelveAToast';
import PGToast from './FilmClassifications/PGToast';
import UToast from './FilmClassifications/UToast';


// import { Toast } from 'react-bootstrap'






const FilmClass = () => {

    const [show18, setShow18] = useState(false);
    const toggleShow18 = () => setShow18(!show18);

    const [show15, setShow15] = useState(false);
    const toggleShow15 = () => setShow15(!show15);

    const [show12A, setShow12A] = useState(false);
    const toggleShow12A = () => setShow12A(!show12A);

    const [show12, setShow12] = useState(false);
    const toggleShow12 = () => setShow12(!show12);

    const [showPG, setShowPG] = useState(false);
    const toggleShowPG = () => setShowPG(!showPG);

    const [showU, setShowU] = useState(false);
    const toggleShowU = () => setShowU(!showU);






    return (
        <>

            {/* create a new page for each classification and then reference them here - parent to classification
other class are child of this one  */}





            <h1>this is the film classifications</h1>

            <p>hi</p>
            <div className="row" id="toggleButton">
                <div className="col-md-5">
                    <Eighteen toggleShow18={toggleShow18} />
                    <Fifteen toggleShow15={toggleShow15} />
                    <TwelveA toggleShow12A={toggleShow12A} />
                    <Twelve toggleShow12={toggleShow12} />
                    <PG toggleShowPG={toggleShowPG} />
                    <U toggleShowU={toggleShowU} />
                </div>
            </div>










            <p>what are the standard film classifications : done </p>

            <p>what are the rules and conidions relating to each classification</p>

            <p>link to external resources </p>

            <div className="row" id="toastPopUp">

                <EighteenToast show18={show18} setShow18={setShow18} />
                <FifteenToast show15={show15} setShow15={setShow15} />
                <TwelveAToast show12A={show12A} setShow12A={setShow12A} />
                <TwelveToast show12={show12} setShow12={setShow12} />
                <PGToast showPG={showPG} setShowPG={setShowPG} />
                <UToast showU={showU} setShowU={setShowU} />



            </div>






        </>




    )


}



export default FilmClass;