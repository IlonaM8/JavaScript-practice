function createStore() {
  // let products = () => {
  //   let storeArr = []
  //   return storeArr;
  // };

  const store = [];
  return function(product) {
   store.push(product);
   console.log(store)
  }
  
 
}




const redPants = { id: 1, name: 'Red Pants' };
const whiteHat = { id: 2, name: 'White Hat' };
const blackSneakers = { id: 3, name: 'Black Sneakers' };

console.log('--- Dress Store ---');
const dressStore = createStore();
dressStore(redPants);
dressStore(whiteHat)

console.log('--- Shoes Store ---');
const shoesStore = createStore()(blackSneakers); //entrambi i modi
//shoesStore(blackSneakers);


//