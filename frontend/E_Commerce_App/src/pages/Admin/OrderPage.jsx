// import { DataGrid } from "@mui/x-data-grid";
// import Box from "@mui/material/Box";
// import { AlertService } from "../../services/AlertService";
// import { useEffect, useState } from "react";
// import { Button } from "antd";
// import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
// import Swal from "sweetalert2";
// import UpdateCategoryModal from "../../modals/UpdateCategoryModal";

// const apiUrl = import.meta.env.VITE_API_BASE_URL;
// const MY_STRIPE_SECRET_KEY = import.meta.env.VITE_API_STRIPE_SECRET_KEY

// export default function OrderPage() {
//   const [dataSource, setDataSource] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [selected, setSelected] = useState();
//   const handleOpen = (data) => {
//     //modal ı açmak için kullanılır
//     //şuan data değerimde düzenlemek için seçmiş olduğum data mevcut
//     setSelected(data);
//     setOpen(true);
//     console.log("datagriddeneme:", data);
//   };
//   const handleClose = () => setOpen(false); //modal ı kapatmak için
//   console.log("datasource", dataSource);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`https://api.stripe.com/v1/payment_intents`,{
//           method: "GET",
//           headers:{
//             Authorization: `Bearer ${MY_STRIPE_SECRET_KEY}`
//           }
//         });
//         console.log("response:", response);
  
//         if (response.ok) {
//           const data1 = await response.json();
//           setDataSource(data1);
//         } else {
//           AlertService.showError();
//         }
//       } catch (error) {
//         console.log("Giriş hatası:", error);
//       }
//     };
//     fetchData();
//   }, [apiUrl]);

  

  
//   const columns = [
//     //{ field: "id", headerName: "ID", flex: 1 },
//     {
//       field: "CName",
//       headerName: "Müşterinin Email",
//       flex: 1,
//       editable: true,
//     },
//     {
//       field: "CPrice",
//       headerName: "Sipariş Fiyatı",
//       flex: 1,
//       editable: true,
//     },

    
    
//   ];

//   const rows = dataSource.map((item) => ({
   
//     id: item._id,
//     CName: item.email,
//     CPrice: item.img,
//   }));
  

//   return (
//     <>
//       <Box sx={{ height: 400, width: "100%" }}>
//         <DataGrid
//           rows={rows}
//           columns={columns}
//           initialState={{
//             pagination: {
//               paginationModel: {
//                 pageSize: 5,
//               },
//             },
//           }}
//           pageSizeOptions={[5]}
//           checkboxSelection
//           disableRowSelectionOnClick
//         />
//       </Box>
//       <UpdateCategoryModal
//         data={selected}
//         handleClose={handleClose}
//         isOpen={open}
//       />
      
//     </>
//   );
// }




import { Spin, Table, message } from "antd";
import { useEffect, useState } from "react";

const OrderPage = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const MY_STRIPE_SECRET_KEY = import.meta.env.VITE_API_STRIPE_SECRET_KEY;

  const columns = [
    {
      title: "Müşteri Email",
      dataIndex: "receipt_email",
    },
    {
      title: "Sipariş Fiyatı",
      dataIndex: "amount",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `https://api.stripe.com/v1/payment_intents`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${MY_STRIPE_SECRET_KEY}`,
            },
          }
        );

        if (response.ok) {
          const { data } = await response.json();
          setDataSource(data);
        } else {
          message.error("Veri getirme başarısız.");
        }
      } catch (error) {
        console.log("Veri hatası:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [MY_STRIPE_SECRET_KEY]);

  console.log(dataSource);

  return (
    <Spin spinning={loading}>
      <Table
        dataSource={dataSource}
        columns={columns}
        rowKey={(record) => record.id}
        loading={loading}
      />
    </Spin>
  );
};

export default OrderPage;