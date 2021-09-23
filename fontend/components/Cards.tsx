import styled from 'styled-components';
import { Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;

const Cards = () => {
  return (
    <Wrapper>
      <StyledCard
        style={{ width: 300 }}
        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
        actions={[<SettingOutlined key="setting" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />]}
      >
        <Meta
          title="Pinterest"
          description="Pinterest is a social bookmarking site where users collect and share photos of their favorite events ..."
        />
      </StyledCard>
      <StyledCard
        style={{ width: 300 }}
        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
        actions={[<SettingOutlined key="setting" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />]}
      >
        <Meta title="StyledCard title" description="This is the description" />
      </StyledCard>
    </Wrapper>
  );
};

export default Cards;

const Wrapper = styled.div`
  display: flex;
  padding: 0 20px;
  margin-top: 30px;
`;

const StyledCard = styled(Card)`
  margin-right: 20px;
`;
