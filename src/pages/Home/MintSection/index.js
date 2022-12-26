import './style.scss';
import ai3 from '../../../assets/images/995-ai3.png';

const MintSection = () => {

    return (
        <section className="mint" id="mint">
            <div className='description'>
                <span className='section-title'>Mint New Coin</span>
                <div className="text-group-wrapper">
                    <div><span>Supply</span>, Minting and <span>Rewards</span></div>
                    <div>Padelcash is fully secured and collateralised by one of the most stable and secure Stablecoins BUSD.(Binance USD).<br/><br/>This provides our VendorEcosystem accepting Padelcash the posibility to exchange Padelcash into Binance USD and Fiat immediately if they wished to do so.<br/><br/>Anyone using Padelcash in the ecosystem can swap and trade Padelcash for BinanceUSD on our Liquidity pool at PancakeSawp.</div>
                </div>
            </div>
            <div className='img-wrapper'>
                <img src={ai3} alt="" />
            </div>
        </section>
    )
}

export default MintSection