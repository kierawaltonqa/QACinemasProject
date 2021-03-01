import Eighteen from './FilmClassifications/Eighteen';
import Fifteen from './FilmClassifications/Fifteen';
import PG from './FilmClassifications/PG';
import TwelveA from './FilmClassifications/TwelveA';
import Twelve from './FilmClassifications/Twelve';
import U from './FilmClassifications/U';
import { Card, CardBody, CardTitle } from "reactstrap";
import '../Resources/Sidebar.css';



const FilmClass = () => {


    return (
        <>

            {/* create a new page for each classification and then reference them here - parent to classification
other class are child of this one  */}





            <h1>this is the film classifications</h1>
            <div className="bg-light border-right" id="sidebar">
                <Card>
                    <CardBody>
                        <CardTitle>Film Classifications</CardTitle>
                        <p>hi</p>
                        <Eighteen />
                        <Fifteen />
                        <PG />
                        <TwelveA />
                        <Twelve />
                        <U />
                        <p>what are the standard film classifications : done </p>

                        <p>what are the rules and conidions relating to each classification</p>

                        <p>link to external resources </p>
                    </CardBody>
                </Card>

            </div>

        </>




    )


}




export default FilmClass;