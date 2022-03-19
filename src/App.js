import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";

export default class App extends Component {
  state = {
    currentCategory: "",
    products: [],
    carts: []
  }
  addToCart = (product) => {
    let newCard = this.state.carts;
    //var addedItem = newCard.find(x=>x.product.id === product.id);
    newCard.push({ product: product, quantity: 1 });
    this.setState({ carts: newCard });
  }
  componentDidMount() {
    this.getProducts();
  }
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  }
  getProducts = (seoUrl) => {
    let url = "http://localhost:3000/products";
    if (seoUrl) {
      url += "?categoryId=" + seoUrl
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  }
  render() {
    let productInfo = {
      title: "Product List"
    };
    let categoryInfo = {
      title: "Category List"
    };

    return (
      <div>
        <Container>
          {/* <Row className="mb-2"> */}
          <Navi carts={this.state.carts}/>
          {/* </Row> */}
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo} />
            </Col>
            <Col xs="9">
              <ProductList
                addToCart={this.addToCart}
                products={this.state.products}
                currentCategory={this.state.currentCategory}
                info={productInfo} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
