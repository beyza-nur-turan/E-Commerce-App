import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { AlertService } from "../../services/AlertService";
import { useEffect, useState } from "react";

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
    render:(params) => (
        <img
          src={params.value}
          alt="Avatar"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
          }}
        />
      ),
  },
];

const apiUrl = import.meta.env.VITE_API_BASE_URL;

export default function AdminUserPage() {
  const [dataSource, setDataSource] = useState([]);
  console.log("datasource", dataSource);
  useEffect(() => {
    fetchUsers();
  }, []);
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
