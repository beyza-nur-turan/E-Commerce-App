import { Row, Col, Card, Statistic } from "antd";
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
<<<<<<< Updated upstream
import "../css/dashboardPage.css"
import { useStripeContext } from "../context/StripeProvider";
=======
import { useAppContext } from "../context/StripeProvider";
>>>>>>> Stashed changes

const DashboardPage = () => {
  const [paymentData, setPaymentData] = useState(null);
  const [stripeTotalAmount, setStripeStripeTotalAmount] = useState(null);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
<<<<<<< Updated upstream
  const { state, dispatch } = useStripeContext();
  const [customerData, setCustomerData] = useState();
  const [salesData, setSalesData] = useState([]);
=======
  const{state,dispatch}=useAppContext()
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const paymentResponse = await fetch(`${apiUrl}/payment`);
  //       const paymentData = await paymentResponse.json();
  //       setPaymentData(paymentData);

  //       const stripeResponse = await fetch(`${apiUrl}/stripe`);
  //       const stripeData = await stripeResponse.json();
  //       setStripeData(stripeData);
  //     } catch (error) {
  //       console.error('Veri çekme hatası:', error.message);
  //     }
  //   };

  //   fetchData();
  // }, []);


  // useEffect(() => {
  //   const fetchPaymentData = async () => {
  //     try {
  //       const response = await fetch(`${apiUrl}/payment`); 
  //       const data = await response.json();
  //       setPaymentData(data);
  //     } catch (error) {
  //       console.error('Error fetching payment:', error);
  //     }
  //   }; 
  //   const fetchStripeData = async () => {
  //     try {
  //       const response = await fetch(`${apiUrl}/stripe/totalRevenue`); 
  //       const data = await response.json();
  //       setStripeStripeTotalAmount(data);
  //       console.log("gelem stripe data",data)
  //     } catch (error) {
  //       console.error('Error fetching payment:', error);
  //     }
  //   }; 
  //   fetchStripeData();
  //   fetchPaymentData();
  // }, []);

>>>>>>> Stashed changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const paymentResponse = await fetch(`${apiUrl}/stripe/totalRevenue`);
        const paymentData = await paymentResponse.json();
        dispatch({ type: "SET_TOTAL_REVENUE", payload: paymentData });
<<<<<<< Updated upstream
        const customersResponse = await fetch(
          `${apiUrl}/stripe/totalCustomers`
        );

        if (!customersResponse.ok) {
          console.error(
            "Customers API call failed:",
            customersResponse.statusText
          );
          return;
        }
        const customersData = await customersResponse.json();
        dispatch({ type: "SET_TOTAL_CUSTOMERS", payload: customersData });

        const productsResponse = await fetch(
          `${apiUrl}/stripe/totalProductsSold`
        );

        const productsData = await productsResponse.json();
        dispatch({ type: "SET_TOTAL_PRODUCTS", payload: productsData });

        const customersByMonthResponse = await fetch(
          `${apiUrl}/stripe/totalCustomersByMonth`
        );
        

        const customersByMonthData = await customersByMonthResponse.json();
        dispatch({
          type: "SET_TOTAL_CUSTOMERS_BY_MONTH",
          payload: customersByMonthData,
        });
        setCustomerData(customersByMonthData);

        const salesByMonthResponse = await fetch(
          `${apiUrl}/stripe/totalSalesByMonth`
        );
        const salesByMonthData = await salesByMonthResponse.json();

        // salesByMonthData'yi salesData'ya çevir
        const formattedSalesData = salesByMonthData.monthlySalesData.map(item => ({
          month: item.month,
          satilanUrunSayisi: item.satilanUrunSayisi,
        }));
        
        dispatch({
          type: "SET_TOTAL_SALES_BY_MONTH",
          payload: formattedSalesData,
        });
        setSalesData(formattedSalesData);
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      }

      
=======

        const productsResponse = await fetch(`${apiUrl}/stripe/totalProductsSold`);
        const productsData = await productsResponse.json();
        dispatch({ type: "SET_TOTAL_PRODUCTS", payload: productsData });

        const customersResponse = await fetch(`${apiUrl}/stripe/totalCustomers`);
        const customersData = await customersResponse.json();
        dispatch({ type: "SET_TOTAL_CUSTOMERS", payload: customersData });
      } catch (error) {
        console.error('Veri çekme hatası:', error);
      }
