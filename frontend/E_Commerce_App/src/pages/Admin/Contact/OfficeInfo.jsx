import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { AlertService } from "../../../services/AlertService";
import { useEffect, useState } from "react";
import { Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import UpdateCategoryModal from "../../../modals/UpdateCategoryModal";

const apiUrl = import.meta.env.VITE_API_BASE_URL;

export default function OfficeInfoPage() {
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
    fetchContact();
  }, []);
  const deleteOfficeInfo=()=>{}



  const fetchContact = async () => {
    try {
      const response = await fetch(`${apiUrl}/officeInfo`);
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
      field: "officeName",
      headerName: "Şube Adı",
      flex: 1,
      editable: true,
    },
    {
        field: "officePhone",
        headerName: "Şube Telefonu",
        flex: 1,
        editable: true,
      },
      {
        field: "officeMail",
        headerName: "Şube E-mail",
        flex: 1,
        editable: true,
      },
      {
        field: "officeOpenWeekday",
        headerName: "Şube Hafta içi Çalışma Saatleri",
        flex: 1,
        editable: true,
      },
      {
        field: "officeOpenWeekend",
        headerName: "Şube Hafta Sonu Çalışma Saatleri",
        flex: 1,
        editable: true,
      },
      {
        field: "officeAddress",
        headerName: "Şube Adresi",
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
                  deleteOfficeInfo(params.row._id);
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
    officeName:item.officeName,
    officePhone:item.officePhone,
    officeMail:item.officeMail,
    officeOpenWeekday:item.officeOpenWeekday,
    officeOpenWeekend:item.officeOpenWeekend,
    officeAddress:item.officeAddress

    
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
      <UpdateCategoryModal
        data={selected}
        handleClose={handleClose}
        isOpen={open}
      />
      
    </>
  );
}
