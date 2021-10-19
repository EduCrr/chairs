import { useState, createContext } from "react";
import firebase from "../firebaseConnection";
export const ProductContext = createContext({});

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  async function loadProducts() {
    await firebase
      .firestore()
      .collection("products")
      .get()
      .then((snapshot) => {
        let lista = [];
        snapshot.forEach((item) => {
          lista.push({
            id: item.id,
            title: item.title,
            category: item.category,
            images: item.image,
            description: item.description,
            price: item.price,
          });
        });
        setProducts(lista);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  loadProducts();

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;

/*
import {useContext} from...
import {ProductContext}

function {
    const {} = useContext(ProductContext)
}
*/
