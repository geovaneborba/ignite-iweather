import { render, screen } from "@testing-library/react-native";
import { NextDays } from ".";

import clearDay from "@assets/clear_day.svg";

describe("Component: NextDays", () => {
  it("should render the next days", async () => {
    const dataMock = [
      {
        day: "14/10",
        min: "25°c",
        max: "32°c",
        icon: clearDay,
        weather: "Parcialmente nublado",
      },
      {
        day: "15/10",
        min: "22°c",
        max: "28°c",
        icon: clearDay,
        weather: "Chuva",
      },
      {
        day: "16/10",
        min: "18°c",
        max: "26°c",
        icon: clearDay,
        weather: "Nublado",
      },
      {
        day: "17/10",
        min: "27°c",
        max: "35°c",
        icon: clearDay,
        weather: "Tempestade",
      },
      {
        day: "18/10",
        min: "21°c",
        max: "29°c",
        icon: clearDay,
        weather: "Neblina",
      },
    ];

    render(<NextDays data={dataMock} />);

    expect(screen.getByText("14/10"));
    expect(screen.getByText("15/10"));
    expect(screen.getByText("16/10"));
    expect(screen.getByText("17/10"));
    expect(screen.getByText("18/10"));
  });
});
