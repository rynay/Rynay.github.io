import { Greeting } from "../../components/Greeting/Greeting";
import { Last7DaysActivity } from "../../components/Last7DaysActivity";
import { Stack } from "../../components/Stack";

export const About = () => {
  return (
    <>
      <Greeting />
      <Stack />
      <Last7DaysActivity />
    </>
  );
};
