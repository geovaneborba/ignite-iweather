import {
  fireEvent,
  render,
  screen,
  waitFor,
} from "@__tests__/utils/customRender";

import { api } from "@services/api";
import { mockCityAPIResponse } from "@__tests__/mocks/api/mockCityAPIResponse";

import { Search } from "@screens/Search";

describe("Screen: ", () => {
  it("should be show city option", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockCityAPIResponse });

    render(<Search />);

    const searchInput = screen.getByTestId("search-input");

    fireEvent.changeText(searchInput, "Gravataí");

    const option = await waitFor(() => screen.findByText(/gravataí/i));

    expect(option).toBeTruthy();

    screen.debug();
  });
});
