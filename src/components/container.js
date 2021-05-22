import BoxHeader from './boxHeader.js';
import UserList from './userList.js';

export default function Container (props) {

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