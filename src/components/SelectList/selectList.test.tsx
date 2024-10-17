import { fireEvent, render, screen } from "@testing-library/react-native";

import { SelectList } from "@components/SelectList";

describe("Component: SelectList", () => {
  it("returns correct city details when an option is selected", () => {
    const data = [
      {
        id: "1",
        name: "Gravataí",
        latitude: 123,
        longitude: 123,
      },
      {
        id: "2",
        name: "Cachoeirinha",
        latitude: 456,
        longitude: 789,
      },
    ];

    const onPress = jest.fn();

    render(<SelectList data={data} onChange={() => {}} onPress={onPress} />);

    const selectCity = screen.getByText(/cachoeirinha/i);

    fireEvent.press(selectCity);

    expect(onPress).toHaveBeenCalledTimes(1);
    expect(onPress).toHaveBeenCalledWith(data[1]);
  });

  it("should not render options when data is empty", () => {
    render(<SelectList data={[]} onChange={() => {}} onPress={() => {}} />);

    const options = screen.getByTestId("options");

    expect(options.children).toHaveLength(0);
  });
});
