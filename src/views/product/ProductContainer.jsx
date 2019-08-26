import React from 'react'
import ProductComponent from './ProductComponent'

class ProductContainer extends React.Component {

    state = {
        ...this.props.products,
        description: '',
        price: '',
        msgError: null,
    }

    onChange = (e, m) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onInsert = async (e) => {
        const { description, price } = this.state
        this.setState({ msgError: null })
        if (description === '') {
            this.setState({ msgError: 'Por favor, preencher a descrição' })
        } else if (price === '') {
            this.setState({ msgError: 'Por favor, preencher o preço' })
        } else {
            await this.props.insert({
                variables: {
                    input: {
                        description,
                        price
                    }
                }
            }).then(() => {
                this.setState({
                    description: '',
                    price: '',
                    msgError: null
                })
            })
        }
    }

    onEdit = async (product) => {
        await this.props.edit({
            variables: {
                input: {
                    _id: product._id,
                    description: product.description,
                    price: product.price
                }
            }
        })
    }

    onDelete = async (id) => {
        await this.props.delete({
            variables: {
                input: {
                    _id: id,
                }
            }
        })
    }

    render() {
        console.log({ ...this.props.products })
        return (
            <ProductComponent
                {...this.props}
                {...this.state}
                {...this.props.products}
                onChange={this.onChange}
                onInsert={this.onInsert}
                onEdit={this.onEdit}
                onDelete={this.onDelete}
            />
        )
    }
}

export default ProductContainer
