import React from 'react'
import { Link } from 'react-router-dom'
import { PageHeader, Menu, Icon, Layout } from 'antd';
const { Sider } = Layout;

class NavBar extends React.Component {

    state = {
        collapsed: true,
    }

    onCollapse = collapsed => {
        this.setState({ collapsed })
    }

    render() {
        return (
            <div>
                <PageHeader title="INTERAKT | Challenge" style={styles.header} />
                <Layout width={200} style={styles.layout}>
                    <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                        <Menu
                            defaultSelectedKeys={['1']}
                            mode="inline"
                            theme="dark"
                            style={styles.menu}
                        >
                            <Menu.Item key="1">
                                <Icon theme='filled' type="home" />
                                <span>Painel de entregas</span>
                                <Link to='/' />
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon theme='filled' type="file" />
                                <span>Entregas</span>
                                <Link to='/entrega' />
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon theme='filled' type="golden" />
                                <span>Produtos</span>
                                <Link to='/produto' />
                            </Menu.Item>
                        </Menu>
                    </Sider>
                </Layout>
            </div>
        )
    }
}

const styles = {
    layout: {
        background: '#fff',
        float: 'left',
        minHeight: '100vh'
    },
    header: {
        borderBottom: '1px solid rgb(0, 0, 0, 0.30)',
    },
    menu: {
        height: '100%',
        borderRight: 0
    }
}

export default NavBar
