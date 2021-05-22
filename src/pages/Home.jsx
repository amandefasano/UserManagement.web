import BoxHeader from '../components/boxHeader.js';
import UserList from '../components/userList.js';

export default function Home() {
    
    return (
        <section className="background">
            <i className="fas fa-plus addUser"/>
            <div className="box">
                <BoxHeader/>
                <UserList/>
            </div>
        </section>
    )
}