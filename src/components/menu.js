export default function Menu (props) {

    return (
        <section className="menu">
            <ul>
                <li className="menuButton">
                    <i className="fas fa-bars"/>
                </li>
                <li>
                    <i className="fas fa-cube"/>
                </li>
                <li>
                    <i className="fas fa-cog"/>
                </li>
                <li>
                    <i className="fas fa-chart-bar"/>
                </li>
                <li>
                    <i className="fas fa-cog"/>
                </li>
                <li>
                    <i className="fas fa-cube"/>
                </li>
                <li>
                    <i className="fas fa-cog"/>
                </li>
                <li>
                    <i className="fas fa-chart-bar"/>
                </li>
                <li>
                    <i className="fas fa-chart-line"/>
                </li>
                <li>
                    <i className="fas fa-cog"/>
                </li>
                <li>
                    <i className="fas fa-cube"/>
                </li>
                <li id="mouse">
                    <i className="fas fa-chevron-up"/>
                    <i className="fas fa-mouse"/>
                    <i className="fas fa-chevron-down"/>
                </li>
                <li className="sign-out">
                    <i className="fas fa-sign-out-alt"/>
                </li>
            </ul>
        </section>
    )
}