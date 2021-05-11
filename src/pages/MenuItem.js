import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import WooCommerce from '../WooCommerce';

const MenuItem = (props) => {
    const [item, setItem] = useState();
    const [variations, setVariations] = useState();
    const [attr1, setAttr1] = useState();
    const [attr2, setAttr2] = useState();
    const [attr3, setAttr3] = useState();
    const [price, setPrice] = useState();
    let { id } = useParams();

    useEffect(() => {
        WooCommerce.get(`products/${id}`)
            .then((response) => {
                setItem(response.data);
                setPrice(response.data.price);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error.response.data);
            })
    }, [])

    useEffect(() => {
        WooCommerce.get(`products/${id}/variations`,{
            per_page: 50,
        })
            .then((response) => {
                setVariations(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error.response.data);
            })
    }, [])

    const handleAttrChange = (e, attr) => {
        if (attr === 1) {
            setAttr1(e.target.value)
        } else if (attr === 2) {
            setAttr2(e.target.value)
        } else if (attr === 3) {
            setAttr3(e.target.value)
        } else (
            console.log(e.target.value, attr)
        )
    } 

    const loading = <div>loading</div>

    return (
        <Container fluid className="pt-5 mt-5 menu-bg">
            {item === undefined ? loading : 
                <>
                    <h2 className="display-1">{item.name}</h2>
                    <Row>
                        <Col md={7}>
                            {item.images.length === 0 ?
                                <img src="https://galacticblue.net/firstrisebakery/wp-content/uploads/2021/04/logo.jpg" alt="First Rise Bakery" width="100%" />
                            : <img src={item.images[0].url} alt={item.images[0].alt} width="100%" />
                            }
                        </Col>
                        <Col md={5}>
                            <div dangerouslySetInnerHTML={{__html: item.description}} className="prod-desc" />
                            {item.categories[0].slug === 'drinks' && 
                                <h3>This is a drink</h3>
                            }
                            {item.categories[0].slug !== 'drinks' &&
                                item.attributes.length > 0 &&
                                    item.attributes.map(att => {
                                        return (
                                            <Row key={att.position}>
                                                <Col md={6}>
                                                    <h4>{att.name}</h4>
                                                </Col>
                                                <Col md={6}>
                                                    {att.options.length > 0 &&
                                                        <select onChange={e => handleAttrChange(e, att.position + 1)}>
                                                            <option>Please Select</option>
                                                            {att.options.map(option => {
                                                                return <option value={option}>{option}</option>
                                                            })}
                                                        </select>
                                                    }
                                                </Col>
                                            </Row>
                                        )
                                    })
                                
                            }
                            <h3 className="display-1">{price}</h3>
                        </Col>
                    </Row>
                </>
            }
        </Container>
    )
}

export default MenuItem;