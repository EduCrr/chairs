import { useState, createContext, useEffect } from "react";
import firebase from "../firebaseConnection";
export const ProductContext = createContext({});

function ProductProvider({ children }) {
  const [myProducts, setMyProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);

  async function loadProducts() {
    setShowSpinner(true);
    await firebase
      .firestore()
      .collection("products")
      .get()
      .then((snapshot) => {
        let lista = [];
        snapshot.forEach((item) => {
          lista.push({
            id: item.id,
            title: item.data().title,
            category: item.data().category,
            image: item.data().image,
            description: item.data().description,
            price: item.data().price,
          });
        });
        setMyProducts(lista);
        setShowSpinner(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function storageCart(item) {
    localStorage.setItem("cart", JSON.stringify(item));
  }
  function loadStorage() {
    let dadosStorage = localStorage.getItem("cart");
    if (dadosStorage) {
      setCart(JSON.parse(dadosStorage));
    }
  }

  useEffect(() => {
    loadStorage();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        myProducts,
        loadProducts,
        storageCart,
        cart,
        setCart,
        loadStorage,
        showSpinner,
      }}
    >
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
