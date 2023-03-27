import {createSlice} from "@reduxjs/toolkit"
const productsSlice=createSlice({ 
 name:"products", 
 initialState:{ 
    products:[], 
    selectedProduct:{}, 
    errors:""
 }, 
 reducers:{ 
  populateProducts(state,action){ 
    state.products=action.payload;
  },
  selectProduct(state,action){ 
   state.selectedProduct=action.payload;
  },
  unselectedPoduct(state,action){ 
    state.selectedProduct=null;
  },
  deleteproductReducer(state,action){ 
   const payload =action.payload;
   const index =state.products.findIndex((item)=> item.id===payload)
   if (index!==-1){ 
      state.products.splice(index,1)
   } 
  }

 }

})