import React, { useEffect, useState, useRef } from "react";
import classes from "./dsaSignUpOne.module.css";
// import { Button, Modal, message, Col, Row, Input, Form, Select } from "antd";
const labelColSpan = { span: 24 };
// const { Option } = Select;

const DSASignUp = (props) => {
  const { dsaSignUpOneWrapper } = classes;
  const { dsaSignUpModalVisible, setDsaSignUpVisible } = props;
  const [loading, setLoading] = useState(false);
  // const [addForm] = Form.useForm();
  const formRef = useRef(null);
  const interestedInProducts = useState([
    "INSTANT LOAN",
    "PERSONAL LOAN",
    "SME LOAN",
    "HOME LOAN",
    "LOAN AGAINST PROPERTY",
    "LOAN AGAINST INVESTMENT",
    "EDUCATIONAL LOAN",
    "GOLD LOAN",
    "CREDIT CARDS",
  ]);

  const hideModal = () => setDsaSignUpVisible(false);
  const handleSubmit = (values) => {};
  // const interestedInProductsEl = interestedInProducts.map((data) => {
  //   return (
  //     <Option key={data} value={data}>
  //       {data}
  //     </Option>
  //   );
  // });

  return (
    <div className={dsaSignUpOneWrapper}>
      {/* <Modal
        title="Partner Now"
        centered
        visible={dsaSignUpModalVisible}
        onCancel={hideModal}
        footer={[
          <Button key="back" onClick={hideModal}>
            Cancel
          </Button>,
          <Button
            form="dsaSignUpForm"
            key="submit"
            type="primary"
            htmlType="submit"
            loading={loading}
          >
            Submit
          </Button>,
        ]}
      >
        <Form
          id="changePasswordForm"
          form={addForm}
          labelCol={labelColSpan}
          layout="vertical"
          hideRequiredMark
          ref={formRef}
          onFinish={handleSubmit}
        >
          <Row gutter={24} justify="center">
            <Col xs={24} sm={12}>
              <Form.Item
                name="Name"
                label="Name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input type="text" placeholder="Enter your name" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                label="Mobile No"
                name="mobileNo"
                rules={[
                  {
                    required: true,
                    message: "Please enter a valid mobile number",
                  },
                ]}
              >
                <Input type="text" placeholder="Enter your mobile number" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                label="Email"
                name="Email"
                rules={[
                  {
                    required: true,
                    message: "Please enter email",
                    type: "email",
                  },
                ]}
              >
                <Input placeholder="Enter email" type="email" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                label="City"
                name="city"
                rules={[{ required: true, message: "Please enter city" }]}
              >
                <Input placeholder="Enter city" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                name="interestedProducts"
                label="Interested In Products"
                rules={[
                  {
                    message: "Select products you are interested in",
                    required: true,
                  },
                ]}
              >
                <Select placeholder="Select products">
                  {interestedInProductsEl}
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>*/}
    </div>
  );
};

export default DSASignUp;
