import { Link } from 'react-router-dom';
import vector1 from '../../assets/images/Vector1.png';
import vector2 from '../../assets/images/Vector2.png';
import './style.scss';

const Footer = (props: Props) => {

    return (
        <footer className="footer">
            <div className='footer-inner'>
                <div>Padelcash © 2022 All rights reserved </div>
                <div>
                    <Link to={"#"}>
                        <img src={vector1} alt="" />
                    </Link>
                    <Link to={"#"}>
                        <img src={vector2} alt="" />
                    </Link>
                </div>
                <div>www@padel.com</div>    
            </div>
        </footer>
    )
}

export default Footer