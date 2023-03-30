import "../UserNotFound/UserNotFound.css";

export default function UserNotFound(props) {
    return (
        <div className="page">
            <div className="box">
                <h1>Oups,</h1>
                <p>Il semblerait que l'utilisateur n'existe pas !</p>
            </div>
        </div>
    );
};