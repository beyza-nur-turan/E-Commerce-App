import { Button, Form, Input, Spin, message } from "antd";
import { useState } from "react";

export default function CreateSlidePage  ()  {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/slides`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        message.success("Slide başarıyla oluşturuldu.");
        form.resetFields();
      } else {
        message.error("Slide oluşturulurken bir hata oluştu.");
      }
    } catch (error) {
      console.log("Slide güncelleme hatası:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Spin spinning={loading}>
      <Form name="basic" layout="vertical" onFinish={onFinish} form={form}>
        <Form.Item
          label="Başlık"
          name="title"
          rules={[
            {
              message: "Lütfen slider başlığını girin!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Buton adı"
          name="btnName"
          rules={[
            {
              message: "Lütfen slide'a eklenecek butonun adını girin!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Alt başlık"
          name="heading"
          rules={[
            {
              message: "Lütfen slide'ın alt başlık adını girin!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Kategori Görseli (Link)"
          name="img"
          rules={[
            {
              required: true,
              message: "Lütfen kategori görsel linkini girin!",
            },
          ]}
        >
          <Input
          />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Oluştur
        </Button>
      </Form>
    </Spin>
  );
}

