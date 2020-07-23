import React from 'react';
import { Row, Col, Layout } from 'antd';
import Topbar from './topbar';
import CreateButton from './create-button';

const { Content } = Layout;

const LayoutWrap = ({children}) => {
  return (
    <div>
      <Layout className='bg-white'>
        <Topbar />
        <CreateButton />
        <Content className='pt-70'>
          <Row>
            <Col span={24}>
              {children}
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  )
}

export default LayoutWrap;