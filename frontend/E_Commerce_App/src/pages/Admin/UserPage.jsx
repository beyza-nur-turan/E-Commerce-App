import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { AlertService } from "../../services/AlertService";
import { useEffect, useState } from "react";
import { Button, message } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import Swal from "sweetalert2";



const apiUrl = import.meta.env.VITE_API_BASE_URL;

export default function UserPage() {
  const [dataSource, setDataSource] = useState([]);
  console.log("datasource", dataSource);
  useEffect(() => {
    fetchUsers();
  }, []);


  const deleteUser = async (userEmail) => {
    try {
      const response = await fetch(`${apiUrl}/users/${userEmail}`, {
        method: "DELETE",
      });

      if (response.ok) {
        message.success("Kullanıcı başarıyla silindi.");
        fetchUsers();
      } else {
        message.error("Silme işlemi başarısız.");
      }
    } catch (error) {
      console.log("Silme hatası:", error);
    }
  };


  const fetchUsers = async () => {
    try {
      const response = await fetch(`${apiUrl}/users`);
      console.log("response:", response);

      if (response.ok) {
        const data = await response.json();
        setDataSource(data);
      } else {
        AlertService.showError();
      }
    } catch (error) {
      console.log("Giriş hatası:", error);
    }
  };
  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    {
      field: "username",
      headerName: "Kullanıcı Adı",
      flex: 1,
      editable: true,
    },
    {
      field: "email",
      headerName: "E-Mail",
      flex: 1,
      editable: true,
    },
  
    {
      field: "role",
      flex: 1,
      headerName: "Rol",
      sortable: false,
    },
    {
      field: "avatar",
      headerName: "Avatar",
      editable: true,
      flex: 1,
      renderCell: (params) => (
        <img
          src={params.row.avatar}
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
      field: "actions",
      headerName: "Aksiyonlar",
      editable: true,
      flex: 1,
      renderCell: (params) => (
        <Button onClick={() => {
          Swal.fire({
            title: "Emin misiniz?",
            text: "Kullanıcıyı silmek istediğinize eminmisiniz!",
            icon: "Uyarı",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Evet"
          }).then((result) => {
            if (result.isConfirmed) {
              deleteUser(params.row.email)
              Swal.fire({
                title: "Silindi!",
                text: "İşem başarılı!",
                icon: "success"
              });
            }
          });
          }
        } icon={<DeleteOutlined />} type="primary" danger/>
      ),
    },
  ];

  const rows = dataSource.map((item, index) => ({
    id: index + 1,
    username: item.username,
    email: item.email,
    role: item.role,
    avatar: item.avatar,
  }));


  return (
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
  );
}
