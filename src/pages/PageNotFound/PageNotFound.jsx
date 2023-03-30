import "../PageNotFound/PageNotFound.css";


export default function PageNotFound(props) {
    return (
        <div className="page">
            <div className="box">
                <h1>Oups,</h1>
                <p>Il semblerait que la page que vous cherchez n'existe pas !</p>
            </div>
        </div>
    );
};