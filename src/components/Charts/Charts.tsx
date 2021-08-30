import { useContext, useLayoutEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeProvider";
import s from "./Charts.module.scss";

export const Charts = () => {
  const [theme] = useContext(ThemeContext);
  const match = useRouteMatch();
  const [isShown, setIsShown] = useState<boolean>();

  useLayoutEffect(() => {
    if (match.isExact && match.path === "/") {
      setIsShown(true);
    } else {
      setIsShown(false);
    }
  }, [match]);

  return (
    <>
      <figure
        className={`${s.chartsContainer} ${
          theme === "light" ? "" : s.chartsContainer_hidden
        } ${!isShown ? s.chartsContainer_hidden : ""}`}
      >
        <embed
          className={s.chart}
          src="https://wakatime.com/share/@rynay/da0223be-e452-41cf-af2c-9272e2b5de59.svg"
        ></embed>

        <embed
          className={s.chart}
          src="https://wakatime.com/share/@rynay/3731142a-d11b-453b-ad3b-63af6b794506.svg"
        ></embed>
      </figure>
      <figure
        className={`${s.chartsContainer} ${
          theme === "dark" ? "" : s.chartsContainer_hidden
        }  ${!isShown ? s.chartsContainer_hidden : ""}`}
      >
        <embed
          className={s.chart}
          src="https://wakatime.com/share/@rynay/92b2b2d2-a172-493c-8cbe-d574856057b5.svg"
        ></embed>

        <embed
          className={s.chart}
          src="https://wakatime.com/share/@rynay/858b6f63-f709-4655-8b90-8023c071cabf.svg"
        ></embed>
      </figure>
    </>
  );
};
