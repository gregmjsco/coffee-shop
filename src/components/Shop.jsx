import Container from "./styles/Container.style";
import Navbar from "./styles/Navbar";
import ProductsGrid from "./ProductsGrid"
import FetchGetRequest from "./FetchGetRequest";


function Shop() {
    return(
        <>
            <Container>
                <h1>Shop Page</h1>
                <Navbar></Navbar>
                <FetchGetRequest></FetchGetRequest>
                <ProductsGrid></ProductsGrid>

            </Container>
        </>
    )
}

export default Shop