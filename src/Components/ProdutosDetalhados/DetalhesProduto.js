import React from "react";
import './DetalhesProdutos.css'

export default ({itens}) => {
    const cor= '#ffffff';
   return(
        <section>
            <div className="fundoImg">
                <img src="https://comeonburger.com.br/wp-content/uploads/2019/12/xbacon-especial.jpg" alt="Imagem da comida" className="image"/>
            </div>
            
            <div className= "desc">
               {itens.length > 0 && itens.map((item, key)=>(
                    <div>
                        <div className="nome">
                            <h2>{item.name}</h2>
                        </div>
                        <div className="preco">R$29,90</div>
                        <div className="descricao">Pão delicioso, compra ae desgraça</div>
                        <div className="ingredientes">Pão, bacon, hambuguer e amor</div>
                        <div className="tags">
                            <div className="tag1">Preparando</div>
                            <div className="tag2">Pronto</div>
                            <p style={{cor}}>Preparando</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
   );
}