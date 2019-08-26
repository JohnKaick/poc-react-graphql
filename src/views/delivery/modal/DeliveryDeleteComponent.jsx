import React from 'react'
import { Modal, Typography } from 'antd'
const { Paragraph } = Typography;

class ProductDeleteComponent extends React.Component {

    state = {
        visible: false
    }

    onOpen = () => {
        this.setState({
            visible: true,
            ...this.props.product
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
        const { visible, description } = this.state
        return (
            <React.Fragment>
                {children({ open: this.onOpen })}
                <Modal
                    title="Excluir Produto"
                    visible={visible}
                    okType='danger'
                    okText='Sim'
                    cancelText='Não'
                    onOk={this.onConfirm}
                    onCancel={this.onClose}
                >
                    <Typography>
                        <Paragraph>
                            Tem certeza que deseja excluir o produto {description}?
                        </Paragraph>
                    </Typography>
                </Modal>
            </React.Fragment>
        );
    }
}

export default ProductDeleteComponent;