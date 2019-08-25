import React from 'react'
import { Query, Mutation } from 'react-apollo'
import { adopt } from 'react-adopt'
import { Icon } from 'antd'


const LoadingPage = () => (
    <div style={{
        textAlign: 'center',
        color: '#0088cc',
        paddingTop: 28,
        paddingBottom: 28
    }}>
        <Icon type="loading" />
    </div>
)

export const withQueryWrapper = (params) => {
    return (Component) => {
        return (props) => (
            <Query {...params}>
                {({ data, loading }) => (
                    loading ? <LoadingPage /> :
                        <Component
                            {...props}
                            {...data}
                        />
                )}
            </Query>
        )
    }
}

export const withMutations = (mutations) => {

    const mutationsNames = Object.keys(mutations)

    const mapper = mutationsNames
        .reduce((acc, name) => {
            acc[name] = ({ render }) => (
                <Mutation {...mutations[name]}>{render}</Mutation>
            )
            return acc
        }, {})

    const Mutations = adopt(mapper)
    return (Component) => {
        return (props) => {
            return (
                <Mutations>
                    {(mutations) => (
                        <Component {...props} {...mutations} />
                    )}
                </Mutations>
            )
        }
    }
}