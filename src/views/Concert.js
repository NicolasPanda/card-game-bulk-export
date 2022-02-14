import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import JSZip from "jszip";
import FileSaver from "file-saver";
import Cards from "../components/Cards";
import Header from "../components/Header";

const baseURL = "http://localhost:1337/";

function Concert() {
  const [concertData, setConcertData] = useState([]);
  const [concertCardsNumber, setConcertCardsNumber] = useState(0);
  const cardsRef = useRef([]);

  useEffect(() => {
    axios.get(baseURL).then((res) => {
      renderCard(res.data);
      setConcertCardsNumber(res.data.values.length);
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

  const handleExportCards = () => {
    const zip = new JSZip();

    cardsRef.current.forEach((element, index) => {
      html2canvas(element).then((canvas) => {
        canvas.toBlob((blob) => {
          zip.file(`Cards_Concert_${index}.png`, blob);
          if (index === cardsRef.current.length - 1) {
            zip.generateAsync({ type: "blob" }).then((content) => {
              FileSaver.saveAs(content, "download.zip");
            });
          }
        });
      });
    });
  };

  return (
    <div className="flex h-full min-h-screen flex-col bg-gray-800 text-gray-200">
      <Header />

      <div className="my-14 flex flex-col items-center justify-center gap-14">
        <button
          className="cursor-pointer rounded-full bg-pink-500 px-6 py-2 transition-all duration-200 hover:bg-pink-600 active:bg-pink-400"
          onClick={handleExportCards}
        >
          <span className="select-none">Export {concertCardsNumber} Cards</span>
        </button>
        {concertData.map((value, index) => (
          <Cards
            {...value}
            key={index}
            innerRef={(element) => (cardsRef.current[index] = element)}
          />
        ))}
      </div>
    </div>
  );
}

export default Concert;
