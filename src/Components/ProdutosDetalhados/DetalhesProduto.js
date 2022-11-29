import React from "react";
import './DetalhesProdutos.css'
import {FaShoppingCart} from 'react-icons/fa'

export default ({itens}) => {
    const cor = '#f53b02';
    const cor2 = '#ffffff';
    return (
        <section className="teste">
            <div>
                <img src="https://comeonburger.com.br/wp-content/uploads/2019/12/xbacon-especial.jpg"
                     alt="Imagem da comida" className="image"/>
                <div>
                    {itens.length > 0 && itens.map((item, key) => (
                        <div>
                            <div className="desc">
                                <div className="btn-quantidade">
                                    <button>-</button>
                                    <button>01</button>
                                    <button>+</button>
                                </div>
                                <h2 className="nome">{item.name}</h2>
                                <div className="teste2">
                                    <div className="div-preco">
                                        <div className="preco">R$29,90</div>
                                        <div className="precoMenor">R$29,90</div>
                                    </div>
                                    <div className="descricao">Pão delicioso, compra ae desgraça</div>
                                    <div className="ingredientes">Pão, bacon, hambuguer e amor</div>
                                    <div className="tags">
                                        <div style={{backgroundColor: cor2}} className="tag1">Preparando</div>
                                        <div style={{backgroundColor: cor}} className="tag2">Pronto</div>
                                    </div>
                                    <div>
                                        <p style={{color: "white"}}>Serve até 3 pessoas</p>
                                    </div>
                                </div>
                                <div>
                                    <button className="btn-comprar">
                                        <p><FaShoppingCart/> Carrinho</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
