import { useState } from "react";
import { FiLink } from "react-icons/fi";
import "./home.css"

// Components
import Menu from "../../components/Menu/menu";
import LinkItem from "../../components/LinkItem";
import api from "../../services/api";
import { saveLink } from "../../services/storeLinks"



export default function Home(){
    const [link, setLink] = useState("");
    const [data, setData] = useState({});
    const [showModal, setShowModal] = useState(false);

    // Requisição
    async function handleShortLink() {
        try {
            const response = await api.post("/shorten", {
                long_url: link
            })

            setData(response.data);
            setShowModal(true);

            saveLink('@encurtador', response.data)

            setLink('')

        }catch{
            alert("FALHA!")
            setLink('')
        }
    }

    return(
        <div className="container-home">
            <div className="logo">
                <img src="/Logo.png" alt="Sujeito link logo" />
                <h1>CutLinks</h1>
                <span>Cole seu link para encurtar</span>
            </div>

            <div className="area-input">
                <div>
                    <FiLink size={24} color="fff"/>
                    <input 
                        placeholder="Cole seu link aqui..."
                        value={link}
                        onChange={ (e) => setLink(e.target.value)}
                    />
                </div>
   
                <button onClick={handleShortLink}>
                    Gerar link
                </button>
            </div>
            <Menu />

            { showModal && (
                <LinkItem  
                    closeModal={ () => setShowModal(false) }
                    content={data}
                />
            ) }
        </div>
    )
}