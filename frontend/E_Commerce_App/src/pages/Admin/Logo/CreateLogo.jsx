import { Button, Form, Input, Spin, message } from "antd";
import { useState } from "react";

export default function CreateLogoPage  ()  {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/logo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        message.success("logo başarıyla oluşturuldu.");
        form.resetFields();
      } else {
        message.error("logo oluşturulurken bir hata oluştu.");
      }
    } catch (error) {
      console.log("logo güncelleme hatası:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Spin spinning={loading}>
      <Form name="basic" layout="vertical" onFinish={onFinish} form={form}>
        

        <Form.Item
          label="Logo Görseli (Link)"
          name="img"
          rules={[
            {
              required: true,
              message: "Lütfen logo görsel linkini girin!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Oluştur
        </Button>
      </Form>
    </Spin>
  );
}

