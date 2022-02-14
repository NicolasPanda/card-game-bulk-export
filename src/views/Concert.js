import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import Header from "../components/Header";

const baseURL = "http://localhost:1337/";

function Concert() {
  const [concertData, setConcertData] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((res) => {
      renderCard(res.data);
    });
  }, []);

  const renderCard = (Data) => {
    if (Data === null) {
      return null;
    }
    var newData = [];
    Data.values.forEach((card) => {
      var lootNumber = 0;
      var loseNumber = 0;
      var guitarist = 0;
      var guitaristColor = "green";
      var singer = 0;
      var singerColor = "green";
      var drummer = 0;
      var drummerColor = "green";

      card.forEach((value, index) => {
        switch (index) {
          case 0:
            if (value !== "x") {
              guitarist = value;
              guitaristColor = "green";
            }
            break;
          case 1:
            if (value !== "x") {
              guitarist = value;
              guitaristColor = "blue";
            }
            break;
          case 2:
            if (value !== "x") {
              guitarist = value;
              guitaristColor = "red";
            }
            break;
          case 3:
            if (value !== "x") {
              singer = value;
              singerColor = "green";
            }
            break;
          case 4:
            if (value !== "x") {
              singer = value;
              singerColor = "blue";
            }
            break;
          case 5:
            if (value !== "x") {
              singer = value;
              singerColor = "red";
            }
            break;
          case 6:
            if (value !== "x") {
              drummer = value;
              drummerColor = "green";
            }
            break;
          case 7:
            if (value !== "x") {
              drummer = value;
              drummerColor = "blue";
            }
            break;
          case 8:
            if (value !== "x") {
              drummer = value;
              drummerColor = "red";
            }
            break;
          case 9:
            lootNumber = value;
            break;
          case 10:
            loseNumber = value;
            break;
          default:
            break;
        }
      });

      var cardObject = {
        lootNumber,
        loseNumber,
        guitarist,
        guitaristColor,
        singer,
        singerColor,
        drummer,
        drummerColor,
      };
      newData.push(cardObject);
    });
    setConcertData(newData);
  };

  return (
    <div className="flex h-full min-h-screen flex-col bg-gray-800 text-gray-200">
      <Header />

      <div className="my-14 flex flex-col items-center justify-center gap-14">
        {concertData.map((value, index) => (
          <Cards {...value} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Concert;
