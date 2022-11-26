const API_BASE = 'https://634d7dcff5d2cc648ea77bd6.mockapi.io/api/produtos/product';

const basicfetch = async( endpoint )=>{
   const req = await fetch(`${endpoint}`);
   const json = await req.json();
   return json;
}

export default {
    getHomeList: async ()=>{
        return[
            {
                itens: await basicfetch(`${API_BASE}`)
            }
        ]
    }
}