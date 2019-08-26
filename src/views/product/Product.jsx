import gql from 'graphql-tag'
import { withQueryWrapper, withMutations } from '../../containers/helpers'
import ProductContainer from './ProductContainer'
import { compose } from 'recompose'

const Q_PRODUCT = gql`
  {
    products {
        all {
            _id
            description
            price
        }
        total
    }
  }
`

const M_INSERT = gql`
  mutation createProduct($input: CreateProductInput!) {
    createProduct(input: $input) {
        _id
    }
  }
`

const M_EDIT = gql`
  mutation updateProduct($input: UpdateProductInput!) {
    updateProduct(input: $input) {
        _id
    }
  }
`

const M_DELETE = gql`
  mutation removeProduct($input: RemoveProductInput!) {
    removeProduct(input: $input) {
        _id
    }
  }
`

export default compose(

    withQueryWrapper({
        query: Q_PRODUCT
    }),

    withMutations({

        insert: {
            mutation: M_INSERT,
            refetchQueries: (mutationResult) => [
                { query: Q_PRODUCT, args: {} }
            ]
        },

        edit: {
            mutation: M_EDIT,
            refetchQueries: (mutationResult) => [
                { query: Q_PRODUCT, args: {} }
            ]
        },

        delete: {
            mutation: M_DELETE,
            refetchQueries: (mutationResult) => [
                { query: Q_PRODUCT, args: {} }
            ]
        },

    })

)(ProductContainer)