import ProductCard from "./ProductCard";
import styled from "styled-components";

const ProductGrid = (props) => {
    const { products } = props;

    return (
        <Grid>
            {products.map((product) => {
                return <ProductCard product={product} key={product.id} />
            })}
        </Grid>
    )
}

export default ProductGrid;

const Grid = styled.div `
    width: 100%;
    display: grid;
    grid-template-columns: 15% 15% 15% 15% 15%;
    gap: 16x;
`