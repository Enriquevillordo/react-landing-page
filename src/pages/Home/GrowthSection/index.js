import './style.scss';
import ai1 from '../../../assets/images/995-ai1.png';
import { flexbox } from '@mui/system';

const GrowthSection = () => {

    return (
        <section className="growth" id="growth">
            <div className='description'>
                <span className='section-title'>Growth</span>
                <div className="text-group-wrapper">
                    <div>A <span>booming</span> and <span>healthy</span> economy</div>
                    <div>Padel is the fastest growing sport in the world, with more than 100 players worldwide and an annual spend reaching the $300M mark, the Padel economy is booming, but it brings with it the benefits and challenges of paper money, centralised banking systems and growth.<br/><br/>Padelcash is the first digital currency fully focused on making the Padel Economy decentralised, free banking fees and accessible to everyone.</div>
                </div>
            </div>
            <div className='img-wrapper'>
                <img src={ai1} alt="" />
            </div>
        </section>
    )
}

export default GrowthSection