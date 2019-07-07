import React from 'react';

import { Menu, Input } from 'antd';

const AppLayout = () => {
    return (
        <div>
            <Menu>
                <Menu.Item>노드버드</Menu.Item>
                <Menu.Item>노드버드</Menu.Item>
                <Menu.Item>노드버드</Menu.Item>

                <Menu.Item>
                    <Input.Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default AppLayout;