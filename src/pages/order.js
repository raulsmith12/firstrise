import React, { useEffect, useState } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import WooCommerce from '../WooCommerce';

const Order = () => {

    const [menuItems, setMenuItems] = useState();

    useEffect(() => {
        WooCommerce.get("products", {
            per_page: 100,
        })
            .then((response) => {
                console.log(response.data);
                setMenuItems(response.data);
            })
            .catch((error) => {
                console.log(error.response.data);
            })
    }, [])

    const loading = <div>loading</div>

    return (
        <Container fluid className="pt-5 mt-5 menu-bg">
            <Row>
                <Col>
                    <Container>
                        <h2 className="display-3">Menu</h2>
                        <h3>
                            <i className="fas fa-bacon"></i>&nbsp;&nbsp;
                            All Day Breakfast
                        </h3>
                        {menuItems === undefined ? loading : menuItems.map(item => {
                            if (item.categories[0].slug === 'breakfast') {
                                return (
                                    <div key={item.id} className="px-1 py-1">
                                        <Button variant="primary" className="menu-title">
                                            <Link to={`products/${item.id}`} className="text-white">
                                                <h4>
                                                    <i className="fas fa-arrow-circle-right"></i>&nbsp;&nbsp;
                                                    {item.name}
                                                </h4>
                                            </Link>
                                        </Button>
                                    </div>
                                )
                            }
                        })}
                        <h3>
                            <i className="fas fa-bread-slice"></i>&nbsp;&nbsp;
                            Lunch
                        </h3>
                        {menuItems === undefined ? loading : menuItems.map(item => {
                            if (item.categories[0].slug === 'lunch') {
                                return (
                                    <div key={item.id} className="px-1 py-1">
                                        <Button variant="primary" className="menu-title">
                                            <Link to={`products/${item.id}`} className="text-white">
                                                <h4>
                                                    <i className="fas fa-arrow-circle-right"></i>&nbsp;&nbsp;
                                                    {item.name}
                                                </h4>
                                            </Link>
                                        </Button>
                                    </div>
                                )
                            }
                        })}
                        <h3>
                            <i className="fas fa-coffee"></i>&nbsp;&nbsp;
                            Coffee
                        </h3>
                        {menuItems === undefined ? loading : menuItems.map(item => {
                            if (item.categories[0].slug === 'drinks') {
                                return (
                                    <div key={item.id} className="px-1 py-1">
                                        <Button variant="primary" className="menu-title">
                                            <Link to={`products/${item.id}`} className="text-white">
                                                <h4>
                                                    <i className="fas fa-arrow-circle-right"></i>&nbsp;&nbsp;
                                                    {item.name}
                                                </h4>
                                            </Link>
                                        </Button>
                                    </div>
                                )
                            }
                        })}
                    </Container>
                </Col>
            </Row>
        </Container>
    )
};

export default Order;