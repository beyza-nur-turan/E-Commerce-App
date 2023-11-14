import MainLayout from "../layouts/AdminLayout";
import AdminLayout from "../layouts/MainLayout";
import { isAdmin } from "../config/isAdmin";
export const Layout = isAdmin ? MainLayout : AdminLayout; //admin layoutu çalıştır değilse main layout çalıştır.
