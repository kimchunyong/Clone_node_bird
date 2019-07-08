import React from 'react';

import { Menu, Input } from 'antd';

const AppLayout = ({ children }) => {
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home">노드버드</Menu.Item>
                <Menu.Item key="profile">프로필</Menu.Item>

                <Menu.Item key="mail">
                    <Input.Search placeholder="input search text" style={{ verticalAlign: "middle" }} enterButton />
                </Menu.Item>
            </Menu>
            {children}
        </div>
    )
}

export default AppLayout;