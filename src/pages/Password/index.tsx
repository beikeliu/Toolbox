import { PageContainer } from '@ant-design/pro-components';
import { Button, Checkbox, Form, InputNumber, Typography } from 'antd';
import { useEffect, useState } from 'react';
const { Title } = Typography;

const options = [
  {
    label: '大写字母',
    value: 'hasUpperCase',
  },
  {
    label: '小写字母',
    value: 'hasLowerCase',
  },
  {
    label: '数字',
    value: 'hasNumber',
  },
  {
    label: '符号',
    value: 'hasSymbol',
  },
];

function generatePassword(
  length: number = 6,
  hasUpperCase: boolean = false,
  hasLowerCase: boolean = false,
  hasNumber: boolean = true,
  hasSymbol: boolean = false,
): string {
  let charset = '';
  let password = '';
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '012345678901234567890123456789';
  const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
  if (hasUpperCase) charset += upperCase;
  if (hasLowerCase) charset += lowerCase;
  if (hasNumber) charset += numbers;
  if (hasSymbol) charset += symbols;
  if (charset === '') return '请至少选择一种字符类型';
  for (let i = 0; i < length; i++) {
    password += charset[Math.floor(Math.random() * charset.length)];
  }
  return password;
}

type FieldType = {
  length?: number;
  types?: string[];
};

const Password: React.FC = () => {
  const [form] = Form.useForm();
  const [password, setPassword] = useState('');
  const submit = async () => {
    await form.validateFields();
    const { length, types } = form.getFieldsValue();
    const password = generatePassword(
      length,
      types.includes('hasUpperCase'),
      types.includes('hasLowerCase'),
      types.includes('hasNumber'),
      types.includes('hasSymbol'),
    );
    setPassword(password);
  };
  useEffect(() => {
    setTimeout(() => {
      submit();
    });
  }, []);
  return (
    <PageContainer>
      <Form
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 24 }}
        style={{ maxWidth: 600 }}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="密码长度"
          name="length"
          required
          initialValue={8}
          rules={[
            {
              required: true,
              message: '请输入一个介于4和24之间的密码长度（整数）！',
            },
          ]}
        >
          <InputNumber min={4} max={24} precision={0} />
        </Form.Item>
        <Form.Item<FieldType>
          label="允许类型"
          name="types"
          required
          initialValue={['hasLowerCase', 'hasNumber']}
          rules={[{ required: true, message: '请选择允许类型！' }]}
        >
          <Checkbox.Group options={options} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 1 }}>
          <Button type="primary" htmlType="submit" onClick={submit}>
            开始生成
          </Button>
        </Form.Item>
      </Form>
      <Title copyable={!!password}>{password}</Title>
    </PageContainer>
  );
};

export default Password;
