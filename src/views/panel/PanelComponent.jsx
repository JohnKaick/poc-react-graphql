import React from 'react';
import { Row, Col, Layout, Divider, Typography, Card, Avatar, Tag, List } from 'antd';
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
    cardDelivery: {
        margin: 30,
        textAlign: 'center'
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
        textAlign: 'left'
    },
    tag: {
        color: 'black',
        fontWeight: 'bold',
    }
}

const DeliveryComponent = ({
    all,
    onChange,
    onChangeDate,
}) => (
        <Layout style={styles.layout}>
            <Row>
                <Col>
                    <Title level={3}>
                        Painel de Entregas
                        <Divider style={styles.dividirHeader} />
                    </Title>
                </Col>
            </Row>
            <Row type="flex" justify="center">
                <Col span={10}>
                    <Card title="Acompanhamento de Entregas" style={styles.cardDelivery}>
                        {all && all.length !== 0 ? (
                            <div>
                                {(all || []).map((d, i) => (
                                    <div key={i} style={styles.rowDelivery}>
                                        <List.Item style={styles.listDelivery}>
                                            <Col span={3}>
                                                <Avatar shape="square" size="large" style={styles.avatarDelivery}>{i + 1}</Avatar>
                                            </Col>
                                            <Col span={16}>
                                                <b>{d.description}</b>
                                            </Col>
                                            <Col span={5}>
                                                {d.status === 'pending' ? (
                                                    <Tag color="#C0C0C0" style={styles.tag}>Pendente</Tag>
                                                ) : (
                                                        <Tag color="#87d068">Entregue</Tag>
                                                    )}
                                            </Col>
                                        </List.Item>
                                    </div>
                                ))}
                            </div>
                        ) : (
                                <b>Nenhuma entrega encontrada</b>
                            )}
                    </Card>
                </Col>
            </Row>
        </Layout >
    )

export default DeliveryComponent