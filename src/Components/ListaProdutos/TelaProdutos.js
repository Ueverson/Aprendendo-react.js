import Products from "./Products";
import ProductsRow from "./ProductsRow";
import React, { useEffect, useState } from "react";

export default () => {
  
  //armazena produtos
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      //pegando a lista total
      let list = await Products.getHomeList();
      setProductList(list);
    }
    loadAll();
    
  }, []);

  return(
    
    <div className="page">
      <section className="lists">
      {productList.map((item, key)=>(
            <div>
              <ProductsRow key={key} title={item.title} itens={item.itens.itens}/>
            </div>
          ))}
      </section>

    </div>
  );
}