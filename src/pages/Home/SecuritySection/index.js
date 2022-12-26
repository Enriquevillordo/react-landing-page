import './style.scss';
import ai2 from '../../../assets/images/995-ai2.png';

const SecuritySection = () => {

    return (
        <section className="security" id="security">
            <div className='img-wrapper'>
                <img src={ai2} alt="" />
            </div>
            <div className='description'>
                <span className='section-title'>Security</span>
                <div className="text-group-wrapper">
                    <div>Digital <span>protection</span> of your <span>wealth</span></div>
                    <div>Padelcash is fully secured and collateralised by one of the most stable and secure Stablecoins BUSD.(Binance USD).<br/><br/> This provides our VendorEcosystem accepting Padelcash the posibility to exchange Padelcash into Binance USD and Fiat immediately if they wished to do so. <br/><br/>Anyone using Padelcash in the ecosystem can swap and trade Padelcash for BinanceUSD on our Liquidity pool at PancakeSawp.</div>
                </div>
            </div>
        </section>
    )
}

export default SecuritySection