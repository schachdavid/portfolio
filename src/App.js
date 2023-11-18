import cn from "./App.module.css";
import { useCallback, useEffect, useMemo, useState } from "react";
import Switch from "./components/Switch";
import cx from "classnames";
import { ReactComponent as MoonIcon } from "./icons/moon.svg";
import { ReactComponent as SunIcon } from "./icons/sun.svg";
import { ReactComponent as RepeatIcon } from "./icons/repeat.svg";
import { useIsMobile } from "./hooks/isMobile";

const skills = [
  "build software",
  "create data visualizations",
  "automate things",
];

const TIME_PER_LETTER = 100;

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function App() {
  const [theme, setTheme] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );

  const isMobile = useIsMobile();

  const [skillIdx, setSkillIdx] = useState(0);
  const [skillText, setSkillText] = useState("");
  const [animationFinished, setAnimationFinished] = useState(false);

  const addLetters = useCallback(async () => {
    return new Promise((resolve) => {
      var interval = setInterval(() => {
        const currentSkill = skills[skillIdx];
        setSkillText((prev) => {
          if (prev !== currentSkill)
            return currentSkill.slice(0, prev.length + 1);
          clearInterval(interval);
          resolve();
          return prev;
        });
      }, TIME_PER_LETTER);
    });
  }, [skillIdx]);

  const removeLetters = useCallback(() => {
    return new Promise((resolve) => {
      var interval = setInterval(() => {
        const currentSkill = skills[skillIdx];
        setSkillText((prev) => {
          if (prev !== "") return currentSkill.slice(0, prev.length - 1);
          clearInterval(interval);
          resolve();
          return prev;
        });
      }, TIME_PER_LETTER);
    });
  }, []);

  useEffect(() => {
    const typewriteText = async () => {
      await addLetters();
      await delay(1000);

      if (skillIdx < skills.length - 1) {
        await removeLetters();
        setSkillIdx(skillIdx + 1);
      } else {
        setAnimationFinished(true);
      }
    };

    typewriteText();
  }, [addLetters, removeLetters, skillIdx]);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);
  

  return (
    <div>
      <header className={cn.header}>
        <h1>{isMobile ?  "DS" : "David Schach"}</h1>

        <div className={cn.headerRight}>
          <nav className={cn.nav}>
            <ul>
            {!isMobile &&  <li>
                <a href="#about">About me</a>
              </li>}
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
          {!isMobile && <div className={cn.switchContainer}>
            <SunIcon
              className={cn.switchIcon}
              onClick={() => setTheme("light")}
            />
            <Switch
              onChange={() => toggleTheme()}
              className={cn.switch}
              checked={theme === "dark"}
            />
            <MoonIcon
              className={cn.switchIcon}
              onClick={() => setTheme("dark")}
            />
          </div>}
        </div>
      </header>
      <main>
        <section className={cn.aboutSection} id="about">
          <h2
            className={cx(cn.aboutText, {
              [cn.animationFinished]: animationFinished,
            })}
          >
            Hi, I am David and I<br /> {skillText}
            <div className={cn.cursor}> </div>
            <span className={cn.point}>.</span>
            {animationFinished && (
              <RepeatIcon
                className={cn.repeatIcon}
                onClick={async () => {
                  setAnimationFinished(false);
                  await removeLetters();
                  setSkillIdx(0);
                }}
              />
            )}
          </h2>
          <div className={cn.contact}>
            <span className={cn.arrow}>➞</span> contact me
          </div>
        </section>
        <section id="projects">
          <h2 className={cn.sectionHeadline}>Projects</h2>
        </section>
        <section id="contact">
          <h2 className={cn.sectionHeadline}>Contact</h2>
        </section>
      </main>
    </div>
  );
}

export default App;
