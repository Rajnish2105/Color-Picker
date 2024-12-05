import { Routes, Route, useParams } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Link, useLocation } from "react-router-dom";

import Pallet from "@/Components/Pallet";
import PalletList from "@/Components/PalletList";
import SingleColorPallet from "@/Components/SingleColorPallet";
import NewPalletForm from "@/Components/NewPalletForm";
import Page from "@/Page";

import { useEffect, useState } from "react";
import SeedColors from "@/utils/SeedColors";
import { generatePalette } from "@/utils/colorHelper";

import "./App.css";

function App() {
  const [pallets, setPallets] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const savedPallets = JSON.parse(window.localStorage.getItem("pallets"));
    if (savedPallets && savedPallets.length) {
      setPallets(savedPallets);
    } else {
      setPallets(SeedColors);
    }
  }, []);

  useEffect(() => {
    if (pallets.length) {
      window.localStorage.setItem("pallets", JSON.stringify(pallets));
    }
  }, [pallets]);

  function findPallet(id) {
    if (!pallets || pallets.length === 0) {
      return null;
    }
    return pallets.find((pallet) => pallet.id === id);
  }

  function PalletWrapper() {
    const { id } = useParams();
    const [foundPallet, setFoundPallet] = useState(null);

    useEffect(() => {
      const found = findPallet(id);
      if (found) {
        setFoundPallet(found);
      } else {
        console.error("Pallet not found");
      }
    }, [id]);
    if (!foundPallet) {
      return <div>Loading...</div>; // Or you can return an error message or redirect
    }

    const palette = generatePalette(foundPallet);
    return <Pallet pallet={palette} />;
  }

  function SingleColorPalletWrapper() {
    const { palletId, colorId } = useParams();
    const foundPallet = findPallet(palletId);
    const pallet = generatePalette(foundPallet);
    return <SingleColorPallet pallet={pallet} colorId={colorId} />;
  }

  function savePallet(newpallet) {
    setPallets((prev) => {
      return [...prev, newpallet];
    });
  }

  function deletePallet(idx) {
    setPallets((prev) => prev.filter((pallet) => pallet.id !== idx));
  }

  return (
    <>
      <TransitionGroup>
        <CSSTransition key={location.key} timeout={500} classNames="Page">
          <Routes location={location}>
            <Route
              path="/"
              element={
                <Page>
                  <PalletList
                    allPallets={pallets}
                    deletePallet={deletePallet}
                  />
                </Page>
              }
            />
            <Route
              path="/pallet/new"
              element={
                <Page>
                  <NewPalletForm savePallet={savePallet} pallets={pallets} />
                </Page>
              }
            />
            <Route
              path="pallet/:id"
              element={
                <Page>
                  <PalletWrapper />
                </Page>
              }
            />
            <Route
              path="pallet/:palletId/:colorId"
              element={
                <Page>
                  <SingleColorPalletWrapper />
                </Page>
              }
            />
            <Route
              path="*"
              element={
                <Page>
                  <h1>We are working on this route!</h1>
                  <Link to="/">Go back</Link>
                </Page>
              }
            />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default App;
