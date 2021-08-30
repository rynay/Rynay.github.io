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
          width={"50%"}
          src="https://wakatime.com/share/@rynay/41b2a67f-68b2-4484-a45f-c9df5e09e36f.svg"
        ></embed>

        <embed
          width={"50%"}
          src="https://wakatime.com/share/@rynay/5d769a69-b47b-4b74-a268-093050e99e4f.svg"
        ></embed>
      </figure>
      <figure
        className={`${s.chartsContainer} ${
          theme === "dark" ? "" : s.chartsContainer_hidden
        }  ${!isShown ? s.chartsContainer_hidden : ""}`}
      >
        <embed
          width={"50%"}
          src="https://wakatime.com/share/@rynay/e8cc7d16-af56-4cbc-8527-7c553f56e5d7.svg"
        ></embed>

        <embed
          width={"50%"}
          src="https://wakatime.com/share/@rynay/ece3a864-aced-4a12-936d-560f4952795a.svg"
        ></embed>
      </figure>
    </>
  );
};
