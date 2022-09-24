import Image from "next/image";
import React from "react";
import DetailsThumb from "./DetailsThumb";

class ProductSlider extends React.Component {
  state = {
    products: [
      {
        _id: "1",
        title: "Koton",
        src: [
          "https://cdn.dsmcdn.com/mnresize/1200/1800/ty532/product/media/images/20220914/15/175190957/569179350/1/1_org_zoom.jpg",
          "https://cdn.dsmcdn.com/mnresize/1200/1800/ty532/product/media/images/20220914/15/175190957/569179350/2/2_org_zoom.jpg",
          "https://cdn.dsmcdn.com/mnresize/1200/1800/ty533/product/media/images/20220914/15/175190957/569179350/4/4_org_zoom.jpg",
          
        ],
        count: 1,
      },
    ],
    index: 0,
  };

  myRef = React.createRef();

  handleTab = (index) => {
    this.setState({ index: index });
    const images = this.myRef.current.children;
    // for (let i = 0; i < images.length; i++) {
    //   images[i].className = images[i].className.replace("active", "");
    // }
    // images[index].className = "active";
  };

  componentDidMount() {
    const { index } = this.state;
    this.myRef.current.children[index].className = "active";
  }

  render() {
    const { products, index } = this.state;
    return (
      <div className="app">
        {products.map((item) => (
          <div className="details flex" key={item._id}>
            <div className="box flex flex-col">
              <DetailsThumb
                images={item.src}
                tab={this.handleTab}
                myRef={this.myRef}
              />
            </div>


            <figure className="w-72 mx-10 rounded">
              
              <Image className="block rounded" src={item.src[index]} layout="responsive" width={356} height={533} objectFit="cover" alt={"product zoom"}  />
            </figure>
          </div>
        ))}
      </div>
    );
  }
}

export default ProductSlider;
