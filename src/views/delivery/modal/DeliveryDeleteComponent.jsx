import React from 'react'
import { Modal, Typography } from 'antd'
const { Paragraph } = Typography;

class DeliveryDeleteComponent extends React.Component {

    state = {
        visible: false
    }

    onOpen = () => {
        this.setState({
            visible: true,
            ...this.props.delivery
        })
    }

    onClose = () => {
        this.setState({ visible: false })
    }

    onConfirm = () => {
        const { _id } = this.state
        this.props.onDelete(_id).then(() => {
            this.onClose()
        })
    }

    render() {
        const { children } = this.props
        const { visible, address } = this.state
        return (
            <React.Fragment>
                {children({ open: this.onOpen })}
                <Modal
                    title="Excluir Entrega"
                    visible={visible}
                    okType='danger'
                    okText='Sim'
                    cancelText='Não'
                    onOk={this.onConfirm}
                    onCancel={this.onClose}
                >
                    <Typography>
                        <Paragraph>
                            Tem certeza que deseja excluir a entrega no endereço {address}?
                        </Paragraph>
                    </Typography>
                </Modal>
            </React.Fragment>
        );
    }
}

export default DeliveryDeleteComponent;