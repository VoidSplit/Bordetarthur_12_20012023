import "../UserNotFound/UserNotFound.css";

/**
 * Generate the UserNotFound pag
 * @returns React Element
 */
export default function UserNotFound() {
    return (
        <div className="page">
            <div className="box">
                <h1>Oups,</h1>
                <p>Il semblerait que l'utilisateur n'existe pas !</p>
            </div>
        </div>
    );
};