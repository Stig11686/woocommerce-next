import styled from "styled-components";
import Image from "next/image";

const ProductCard = (props) => {
    const { product } = props;

    return (
        <Card>
            <ImageContainer>
                <Image
                    src={product.images[0].src}
                    alt={product.images[0].alt}
                    layout="fill"
                    objectFit="cover"
                />
            </ImageContainer>
            <Details>
                <span>{product.name}</span>
                <span>--</span>
                <span><strong>£{product.price}</strong></span>
            </Details>
        </Card>
    );
}

export default ProductCard;

const Card = styled.div`
    width: 100%;
    border-radius: 10px;

    `;

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    padding-bottom: 100%;
`;

const Details = styled.div`
    width: 100%;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 5%;
    padding-bottom: 7%;
    display: flex;
    justify-content: center;
    gap: 12px;
`