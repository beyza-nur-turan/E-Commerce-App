import { Box, Modal } from "@mui/material";
import { Form, Formik } from "formik";
import { Button } from "antd";
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

export default function UpdateCouponModal({ isOpen, handleClose, data }) {
  const [dataSource, setDataSource] = useState([]);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`${apiUrl}/coupons`);
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

  const updateProduct = async (couponId, updatedCouponData) => {
    try {

      const response = await fetch(`${apiUrl}/coupons/${couponId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedCouponData),
      });

      if (response.ok) {
        console.log("Kupon başarıyla güncellendi.");
        AlertService.showOk()
        fetchProduct();
      } else {
        const errorData = await response.json();
        console.error("Sunucu hatası:", errorData);
        AlertService.showError()
      }
    } catch (error) {
      console.error("Fetch hatası:", error);
      AlertService.showError()
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
                code: data?.code,
                discountPercent: data?.discountPercent,
                
            }}
            onSubmit={(values) => {
              updateProduct(data?.id, values);
              handleClose();
            }}
          >
            {({ values, handleChange }) => (
              <Form className="formStyle">
                <div>
                  <label htmlFor="name">Kupon kodu giriniz:  </label>
                  <input
                    type="text"
                    id="code"
                    name="code"
                    value={values.code}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="img">İndirim Oranı giriniz:  </label>
                  <input
                    type="text"
                    id="discountPercent"
                    name="discountPercent"
                    value={values.discountPercent}
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
