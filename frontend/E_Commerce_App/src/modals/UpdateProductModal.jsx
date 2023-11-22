import { Box, Modal } from "@mui/material";
import { Form, Formik } from "formik";
import { Button, message } from "antd";
import "../css/updateCatModal.css";
import { AlertService } from "../services/AlertService";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 500,
  bgcolor: "background.paper",  
  boxShadow: 30,
  p: 2,
};

const apiUrl = import.meta.env.VITE_API_BASE_URL;

export default function UpdateProductModal({ isOpen, handleClose, data }) {
  const [dataSource, setDataSource] = useState([]);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`${apiUrl}/products`);
      console.log("response:", response);
      if (response.ok) {
        const data = await response.json();
        setDataSource(data);
      } else {
        AlertService.showError();
      }
    } catch (error) {
      console.log("İşlem hatası:", error);
    }
  };

  const updateProduct = async (productId, updatedProductData) => {
    try {
      console.log("ID ile kategori güncelleniyor:", productId);
      console.log("Güncellenmiş veri:", updatedProductData);

      const response = await fetch(`${apiUrl}/products/${productId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProductData),
      });

      if (response.ok) {
        console.log("Ürün başarıyla güncellendi.");
        message.success("Ürün başarıyla güncellendi.");
        fetchProduct();
      } else {
        const errorData = await response.json();
        console.error("Sunucu hatası:", errorData);
        message.error("Güncelleme işlemi başarısız.");
      }
    } catch (error) {
      console.error("Fetch hatası:", error);
      message.error("Güncelleme işlemi başarısız.");
    }
  };

  return (
    <>
      {console.log("mevcut data: ", data)}
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} overflow={"auto"} maxHeight={"550px"}>
          <h2
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "3vh",
              color:"blueviolet"
            }}
          >
            Ürünü Güncelle
          </h2>
          <Formik
            initialValues={{
                id: data?._id,
                name: data?.name,
                img: data?.img,
                sizes:data?.sizes,
                price:data?.price.current
            }}
            onSubmit={(values) => {
              updateProduct(data?.id, values);
              handleClose();
            }}
          >
            {({ values, handleChange }) => (
              <Form className="formStyle">
                <div>
                  <label htmlFor="name">Ürün adı giriniz: </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="img">Ürün resimleri(Link) </label>
                  <input
                    type="text"
                    id="img"
                    name="img"
                    value={values.img}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="name">Ürün bedenlerini giriniz: </label>
                  <input
                    type="text"
                    id="sizes"
                    name="sizes"
                    value={values.sizes}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="name">Ürünün ücretini giriniz: </label>
                  <input
                    type="text"
                    id="price"
                    name="price"
                    value={values.price}
                    onChange={handleChange}
                  />
                </div>
                <Button htmlType="submit" type="primary">Kaydet</Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </>
  );
}
