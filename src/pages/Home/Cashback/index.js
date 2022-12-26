import { Link } from 'react-router-dom';
import './style.scss';

const Cashback = () => {

    return (
        <section className="cashback" id="cashback">
            <div className='section-title'>Cashback</div>
            <div className='section-description'>Mint PADEL coins every time you pay<br/>with <span>Padelcash - 5%</span> of each purchase minted </div>
            <div className='section-content'>The more you use Padelcash the more you get back. We currently have 1Million PADEL in the minting reward pool for each purchase you make. For every purchase you make using Padelcash we mint 5% of the total amount paid back to your wallet.</div>
            <div className="section-items">
                <div className='section-item'>
                    <button>
                        <Link to={"#"}>Buy Padelcash</Link>
                    </button>
                </div>
                <div className='section-item'>
                    <button>
                        <Link to={"#"}>Pay using Padelcash</Link>
                    </button>
                </div>
                <div className='section-item'>
                    <button>
                        <Link to={"#"}>Accept Padelcash</Link>
                    </button>
                </div>
            </div>
            <div className='left-ellipse'></div>
            <div className='center-ellipse'></div>
            <div className='right-ellipse'></div>
        </section>
    )
}

export default Cashback