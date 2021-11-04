import React from 'react';
import { Card, Button, Col, Row } from "react-bootstrap";
import Rating from "react-rating";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Zoom from "react-reveal/Zoom";
import { NavLink } from "react-router-dom";

library.add(fullStar, emptyStar);

const Course = (props) => {

    const { key, img, title, desc, price, rating, ratingCount } = props.course;
    return (
        <Col className="my-3" md={4}>
            <Zoom>
                <Card style={{ minHeight: "480px" }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text className="text-muted">{desc}</Card.Text>
                        <p>
                            {" "}
                            <b>Price: {price}$</b>
                        </p>
                        <div className="mb-3">
                            <Row>
                                <Col>
                                    <Rating
                                        readonly
                                        style={{ color: "goldenrod" }}
                                        initialRating={rating}
                                        emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
                                        fullSymbol={<FontAwesomeIcon icon={fullStar} />}
                                    />{" "}
                                    {rating}
                                </Col>
                                <Col>Total Review: {ratingCount}</Col>
                            </Row>
                        </div>
                        <div className="d-flex">
                            <NavLink to={`/courses/${key}`} className="w-50 btn btn-primary">
                                View Details
                            </NavLink>
                            <Button
                                // onClick={() => addToCart(key)}
                                className="w-50 ms-1"
                                variant="primary"
                            >
                                Add to Cart
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </Zoom>
        </Col>
    );
};

export default Course;