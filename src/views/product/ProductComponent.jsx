import React from 'react'
import { Row, Col, Layout, Divider, Form, Input, Button, Card, Avatar, Icon } from 'antd';
import ProductEditComponent from './modal/ProductEditComponent'
import ProductDeleteComponent from './modal/ProductDeleteComponent'

const ProductComponent = ({
    description,
    price,
    products,
    amountProduct,
    onChange,
    onInsert,
    onEdit,
    onDelete,
}) => (
        <Layout style={styles.layout}>
            <Row>
                <Col>
                    <h1>
                        Produtos
                        <small style={styles.headerProduct}> {amountProduct ? amountProduct : 0} cadastrados</small>
                        <Divider style={styles.dividirHeader} />
                    </h1>
                </Col>
            </Row>
            <Row type="flex" justify="center">
                <Col span={10}>
                    <Form>
                        <Col span={18}>
                            <Form.Item label="Descrição:" vertical>
                                <Input placeholder="Digite a descrição do produto" name='description' value={description} onChange={onChange} />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item label="Preço:" vertical>
                                <Input placeholder="Ex.: R$ 99,99" name='price' value={price} onChange={onChange} />
                            </Form.Item>
                        </Col>
                    </Form>
                    <Button block style={styles.buttonSave} onClick={onInsert}>Salvar</Button>
                </Col>
            </Row>
            <Row type="flex" justify="center">
                <Col span={10}>
                    <Card title="Lista de produtos" style={styles.cardProduct}>
                        {(products || []).map((p, i) => (
                            <div key={i}>
                                <Row>
                                    <Col span={3}>
                                        <Avatar shape="square" size="large" style={styles.avatarProduct}>1</Avatar>
                                    </Col>
                                    <Col span={16}>
                                        <b>{p.description}</b>
                                        <p>{p.price}</p>
                                    </Col>
                                    <Col span={5}>
                                        <ProductEditComponent product={p} onEdit={onEdit}>
                                            {({ open }) => (
                                                <Icon type="edit" theme="filled" style={styles.iconProduct} onClick={open} />
                                            )}
                                        </ProductEditComponent>
                                        <ProductDeleteComponent product={p} onDelete={onDelete}>
                                            {({ open }) => (
                                                <Icon type="delete" theme="filled" style={styles.iconProduct} onClick={open} />
                                            )}
                                        </ProductDeleteComponent>
                                    </Col>
                                </Row>
                                <Divider />
                            </div>
                        ))}
                    </Card>
                </Col>
            </Row>
        </Layout >
    )

const styles = {
    layout: {
        background: '#fff',
        padding: 20,
    },
    headerProduct: {
        color: 'rgb(0, 0, 0, 0.45)'
    },
    dividirHeader: {
        marginTop: 5,
        background: 'black'
    },
    buttonSave: {
        color: 'white',
        background: 'green',
    },
    cardProduct: {
        margin: 30,
    },
    avatarProduct: {
        color: 'white',
        backgroundColor: 'blue'
    },
    iconProduct: {
        fontSize: 20,
        margin: 10
    }
}
export default ProductComponent