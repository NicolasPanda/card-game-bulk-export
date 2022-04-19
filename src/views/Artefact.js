import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import JSZip from "jszip";
import FileSaver from "file-saver";
import Button from "../components/Button";
import Header from "../components/Header";
import ArtefactCards from "../components/ArtefactCards";

const baseURL = "http://localhost:1337/";

function Artefact() {
  const [artefactData, setArtefactData] = useState([]);
  const [concertCardsNumber, setConcertCardsNumber] = useState(0);
  const [zip] = useState(new JSZip());
  const cardsRef = useRef([]);

  useEffect(() => {
    axios.get(baseURL + "artefact").then((res) => {
      setArtefactData(res.data);
      setConcertCardsNumber(res.data.length);
    });
  }, []);

  useEffect(() => {
    cardsRef.current.forEach((element, index) => {
      html2canvas(element).then((canvas) => {
        canvas.toBlob((blob) => {
          zip.file(`Cards_Artefact_${index + 1}.png`, blob);
        });
      });
    });
  }, [artefactData, zip]);

  const handleExportCards = () => {
    zip.generateAsync({ type: "blob" }).then((content) => {
      FileSaver.saveAs(content, "ArtefactCards.zip");
    });
  };

  return (
    <div className="flex flex-col h-full min-h-screen text-gray-200 bg-gray-500">
      <Header />

      <div className="flex flex-col items-center justify-center my-14 gap-14">
        <Button
          onClick={handleExportCards}
          text={`Export ${concertCardsNumber} Cards`}
        />
        {artefactData.map((data, index) => (
          <ArtefactCards
            innerRef={(element) => (cardsRef.current[index] = element)}
            stats={[data[1], data[2], data[3]]}
            type={data[0].toLowerCase()}
          />
        ))}
      </div>
    </div>
  );
}

export default Artefact;
