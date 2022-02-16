import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import JSZip from "jszip";
import FileSaver from "file-saver";
import ConcertCards from "../components/ConcertCards";
import Header from "../components/Header";
import Button from "../components/Button";

const baseURL = "http://localhost:1337/";

function Concert() {
  const [concertData, setConcertData] = useState([]);
  const [concertCardsNumber, setConcertCardsNumber] = useState(0);
  const [zip] = useState(new JSZip());
  const cardsRef = useRef([]);

  useEffect(() => {
    axios.get(baseURL + "concert").then((res) => {
      renderCard(res.data);
      setConcertCardsNumber(res.data.length);
    });
  }, []);

  useEffect(() => {
    cardsRef.current.forEach((element, index) => {
      html2canvas(element).then((canvas) => {
        canvas.toBlob((blob) => {
          zip.file(`Cards_Concert_${index + 1}.png`, blob);
        });
      });
    });
  }, [concertData, zip]);

  const renderCard = (Data) => {
    if (Data === null) {
      return null;
    }
    var newData = [];
    Data.forEach((card) => {
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
    zip.generateAsync({ type: "blob" }).then((content) => {
      FileSaver.saveAs(content, "ConcertCards.zip");
    });
  };

  return (
    <div className="flex flex-col h-full min-h-screen text-gray-200 bg-gray-800">
      <Header />

      <div className="flex flex-col items-center justify-center my-14 gap-14">
        <Button
          onClick={handleExportCards}
          text={`Export ${concertCardsNumber} Cards`}
        />
        {concertData.map((value, index) => (
          <ConcertCards
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
