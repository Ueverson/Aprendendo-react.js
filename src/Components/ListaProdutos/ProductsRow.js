import React from "react";
import'./ProductsRow.css'

export default ({title, itens}) => {
   
   return(
        <div className="movieRow">
            <h2 className="titulo">{title}</h2>
            <div className="fundo">
               {itens.length > 0 && itens.map((item, key)=>(
                    <div className="item" >
                        <div className="name" >{item.name}</div>
                        <div className="description">{item.description}</div>
                        <img src="https://comeonburger.com.br/wp-content/uploads/2019/12/xbacon-especial.jpg" width="250" height="250"></img>
                    </div>
                ))}
            </div>
        </div>
   );
}