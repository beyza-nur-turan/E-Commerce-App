import { Button, Form, Input, Spin, message } from "antd";
import { useState } from "react";
import { AlertService } from "../../../services/AlertService";

export default function CreateCouponPage  ()  {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/coupons`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        AlertService.showOk()
        form.resetFields();
      } else {
        AlertService.showError()
      }
    } catch (error) {
      console.log("Kategori güncelleme hatası:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Spin spinning={loading}>
      <Form name="basic" layout="vertical" onFinish={onFinish} form={form}>
        <Form.Item
          label="Kupon Kodu"
          name="code"
          rules={[
            {
              required: true,
              message: "Lütfen kupon kodunu girin!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Kupon indirim oranı"
          name="discountPercent"
          rules={[
            {
              required: true,
              message: "Lütfen indirim oranını girin!",
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
};

