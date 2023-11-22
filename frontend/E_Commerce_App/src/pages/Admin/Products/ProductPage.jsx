import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { AlertService } from "../../../services/AlertService";
import { useEffect, useState } from "react";
import { Button, message } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import UpdateCategoryModal from "../../../modals/UpdateCategoryModal";
import UpdateProductModal from "../../../modals/UpdateProductModal";

const apiUrl = import.meta.env.VITE_API_BASE_URL;

export default function ProductPage() {
  const [dataSource, setDataSource] = useState([]);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState();
  const handleOpen = (data) => {
    //modal ı açmak için kullanılır
    //şuan data değerimde düzenlemek için seçmiş olduğum data mevcut
    setSelected(data);
    setOpen(true);
    console.log("datagriddeneme:", data);
  };
  const handleClose = () => setOpen(false); //modal ı kapatmak için
  console.log("datasource", dataSource);
  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteProducts = async (productId) => {
    try {
      const response = await fetch(`${apiUrl}/products/${productId}`, {
        method: "DELETE",
      });
      console.log("dönen response",response)

      if (response.ok) {
        console.log("Ürün başarıyla silindi.");
        fetchProducts();
      } else {
        console.log("Ürün silme işlemi başarısız.");
      }
    } catch (error) {
      console.log("Silme hatası:", error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${apiUrl}/products`);
      console.log("response:", response);

      if (response.ok) {
        const data1 = await response.json();
        setDataSource(data1);
      } else {
        AlertService.showError();
      }
    } catch (error) {
      console.log("Giriş hatası:", error);
    }
  };
  const columns = [
    //{ field: "id", headerName: "ID", flex: 1 },
    {
      field: "name",
      headerName: "Ürün adı",
      flex: 1,
      editable: true,
    },

    {
      field: "img",
      headerName: "Görseli",
      editable: true,
      flex: 1,
      renderCell: (params) => (
        <img
          src={params.row.img}
          alt="Avatar"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
          }}
        />
      ),
    },
    {
        field: "sizes",
        headerName: "Bedenler",
        flex: 1,
        editable: true,
      },
      {
        field: "price",
        headerName: "Ücret (TL)",
        flex: 1,
        editable: true,
      },
    {
      field: "actions",
      headerName: "Aksiyonlar",
      editable: true,
      flex: 1,
      renderCell: (params) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Button
            onClick={() => {
              Swal.fire({
                title: "Emin misiniz?",
                text: "Kategoriyi silmek istediğinize emin misiniz!",
                icon: "Uyarı",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Evet",
              }).then((result) => {
                if (result.isConfirmed) {
                    deleteProducts(params.row.id);
                  Swal.fire({
                    title: "Silindi!",
                    text: "İşem başarılı!",
                    icon: "success",
                  });
                }
              });
            }}
            icon={<DeleteOutlined />}
            type="primary"
            danger
          />
          <Button
            style={{
              backgroundColor: "#014f86",
              color: "white",
              marginLeft: "2vh",
            }}
            icon={<EditOutlined />}
            color="info"
            onClick={() => handleOpen(params?.row)}
          ></Button>
        </div>
      ),
    },
  ];

  const rows = dataSource.map((item) => ({
    id: item._id,
    name: item.name,
    img: item.img,
    sizes:item.sizes,
    price:item.price.current
  }));

  return (
    <>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
      <UpdateProductModal
        data={selected}
        handleClose={handleClose}
        isOpen={open}
      />
      
    </>
  );
}
