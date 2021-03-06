import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import JSZip from "jszip";
import FileSaver from "file-saver";
import html2canvas from "html2canvas";
import Button from "../components/Button";
import Header from "../components/Header";
import ArtistCards from "../components/ArtistCards";
import { wait } from "@testing-library/user-event/dist/utils";

const baseURL = "http://localhost:1337/";

function Artist() {
  const [CardsNumber, setCardsNumber] = useState(0);
  const [guitaristData, setGuitaristData] = useState([]);
  const [signerData, setSignerData] = useState([]);
  const [drummerData, setDrummerData] = useState([]);
  const [zip] = useState(new JSZip());
  const cardsRef = useRef([]);

  useEffect(() => {
    axios.get(baseURL + "artist/guitarist").then((res) => {
      setGuitaristData(res.data);
    });
    axios.get(baseURL + "artist/signer").then((res) => {
      setSignerData(res.data);
    });
    axios.get(baseURL + "artist/drummer").then((res) => {
      setDrummerData(res.data);
    });
  }, []);

  useEffect(() => {
    setCardsNumber(
      guitaristData.length + signerData.length + drummerData.length
    );
  }, [guitaristData, signerData, drummerData]);

  useEffect(() => {
    setTimeout(function () {
      cardsRef.current.forEach((element, index) => {
        html2canvas(element).then((canvas) => {
          canvas.toBlob((blob) => {
            zip.file(`Cards_Artist_${index + 1}.png`, blob);
          });
        });
      });
    }, 5000);
  }, [guitaristData, signerData, drummerData, zip]);

  const handleExportCards = () => {
    zip.generateAsync({ type: "blob" }).then((content) => {
      FileSaver.saveAs(content, "ArtistCards.zip");
    });
  };

  return (
    <div className="flex flex-col h-full min-h-screen text-gray-200 bg-gray-500">
      <Header />
      <div className="flex flex-col items-center justify-center my-14 gap-14">
        <Button
          onClick={handleExportCards}
          text={`Export ${CardsNumber} Cards`}
        />
        {guitaristData.map((data, index) => (
          <ArtistCards
            innerRef={(element) => (cardsRef.current[index] = element)}
            stats={data}
            type={"guitarist"}
            key={"guitarist" + index}
          />
        ))}
        {signerData.map((data, index) => (
          <ArtistCards
            innerRef={(element) =>
              (cardsRef.current[guitaristData.length + index] = element)
            }
            stats={data}
            type={"signer"}
            key={"signer" + index}
          />
        ))}
        {drummerData.map((data, index) => (
          <ArtistCards
            innerRef={(element) =>
              (cardsRef.current[
                guitaristData.length + signerData.length + index
              ] = element)
            }
            stats={data}
            type={"drummer"}
            key={"drummer" + index}
          />
        ))}
      </div>
    </div>
  );
}

export default Artist;
