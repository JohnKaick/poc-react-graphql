import React from 'react'
import { Modal, Form, Input } from 'antd'

class DeliveryEditComponent extends React.Component {

    state = {
        visible: false
    }

    onOpen = () => {
        this.setState({
            visible: true,
            ...this.props.deliveries
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

    onSave = () => {
        const { _id, description, price } = this.state
        this.props.onEdit({
            _id,
            description,
            price
        }).then(() => {
            this.onClose()
        })
    }

    render() {
        const { children } = this.props
        const { visible, description, price } = this.state
        return (
            <React.Fragment>
                {children({ open: this.onOpen })}
                <Modal
                    title="Editar Produto"
                    visible={visible}
                    okText='Salvar'
                    cancelText='Cancelar'
                    onOk={this.onSave}
                    onCancel={this.onClose}
                >
                    <Form>
                        <Form.Item label="Descrição:">
                            <Input name='description' value={description} onChange={this.onChange} />
                        </Form.Item>
                        <Form.Item label="Preço:">
                            <Input name='price' value={price} onChange={this.onChange} />
                        </Form.Item>
                    </Form>
                </Modal>
            </React.Fragment>
        );
    }
}

export default DeliveryEditComponent;