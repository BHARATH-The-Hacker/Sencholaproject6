import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img from "../images/product1.jpg";
import img1 from "../images/product2.jpg";
import img2 from "../images/product3.jpg";
import img3 from "../images/product4.jpg";
import img4 from "../images/product5.jpg";
import img5 from "../images/product6.png";
import img6 from "../images/product7.jpg";
import img7 from "../images/product8.jpg";

function Product() {
  return (
    <div>
      <div className="row justify-content-center mx-2 my-4">
      <div className="col-sm">
      <Card style={{ width: "20rem", marginTop: "6rem"}}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>Oraimo Boom Pop Wireless Headphone</Card.Title>
          <Card.Text>
          Warranty : 1 Year Effortless warranty claims with global coverage
          </Card.Text>
          <Card.Text>
           <b>₹ 799.00</b> 
          </Card.Text>
          <Button variant="primary" className="me-5"> Buy Now </Button>
          <Button variant="primary"><i class="bi bi-cart4"></i> Add to Cart </Button>
        </Card.Body>
      </Card>
      </div>

      <div className="col-sm">
      <Card style={{ width: "20rem", marginTop: "6rem"}}>
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title>Skull Candy BOOM Bass Headphone</Card.Title>
          <Card.Text>
          Warranty : 1 Year Effortless warranty claims with global coverage
          </Card.Text>
          <Card.Text>
           <b>₹ 1199.00</b> 
          </Card.Text>
          <Button variant="primary" className="me-5"> Buy Now </Button>
          <Button variant="primary"><i class="bi bi-cart4"></i> Add to Cart </Button>
        </Card.Body>
      </Card>
      </div>

      <div className="col-sm">
      <Card style={{ width: "20rem", marginTop: "6rem"}}>
        <Card.Img variant="top" src={img2} />
        <Card.Body>
          <Card.Title>Gamer's Wireless Headphone with Mic</Card.Title>
          <Card.Text>
          Warranty : 1 Year Effortless warranty claims with global coverage
          </Card.Text>
          <Card.Text>
           <b>₹ 899.00</b> 
          </Card.Text>
          <Button variant="primary" className="me-5"> Buy Now </Button>
          <Button variant="primary"><i class="bi bi-cart4"></i> Add to Cart </Button>
        </Card.Body>
      </Card>
      </div>

      <div className="col-sm">
      <Card style={{ width: "20rem", marginTop: "6rem"}}>
        <Card.Img variant="top" src={img3} />
        <Card.Body>
          <Card.Title>Panosonic Heavy Bass Headphone</Card.Title>
          <Card.Text>
          Warranty : 1 Year Effortless warranty claims with global coverage
          </Card.Text>
          <Card.Text>
           <b>₹ 499.00</b> 
          </Card.Text>
          <Button variant="primary" className="me-5"> Buy Now </Button>
          <Button variant="primary"><i class="bi bi-cart4"></i> Add to Cart </Button>
        </Card.Body>
      </Card>
      </div>

      <div className="col-sm">
      <Card style={{ width: "20rem", marginTop: "6rem"}}>
        <Card.Img variant="top" src={img4} />
        <Card.Body>
          <Card.Title>JBL Boom Pop Wireless Headphone</Card.Title>
          <Card.Text>
          Warranty : 1 Year Effortless warranty claims with global coverage
          </Card.Text>
          <Card.Text>
           <b>₹ 499.00</b> 
          </Card.Text>
          <Button variant="primary" className="me-5"> Buy Now </Button>
          <Button variant="primary"><i class="bi bi-cart4"></i> Add to Cart </Button>
        </Card.Body>
      </Card>
      </div>

      <div className="col-sm">
      <Card style={{ width: "20rem", marginTop: "6rem"}}>
        <Card.Img variant="top" src={img5} />
        <Card.Body>
          <Card.Title>Playstation Wireless Headphone</Card.Title>
          <Card.Text>
          Warranty : 1 Year Effortless warranty claims with global coverage
          </Card.Text>
          <Card.Text>
           <b>₹ 1099.00</b> 
          </Card.Text>
          <Button variant="primary" className="me-5"> Buy Now </Button>
          <Button variant="primary"><i class="bi bi-cart4"></i> Add to Cart </Button>
        </Card.Body>
      </Card>
      </div>

      <div className="col-sm">
      <Card style={{ width: "20rem", marginTop: "6rem"}}>
        <Card.Img variant="top" src={img6} />
        <Card.Body>
          <Card.Title>Asena Universal Gaming Wireless Headphone</Card.Title>
          <Card.Text>
          Warranty : 1 Year Effortless warranty claims with global coverage
          </Card.Text>
          <Card.Text>
           <b>₹ 999.00</b> 
          </Card.Text>
          <Button variant="primary" className="me-5"> Buy Now </Button>
          <Button variant="primary"><i class="bi bi-cart4"></i> Add to Cart </Button>
        </Card.Body>
      </Card>
      </div>

      <div className="col-sm">
      <Card style={{ width: "20rem", marginTop: "6rem"}}>
        <Card.Img variant="top" src={img7} />
        <Card.Body>
          <Card.Title>Batman Edition Wireless Headphone</Card.Title>
          <Card.Text>
          Warranty : 1 Year Effortless warranty claims with global coverage
          </Card.Text>
          <Card.Text>
           <b>₹ 699.00</b> 
          </Card.Text>
          <Button variant="primary" className="me-5"> Buy Now </Button>
          <Button variant="primary"><i class="bi bi-cart4"></i> Add to Cart </Button>
        </Card.Body>
      </Card>
      </div>

    </div>
    </div>
  );
}

export default Product;
