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
import { useStripeContext  } from "../context/StripeProvider";

const DashboardPage = () => {
  const [paymentData, setPaymentData] = useState(null);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const{state,dispatch}=useStripeContext()
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const paymentResponse = await fetch(`${apiUrl}/stripe/totalRevenue`);
        const paymentData = await paymentResponse.json();
        dispatch({ type: "SET_TOTAL_REVENUE", payload: paymentData });

        const productsResponse = await fetch(`${apiUrl}/stripe/totalProductsSold`);
        const productsData = await productsResponse.json();
        dispatch({ type: "SET_TOTAL_PRODUCTS", payload: productsData });

        const customersResponse = await fetch(`${apiUrl}/stripe/totalCustomers`);
        const customersData = await customersResponse.json();
        dispatch({ type: "SET_TOTAL_CUSTOMERS", payload: customersData });
      } catch (error) {
        console.error('Veri çekme hatası:', error);
      }
    };

    fetchData();
  }, [apiUrl, dispatch]);
  console.log(paymentData)
  const productSalesData = [
    { name: "Ocak", satilanUrunSayisi: 10 },
    { name: "Şubat", satilanUrunSayisi: 15 },
    { name: "Mart", satilanUrunSayisi: 20 },
    { name: "Nisan", satilanUrunSayisi: 25 },
    { name: "Mayıs", satilanUrunSayisi: 30 },
    { name: "Haziran", satilanUrunSayisi: 35 },
  ];

  const customerData = [
    { name: "Ocak", musteriSayisi: 20 },
    { name: "Şubat", musteriSayisi: 25 },
    { name: "Mart", musteriSayisi: 30 },
    { name: "Nisan", musteriSayisi: 10 },
    { name: "Mayıs", musteriSayisi: 40 },
    { name: "Haziran", musteriSayisi: 45 },
  ];
  console.log(state)

  return (
    <div>
      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <Statistic title="Toplam Ürün Satışı" value={120} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Toplam Müşteri Sayısı" value={50} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Toplam Gelir" value={state.totalRevenue?.totalRevenue} prefix="$" />
          </Card>
        </Col>
      </Row>
      <Card style={{ marginTop: "20px" }}>
        <h2>Son Aydaki Ürün Satış Artışı</h2>
        <LineChart
          width={600}
          height={600}
          data={productSalesData}
          margin={{ top: 5, right: 30, bottom: 5 }}
        >
          <XAxis dataKey="name" />
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
      <Card style={{ marginTop: "20px" }}>
        <h2>Son Aydaki Müşteri Artışı</h2>
        <LineChart
          width={600}
          height={300}
          data={customerData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="musteriSayisi"
            stroke="#82ca9d"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </Card>
    </div>
  );
};

export default DashboardPage;
