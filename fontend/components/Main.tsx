import { Row, Col, Select } from 'antd';
import Cards from './Cards';

const { Option } = Select;

const Main = () => {
  function onChange(value: string) {
    console.log(`selected ${value}`);
  }

  function onSearch(val: string) {
    console.log('search:', val);
  }

  return (
    <>
      <Row gutter={16}>
        <Col className="gutter-row" span={4}></Col>
        <Col className="gutter-row" span={12}>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </Col>
      </Row>
      <Cards />
    </>
  );
};

export default Main;
