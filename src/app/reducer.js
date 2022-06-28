import categoryReducer from "./category.slice"
import productItemReducer from "./productitem.slice"
import cartReducer from "./cart.slice"
import appReducer from "../app.slice"

const rootReducer = ({
    category: categoryReducer,
    productItem: productItemReducer,
    cart: cartReducer,
    app: appReducer
}) 
export default rootReducer