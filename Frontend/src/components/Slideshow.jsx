import { UncontrolledCarousel } from "reactstrap";
import styled from "styled-components";

const Cont = styled.div`
    width: 50%;
    margin: auto;
    margin-bottom: 70px;

    img {
        height: 400px;
        object-fit: cover;
    }
`;

const Slideshow = () => {
    return (
        <Cont className="slideshow">
            <UncontrolledCarousel
                interval={2000}
                items={[
                    {
                        key: 1,
                        src: "https://www.microsave.net/wp-content/uploads/2020/05/Image_2-2.jpg",
                    },
                    {
                        key: 2,
                        src: "https://www.foodbusinessnews.net/ext/resources/2020/5/WheatField_Lead.jpg?t=1589310291&width=1080",
                    },
                    {
                        key: 3,
                        src: "https://post.healthline.com/wp-content/uploads/2020/08/parboiled-rice-1200x628-facebook-1200x628.jpg",
                    },
                    {
                        key: 4,
                        src: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/sugar-explained-granulated-and-cubed-in-bowls-1b72cc9.jpg?quality=90&resize=620%2C310",
                    },
                ]}
            />
        </Cont>
    );
};

export { Slideshow };
