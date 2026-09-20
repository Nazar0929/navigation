
import { useLocation, Link } from "react-router-dom"

function ProductDetails () {
    const location = useLocation()
    // console.log(location);
    const backLink = location.state?.from??"/products"
    return(
        <>
        <h1>ProductDetails Page</h1>
        <Link to={backLink}>Back To Products</Link>
        </>
    )
}
export default ProductDetails