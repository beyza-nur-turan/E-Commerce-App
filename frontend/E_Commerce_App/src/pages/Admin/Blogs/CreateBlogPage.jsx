// import { Button, Form, Input, Spin, message } from "antd";
// import { useEffect, useState } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import { AlertService } from "../../../services/AlertService";

// export default function CreateBlogPage ()  {
//   const [loading, setLoading] = useState(false);
//   const [blogs, setBlogs] = useState([]);
//   const [form] = Form.useForm();
//   const apiUrl = import.meta.env.VITE_API_BASE_URL;

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       setLoading(true);

//       try {
//         const response = await fetch(`${apiUrl}/blogs`);

//         if (response.ok) {
//           const data = await response.json();
//           setBlogs(data);
//         } else {
//           message.error("Veri getirme başarısız.");
//         }
//       } catch (error) {
//         console.log("Veri hatası:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, [apiUrl]);

//   const onFinish = async (values) => {
//     setLoading(true);
//     try {
//       const response = await fetch(`${apiUrl}/blogs`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(values),
//       });

//       if (response.ok) {
//         AlertService.showOk()
//         form.resetFields();
//       } else {
//        AlertService.showError()
//       }
//     } catch (error) {
//       console.log("blog oluşturma hatası:", error);
//     } finally {
//       setLoading(false);
//     }
//   };
  

//   return (
//     <Spin spinning={loading}>
//       <Form name="basic" layout="vertical" onFinish={onFinish} form={form}>
        
//         <Form.Item
//           label="Blog Açıklaması"
//           name="description"
//           rules={[
//             {
//               required: true,
//               message: "Lütfen bloğunuza bir açıklama yazın!",
//             },
//           ]}
//         >
//           <ReactQuill
//             theme="snow"
//             style={{
//               backgroundColor: "white",
//             }}
//           />
//         </Form.Item>
//         <Form.Item
//           label="Blog Görseli (Link)"
//           name="img"
//           rules={[
//             {
//               required: true,
             
//             },
//           ]}
//         >
//           <Input/>
//         </Form.Item>

//         <Button type="primary" htmlType="submit">
//           Oluştur
//         </Button>
//       </Form>
//     </Spin>
//   );
// }

import { Button, Form, Input, Spin, message } from "antd";
import { useState } from "react";
import ReactQuill from "react-quill";

export default function CreateBlogPage  ()  {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/blogs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
  
      if (response.ok) {
        message.success("Blog başarıyla oluşturuldu.");
        form.resetFields();
      } else {
        message.error("Blog oluşturulurken bir hata oluştu.");
      }
    } catch (error) {
      console.log("Blog oluşturma hatası:", error);
    } finally {
      setLoading(false); // İşlem tamamlandığında loading durumunu false yap
    }
  };
  

  return (
    <Spin spinning={loading}>
      <Form name="basic" layout="vertical" onFinish={onFinish} form={form}>
        <Form.Item
          label="Blog Görseli (Link)"
          name="img"
          rules={[
            {
              required: true,
              message: "Lütfen blog görsel linkini girin!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Blog Açıklaması"
          name="description"
          rules={[
            {
              required: true,
              message: "Lütfen blog yazınıza bir açıklama ekleyin!",
            },
          ]}
        >
          <ReactQuill
            theme="snow"
            style={{
              backgroundColor: "white",
            }}
          />
        </Form.Item>
        <Form.Item
          label="Card bloğuna eklenecek başlık"
          name="title"
          rules={[
            {
              required: true,
              message: "Lütfen blog cardınıza ait  bir başlık girin girin!",
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



