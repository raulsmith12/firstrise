import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
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

    return (
        <Container className="pt-5 mt-2">
            <h2 className="display-3">Menu</h2>
            <h3>All Day Breakfast</h3>
            {menuItems.map(item => {
                if (item.categories[0].slug === 'breakfast') {
                    return (
                        <div>{item.name}</div>
                    )
                }
            })}
            <h3>Lunch</h3>
            {menuItems.map(item => {
                if (item.categories[0].slug === 'lunch') {
                    return (
                        <div>{item.name}</div>
                    )
                }
            })}
            <h3>Coffee</h3>
            {menuItems.map(item => {
                if (item.categories[0].slug === 'drinks') {
                    return (
                        <div>{item.name}</div>
                    )
                }
            })}
        </Container>
    )
};

export default Order;