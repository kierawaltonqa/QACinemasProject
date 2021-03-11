import penguin from '../../Resources/penguin-wave2.jpg';

const WelcomePage2 = () => {
    return (
        <div className="row-md">
            <div className="col-md-4">
            </div>
            <center>
                <div className="col-md-4">
                    <hr />
                    <img src={penguin} alt="penguin-wave" id="penguin-wave" />
                </div>
            </center>
        </div>
    )
}
export default WelcomePage2;