import {Link} from 'react-router-dom';
import BoxHeader from '../components/BoxHeader.js';
import UserList from '../components/UserList.js';

export default function Home() {
    
    return (
        <section className="background">
            <div className="addUser">
                <Link to="/users/new">
                    <i className="fas fa-plus"/>
                </Link>
            </div>

            <div className="box">
                <BoxHeader/>
                <UserList/>
            </div>
        </section>
    )
}