>>>>>>> Stashed changes
    };

    fetchData();
  }, [apiUrl, dispatch]);
<<<<<<< Updated upstream
=======
  console.log(paymentData)
>>>>>>> Stashed changes
  const productSalesData = [
    { name: "Ocak", satilanUrunSayisi: 10 },
    { name: "Şubat", satilanUrunSayisi: 15 },
    { name: "Mart", satilanUrunSayisi: 20 },
    { name: "Nisan", satilanUrunSayisi: 25 },
    { name: "Mayıs", satilanUrunSayisi: 30 },
    { name: "Haziran", satilanUrunSayisi: 35 },
  ];
  const getMonthName = (monthNumber) => {
    const monthNames = [
      "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
      "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
    ];
  
    return monthNames[monthNumber - 1];
  };
  const currentMonth = new Date().getMonth() + 1; // Şu anki ayın sayısal değeri
  const sortedSalesData = salesData
    .filter(item => item.month >= currentMonth) // Şu andan sonraki ayları al
    .sort((a, b) => a.month - b.month); // Ayları sayısal değerlerine göre sırala
const allMonthsData = customerData?.totalCustomersByMonth || [];

const selectedMonth = allMonthsData.slice(-1).map(item => ({
  monthName: getMonthName(item.month),
  totalCustomers: item.totalCustomers,
}));

  return (
    <div className="dashboardContainer">
      <Row gutter={16}>
        <Col span={8}>
          <Card style={{border: '3px solid #9b59b6  '}}>
            <Statistic
              title="Toplam Ürün Satışı"
              value={state.totalProducts?.totalProductsSold}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card style={{border: '3px solid #f39c12 '}}>
            <Statistic
              title="Toplam Müşteri Sayısı(Ürün satın alan)"
              value={state.totalCustomers?.totalCustomers}
            />
          </Card>
        </Col>
        <Col span={8}>
<<<<<<< Updated upstream
          <Card style={{border: '3px solid #2ecc71  '}}>
            <Statistic
              title="Toplam Gelir"
              value={state.totalRevenue?.totalRevenue}
              prefix="$"
            />
=======
          <Card>
            <Statistic title="Toplam Gelir" value={state.totalRevenue?.totalRevenue} prefix="$" />
>>>>>>> Stashed changes
          </Card>
        </Col>
      </Row>
      <div style={{display:"grid", justifyContent:"center"}}>
      <Card style={{ marginTop: "20px", justifyContent: "center", border: '2px solid #f0f0f0', boxShadow: '0 2px 4px black' }}>
        <h2>Son Aydaki Ürün Satış Artışı</h2>
        <LineChart
          width={750}
          height={400}
          data={salesData.map(item => ({
            month: getMonthName(item.month),
            satilanUrunSayisi: item.satilanUrunSayisi,
          }))}
          margin={{ top: 5, right: 30, bottom: 5 }}
        >
          <XAxis dataKey="month" reversed="true" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="satilanUrunSayisi"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </Card>

      <Card style={{ marginTop: "20px", display:"flex", justifyContent:"center",border: '2px solid #f0f0f0',boxShadow: '0 2px 4px black' }}>
        <h2>Son Aydaki Müşteri Artışı</h2>
        <LineChart 
          width={450}
          height={300}
          data={allMonthsData.map(item => ({
            monthName: getMonthName(item.month),
            totalCustomers: item.totalCustomers,
          }))}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="monthName" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
             dataKey="totalCustomers"
            stroke="#82ca9d"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
