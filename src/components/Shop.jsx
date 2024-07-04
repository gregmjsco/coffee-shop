import Container from "./styles/Container.style";
import ProductsGrid from "./ProductsGrid"
import FetchGetRequest from "./FetchGetRequest";


function Shop() {
    return(
        <>
            <Container>
                <h1>Shop Page</h1>
                <FetchGetRequest></FetchGetRequest>
                <ProductsGrid></ProductsGrid>

            </Container>
        </>
    )
}

export default Shop