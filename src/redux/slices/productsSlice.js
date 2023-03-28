import {createSlice} from "@reduxjs/toolkit"
import {addProduct, deleteProduct, editProduct, getallProducts} from "../../services/api"
const productsSlice=createSlice({ 
 name:"products", 
 initialState:{ 
    products:[], 
    selectedProduct:{}, 
    errors:""
 }, 
 reducers:{ 
  setProducts(state,action){ 
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
   deleteProduct(payload);
   const index =state.products.findIndex((item)=> item.id===payload);
   if (index!==-1){ 
      state.products.splice(index,1);
   } 
  },
   updateproductReducer(state,action){ 
    const payload=action.payload; 
    editProduct(state.selectedProduct,payload);
    const index=state.products.indexOf((item)=>item.id===payload.id)
    if (index!==-1){ 
     state.products[index]=payload;
    }
   },
   addproductReducer(state,action){ 
    const payload=action.payload; 
    console.log(payload)
    addProduct(payload);
    state.products.push(payload);
    console.log(state.products);
   },
   setErrors(state,action){ 
    state.errors=action.payload;
   }
   
  }
 }); 
 export const fetchProducts = () => async (dispatch) => {
  getallProducts().then((response) => {
    dispatch(setProducts(response.data));
  });
};

export const { 
  setProducts, 
  selectProduct, 
  unselectedPoduct, 
  deleteproductReducer, 
  updateproductReducer, 
  addproductReducer, 
  setErrors}=productsSlice.actions;

export default productsSlice.reducer;