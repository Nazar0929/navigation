import { Link, useLocation } from "react-router-dom"


function Products () {
    const location = useLocation()
// console.log(location, "products");

    return(
        <>
        <h1>Products Page</h1>
        <Link to="/products/:1" state={{from:location}}>Open Details Products</Link>
        </>
    )
}
export default Products