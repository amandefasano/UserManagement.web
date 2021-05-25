import { Link } from "react-router-dom";

export default function Header(props) {
    // const parts = window.location.pathname.split('/');
    // parts.shift();

    // let currentPath = '';
    // const crumbs = parts.map(part => {
    //     currentPath += '/' + part;

    //     return (
    //         <div key={part}>
    //             <i className="fas fa-chevron-right"></i>
    //             <Link to={currentPath} className="nav-text">{t(part)}</Link>
    //         </div>
    //     );
    // });

    return (
        <header>
            <nav>
                <div className='connectedUser'>
                    <img src="/assets/WeDeal.jpg" alt="logo weDeal" className="logo"/>
                    <img src="/assets/Intermarche.png" alt="logo Intermarché" className="logo"/>
                    <div className='userInfos'>
                        <p className='nav-text userName'>David Accaries</p>
                        <p className='nav-text status'>Directeur Magasin</p>
                    </div>
                </div>

                <div className='shortcutMenu'>
                    <ul className='scMenuItems'>
                        <li className="scMenuItem"> 
                            <i className="fas fa-users-cog"/>
                        </li>
                        <li className="scMenuItem">
                            <i className="fas fa-cube"/>
                        </li>
                        <li className="scMenuItem">
                            <i className="fas fa-tag"/>
                        </li>
                        <li className="scMenuItem">
                            <i className="fas fa-chart-bar"/>
                        </li>
                        <li className="scMenuItem">
                            <i className="fas fa-cube"/>
                        </li>
                        <li className="scMenuItem">
                            <i className="fas fa-tag"/>
                        </li>
                    </ul>
                </div>

                <div className="kiosksManagement">
                    <img src="/assets/kioskWhite.png" alt="Icone d'une borne" className="logo"/>
                    <div className="kiosksNumber">
                        <p className="nav-text machine">Machine(s)</p>
                        <p className="machines-number">8888 / 8888</p>
                    </div>
                </div>
            </nav>

            <div className="breadcrumb">
                <i className="fas fa-home"/>
                <p className="nav-text">Accueil</p>
                <i className="fas fa-chevron-right"></i>
                <Link to="/users" className="nav-text">Utilisateurs</Link>
            </div>
        </header>
    );
}