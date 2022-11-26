import React, { useEffect, useState } from "react";
import BuscaProduto from "./BuscaProduto";
import DetalhesProduto from "./DetalhesProduto";

export default () => {
  
  //armazena produtos
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      //pegando a lista total
      let list = await BuscaProduto.getHomeList();
      setProductList(list);
    }
    loadAll();
    
  }, []);

  return(
    
    <div >
      <section >
      {productList.map((item, key)=>(
            <div>
              <DetalhesProduto key={key} itens={item.itens.itens}/>
            </div>
          ))}
      </section>
    </div>
  );
}