import UpdateForm from "../components/UpdateForm.js";

export default function UpdateUser(props) {
    // récupération de l'article en paramètre de l'url
    const commonProps = props.location.state.user;

    return (
        <section className="background">
            <div className="box">
                <UpdateForm commonProps={commonProps}/>
            </div>
        </section>
    );
};