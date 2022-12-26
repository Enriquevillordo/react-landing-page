import { Link } from 'react-router-dom';
import Typed from "react-typed";
import './style.scss';

const MainSection = () => {

    return (
        <section className="main">
            <div className='center-group'>
                <div>Enabling a new</div>
                <div>Padel Economy</div>
                <div>Padelcash (PADEL) is the first cryptocurrency<br/>that you can use to <Typed   strings={[
                        "play padel",
                        "pay padel coaches",
                        "buy padel equipment"
                    ]}
                    typeSpeed={100}
                    backSpeed={10}
                    loop />
                </div>
                <div>
                    <button>
                        <Link to={"#"}>Buy Padelcash</Link>
                    </button>
                    <button>
                        <Link to={"#"}>Smart Contract</Link>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default MainSection