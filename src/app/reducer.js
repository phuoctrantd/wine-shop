import categoryReducer from "./category.slice"
import productItemReducer from "./productitem.slice"
import cartReducer from "./cart.slice"

const rootReducer = ({
    category: categoryReducer,
    productItem: productItemReducer,
    cart: cartReducer
}) 
export default rootReducer