import React from 'react'
import { Modal, Form, Input, Row, Col, Select } from 'antd'
const { Option } = Select;

class DeliveryEditComponent extends React.Component {

    state = {
        visible: false
    }

    onOpen = () => {
        this.setState({
            visible: true,
            ...this.props.delivery,
        })
    }

    onClose = () => {
        this.setState({ visible: false })
    }

    onChange = (e, m) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onChangeStatus = (value, e) => {
        this.setState({
            status: value
        })
    }

    onSave = () => {
        const { _id, address, status, description } = this.state
        this.props.onEdit({
            _id,
            address,
            status,
            description,
        }).then(() => {
            this.onClose()
        })
    }

    render() {
        const { children } = this.props
        const { visible, address, status, description } = this.state
        return (
            <React.Fragment>
                {children({ open: this.onOpen })}
                <Modal
                    title="Editar Entrega"
                    visible={visible}
                    okText='Salvar'
                    cancelText='Cancelar'
                    onOk={this.onSave}
                    onCancel={this.onClose}
                >
                    <Form>
                        <Row>
                            <Col span={24}>
                                <Form.Item label="Local:" vertical>
                                    <Input placeholder="Digite o local da entrega a ser realizada" name='address' value={address} onChange={this.onChange} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Form.Item label="Estado:">
                                    <Select value={status} placeholder="Selecione estado" onSelect={(value, event) => this.onChangeStatus(value, event)}>
                                        <Option key='delivered' value='delivered'>Entregue</Option>
                                        <Option key='pending' value='pending'>Pendente</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Form.Item label="Descrição:" vertical>
                                    <Input type="textarea" placeholder="Escreva observações sobre a entrega a ser feita" name='description' value={description} onChange={this.onChange} />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Modal>
            </React.Fragment>
        );
    }
}

export default DeliveryEditComponent;