import "./error.css";
import { Link } from "react-router-dom";

export default function Error() {
    return (
        <>
            <div className="container-error blink">
            <img 
                src="error-404.webp" 
                alt=" erro, img de pagina não encontrada" 
            />
            <h1>Página não encontrada  ):</h1>
            
        </div>
        <div className="voltarMenu">
            <Link to="/">
                Voltar para home
            </Link>
         </div>
        </>
    )
}