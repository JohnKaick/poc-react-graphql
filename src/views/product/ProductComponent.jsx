import React from 'react'
import { Row, Col, Layout, Divider, Form, Input, Button, Card, Avatar, Icon, Typography, List, Alert } from 'antd';
import ProductEditComponent from './modal/ProductEditComponent';
import ProductDeleteComponent from './modal/ProductDeleteComponent';
const { Title } = Typography;

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
        marginTop: 30
    },
    avatarProduct: {
        color: 'white',
        backgroundColor: 'blue'
    },
    iconProduct: {
        fontSize: 20,
        margin: 10
    },
    rowProduct: {
        borderBottom: '1px solid rgb(0, 0, 0, 0.20)',
        margin: -24,
    },
    listProduct: {
        marginLeft: 24,
        marginTop: 24,
        marginBottom: 0,
    }
}

const ProductComponent = ({
    description,
    price,
    msgError,
    all,
    total,
    onChange,
    onInsert,
    onEdit,
    onDelete,
}) => (
        <Layout style={styles.layout}>
            <Row>
                <Col>
                    <Title level={3}>
                        Produtos
                        <small style={styles.headerProduct}> {total ? total : 0} cadastrados</small>
                        <Divider style={styles.dividirHeader} />
                    </Title>
                </Col>
            </Row>
            <Row type="flex" justify="center">
                <Col span={10}>
                    <Form>
                        <Col span={17}>
                            <Form.Item label="Descrição:" vertical>
                                <Input placeholder="Digite a descrição do produto" name='description' value={description} onChange={onChange} />
                            </Form.Item>
                        </Col>
                        <Col span={6} offset={1}>
                            <Form.Item label="Preço:" vertical>
                                <Input placeholder="Ex.: R$ 99,99" name='price' value={price} onChange={onChange} />
                            </Form.Item>
                        </Col>
                    </Form>
                </Col>
            </Row>
            <Row type="flex" justify="center">
                <Col span={10}>
                    <div>
                        {msgError && (
                            <Alert message={msgError} type="error" />
                        )}
                    </div>
                    <Button block style={styles.buttonSave} onClick={onInsert}>Salvar</Button>
                </Col>
            </Row>
            <Row type="flex" justify="center">
                <Col span={10}>
                    <Card title="Lista de produtos" style={styles.cardProduct}>
                        {all && all.length !== 0 ? (
                            <div>
                                {(all || []).map((p, i) => (
                                    <div key={i} style={styles.rowProduct}>
                                        <List.Item style={styles.listProduct}>
                                            <Col span={3}>
                                                <Avatar shape="square" size="large" style={styles.avatarProduct}>{i + 1}</Avatar>
                                            </Col>
                                            <Col span={16}>
                                                <b>{p.description}</b>
                                                <p>R$ {p.price}</p>
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
                                        </List.Item>
                                    </div>
                                ))}
                            </div>
                        ) : (
                                <b>Nenhum produto cadastrado</b>
                            )}
                    </Card>
                </Col>
            </Row>
        </Layout >
    )

export default ProductComponent