import { Box, Modal } from '@mui/material';
import { Form, Formik } from 'formik';
import { message } from 'antd';
import Swal from 'sweetalert2';
import { AlertService } from '../services/AlertService';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};

const apiUrl = import.meta.env.VITE_API_BASE_URL;

export default function UpdateCategoryModal({ isOpen, handleClose, data }) {
  const [dataSource, setDataSource] = useState([]);

  const fetchCategory = async () => {
    try {
      const response = await fetch(`${apiUrl}/categories`);
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

  const updateCategory = async (categoryId, updatedCategoryData) => {
    try {
      console.log("ID ile kategori güncelleniyor:", categoryId);
      console.log("Güncellenmiş veri:", updatedCategoryData);
  
      const response = await fetch(`${apiUrl}/categories/${categoryId}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedCategoryData),
      });
  
      if (response.ok) {
        console.log("Kategori başarıyla güncellendi.");
        message.success("Kategori başarıyla güncellendi.");
        fetchCategory();
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
        <Box sx={style} overflow={"auto"} maxHeight={"450px"}>
          <Formik
            initialValues={{
              name: data?.name,
              img: data?.img,
            }}
            onSubmit={(values) => {
              updateCategory(data?.id, values);
              handleClose();
            }}
          >
            {({ values, handleChange }) => (
              <Form className="formStyle">
                <div>
                  <label htmlFor="name">Kategori adı giriniz</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="img">Resim adresi giriniz</label>
                  <input
                    type="text"
                    id="img"
                    name="img"
                    value={values.img}
                    onChange={handleChange}
                  />
                </div>
                <div className="buttonStyle">
                  <button type="submit">Kaydet</button>
                </div>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </>
  );
}
