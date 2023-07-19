import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme";
import { GlobalStyles } from "./global";
import { CursorProvider } from "react-cursor-custom";
import { settings } from "./portfolio";
import ReactGA from "react-ga";
import alanBtn from "@alan-ai/alan-sdk-web";
import { HiMenuAlt1 } from "react-icons/hi";

function App() {
  useEffect(() => {
    if (settings.googleTrackingID) {
      ReactGA.initialize(settings.googleTrackingID, {
        testMode: process.env.NODE_ENV === "test",
      });
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, []);


  //----------------------------------ALAN AI DETAILS----------------------------------



  useEffect(() => {
    let alanBtnInstance = alanBtn({
      key: "0aee186d3c7eda08b3303245a271cf842e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {
        if (commandData.command == "linkedin") {
          window.open(
            "https://www.linkedin.com/in/alan-binu-95025015a/",
            "_blank"
          );
        } else if (commandData.command == "github") {
          window.open("https://github.com/AlanBinu007", "_blank");
        } else if (commandData.command == "blog") {
          window.open("https://hashnode.com/@alanbinu", "_blank");
        } else if (commandData.command == "latestwork") {
          window.open(
            "https://github.com/AlanBinu007?tab=repositories",
            "_blank"
          );
        } else if (commandData.command == "mailto") {
          window.open("mailto:alanbinu5@gmail.com", "_blank");
        } else if (commandData.command == "linkedinmesg") {
          window.open("https://www.linkedin.com/in/alan-binu/", "_blank");
        } else if (commandData.command == "webtechsolution") {
          window.open("https://web-tech-solutions.web.app/", "_blank");
        } else if (commandData.command == "emailmesg") {
          window.open("mailto:alanbinu5@gmail.com", "_blank");
        } else if (commandData.command == "username") {
          localStorage.setItem("name", commandData.value);
        } else if (commandData.command == "changename") {
          localStorage.setItem("name", commandData.value);
        }
      },
      onConnectionStatus: async function (status) {
        if (status === "authorized") {
          await alanBtnInstance.activate();
          if (localStorage.getItem("name") == null) {
            alanBtnInstance.playText(
              // "Hi. Welcome to my digital world. I am your Artificial intelligence integrated voice assistant, you can ask simple questions like Introduce yourself, contact alan, show alans latest projects, open his Github profile, what is the time, whats the weather on my area, whats todays date, and also you can ask to give me latest news. Thanks for visiting my profile and enjoy your time"
              "Hi. Welcome to my digital world. I am your Artificial intelligence integrated voice assistant, you can ask simple questions and i will try my best to answer it"
            );
            // alanBtnInstance.playText("I am your Artificial intelligence integrated voice assistant, you can ask simple questions like Introduce yourself, contact alan, show alans latest projects, open his Github profile, what is the time, whats the weather on my area, whats todays date, and also you can ask to give me latest news. Thanks for visiting my profile and enjoy your time");
            alanBtnInstance.callProjectApi("startAlan");
          } else {
            alanBtnInstance.playText(
              "Hi " + localStorage.getItem("name") + ". It's a pleasure to reconnect with you."
            );
            alanBtnInstance.callProjectApi(
              "setName",
              {
                name: localStorage.getItem("name"),
              },
              function (error, result) {}
            );
          }
        }
      },
    });
  }, []);










  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const useCursor = settings.useCustomCursor;

  return (
    <ThemeProvider theme={themes[theme]}>
      <>
        <GlobalStyles />
        <div>
          {useCursor ? (
            <CursorProvider
              color={themes[theme].secondaryText}
              ringSize={25}
              transitionTime={75}
            >
              <Main theme={themes[theme]} setTheme={setTheme} />
            </CursorProvider>
          ) : (
            <Main theme={themes[theme]} setTheme={setTheme} />
          )}
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
