import Container from "./styles/Container.style";
import Navbar from "./styles/Navbar";
import ProductsGrid from "./ProductsGrid"


function Shop() {
    return(
        <>
            <Container>
                <Navbar></Navbar>
                <ProductsGrid></ProductsGrid>
            </Container>
        </>
    )
}

export default Shop