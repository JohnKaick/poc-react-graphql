import React from 'react';
import { Row, Col, Layout, Divider, Form, Input, Button, Typography, Card, Avatar, Icon, Select, List, Alert } from 'antd';
import InputDate from '../../components/InputDate'
import DeliveryEditComponent from './modal/DeliveryEditComponent';
import DeliveryDeleteComponent from './modal/DeliveryDeleteComponent';
const { Title } = Typography;
const { Option } = Select;

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
    cardDelivery: {
        margin: 30,
    },
    avatarDelivery: {
        color: 'white',
        backgroundColor: 'blue'
    },
    iconDelivery: {
        fontSize: 20,
        margin: 10
    },
    rowDelivery: {
        borderBottom: '1px solid rgb(0, 0, 0, 0.30)',
        margin: -24,
    },
    listDelivery: {
        marginLeft: 24,
        marginTop: 24,
        marginBottom: 0,
    }
}

const DeliveryComponent = ({
    address,
    date,
    description,
    msgError,
    carrier,
    productsInsert,
    deliveries,
    carriers,
    products,
    onChange,
    onChangeDate,
    onChangeCarrier,
    onChangeProduct,
    onInsert,
    onEdit,
    onDelete,
}) => (
        <Layout style={styles.layout}>
            <Row>
                <Col>
                    <Title level={3}>
                        Entregas
                        <small style={styles.headerProduct}> {deliveries ? deliveries.total : 0} cadastrados</small>
                        <Divider style={styles.dividirHeader} />
                    </Title>
                </Col>
            </Row>
            <Row type="flex">
                <Col span={12}>
                    <Form>
                        <Row>
                            <Col span={24}>
                                <Form.Item label="Local:" vertical>
                                    <Input placeholder="Digite o local da entrega a ser realizada" name='address' value={address} onChange={onChange} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <Form.Item label="Entregador:">
                                    <Select value={carrier} placeholder="Selecione o entregador" onSelect={(value, event) => onChangeCarrier(value, event)}>
                                        {(carriers || []).map((c, i) => (
                                            <Option key={i} value={c._id}>{c.name}</Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={10} offset={2}>
                                <Form.Item label="Data:" vertical>
                                    <InputDate
                                        value={date}
                                        onChange={onChangeDate} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Form.Item label="Produtos:">
                                    <Select value={productsInsert} mode="multiple" placeholder="Selecione os produtos para essa entrega" onSelect={(value, event) => onChangeProduct(value, event)}>
                                        {(products.all || []).map((p, i) => (
                                            <Option key={i} value={p._id}>{p.description}</Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Form.Item label="Descrição:" vertical>
                                    <Input type="textarea" placeholder="Escreva observações sobre a entrega a ser feita" name='description' value={description} onChange={onChange} />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                    <Row>
                        <Col>
                            <div>
                                {msgError && (
                                    <Alert message={msgError} type="error" />
                                )}
                            </div>
                        </Col>
                        <Button block style={styles.buttonSave} onClick={onInsert}>Salvar</Button>
                    </Row>
                </Col>
                <Col span={11}>
                    <Card title="Entregas" style={styles.cardDelivery}>
                        {deliveries && deliveries.all.length !== 0 ? (
                            <div>
                                {(deliveries.all || []).map((d, i) => (
                                    <div key={i} style={styles.rowDelivery}>
                                        <List.Item style={styles.listDelivery}>
                                            <Col span={3}>
                                                <Avatar shape="square" size="large" style={styles.avatarDelivery}>{i + 1}</Avatar>
                                            </Col>
                                            <Col span={16}>
                                                <b>{d.address}</b>
                                                <p>{d.date}</p>
                                            </Col>
                                            <Col span={5}>
                                                <DeliveryEditComponent delivery={d} onEdit={onEdit}>
                                                    {({ open }) => (
                                                        <Icon type="edit" theme="filled" style={styles.iconDelivery} onClick={open} />
                                                    )}
                                                </DeliveryEditComponent>
                                                <DeliveryDeleteComponent delivery={d} onDelete={onDelete}>
                                                    {({ open }) => (
                                                        <Icon type="delete" theme="filled" style={styles.iconDelivery} onClick={open} />
                                                    )}
                                                </DeliveryDeleteComponent>
                                            </Col>
                                        </List.Item>
                                    </div>
                                ))}
                            </div>
                        ) : (
                                <b>Nenhuma entrega cadastrada</b>
                            )}
                    </Card>
                </Col>
            </Row>
        </Layout >
    )

export default DeliveryComponent