import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import alertify from "alertifyjs";
import { Route, Router, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import CartList from "./CartList";

export default class App extends Component {
  state = {
    currentCategory: "",
    products: [],
    carts: []
  }
  addToCart = (product) => {
    let newCart = this.state.carts;
    var addedItem = newCart.find(x => x.product.id === product.id);
    if (addedItem) {
      addedItem.quantity = addedItem.quantity + 1
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ carts: newCart });
    alertify.notify(product.productName + " Sepete Eklendi", "success", 5);
  }
  removeFromCart = (product) => {
    let currentCarts = this.state.carts;
    let index = this.state.carts.findIndex(x => x.product.id === product.id);
    if (currentCarts[index].quantity == 1) {
      currentCarts.splice(index, 1);
    } else {
      currentCarts[index].quantity -= 1;
    }
    this.setState({ carts: currentCarts })
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
          <Navi removeFromCart={this.removeFromCart} carts={this.state.carts} />
          {/* </Row> */}
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo} />
            </Col>
            <Col xs="9">
              <Routes>
                <Route path="/" element={
                  <ProductList
                    addToCart={this.addToCart}
                    products={this.state.products}
                    currentCategory={this.state.currentCategory}
                    info={productInfo} />
                } />
                <Route path="/cart" element={<CartList />} />
                <Route path="/product" element={
                  <ProductList
                    addToCart={this.addToCart}
                    products={this.state.products}
                    currentCategory={this.state.currentCategory}
                    info={productInfo} />
                } />
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
