import "../PageNotFound/PageNotFound.css";

/**
 * Generate the PageNotFound pag
 * @returns React Element
 */
export default function PageNotFound() {
    return (
        <div className="page">
            <div className="box">
                <h1>Oups,</h1>
                <p>Il semblerait que la page que vous cherchez n'existe pas !</p>
            </div>
        </div>
    );
};