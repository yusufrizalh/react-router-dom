import React, { useState, useEffect } from "react";
import axios from "axios";
import collect from "collect.js";
import ColorHash from "color-hash";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const ChartPage = () => {
  // membuat nilai awal dari products
  const [products, setProducts] = useState([]); // array kosong
  const [name, setName] = useState([]);
  const [price, setPrice] = useState([]);

  // perintah apapun didalam useEffect akan dijalankan secara otomatis
  useEffect(() => {
    getAllProducts();
  });

  const getAllProducts = async () => {
    const response = await axios.get("http://localhost:5001/products");
    setProducts(response.data);

    const nameItem = collect(products)
      .map(function (item) {
        return item.name;
      })
      .all();

    const priceItem = collect(products)
      .map(function (item) {
        return item.price;
      })
      .all();

    console.log("" + nameItem);
    console.log("" + priceItem);

    setName(nameItem);
    setPrice(priceItem);
  };

  const colorHash = new ColorHash();

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Product Comparation by Price",
        padding: {
          bottom: 30,
        },
        weight: "bold",
        color: "#00325C",
        font: {
          size: 28,
        },
        align: "center",
      },
      datalabels: {
        display: true,
        color: "black",
        align: "center",
        labels: {
          title: {
            font: {
              weight: "bold",
            },
          },
          value: {
            color: "white",
          },
        },
        formatter: function (value) {
          return value;
        },
      },
    },
  };

  return (
    <div className="px-5 mt-5 py-5">
      <Bar
        options={options}
        data={{
          labels: name,
          datasets: [
            {
              label: "Product Data",
              // backgroundColor: "rgba(75, 192, 192, 1)",
              backgroundColor: name.map((name) => colorHash.hex(name)),
              borderColor: "rgba(0, 0, 0, 1)",
              borderWidth: 2,
              data: price,
            },
          ],
        }}
      />
    </div>
  );
};

export default ChartPage;
