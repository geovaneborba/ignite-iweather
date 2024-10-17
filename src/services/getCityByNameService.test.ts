import { api } from "./api";
import { getCityByNameService } from "./getCityByNameService";
import { mockCityAPIResponse } from "@__tests__/mocks/api/mockCityAPIResponse";

describe("Service: getCityByNameService", () => {
  it("should return city details", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockCityAPIResponse });

    const response = await getCityByNameService("Gravataí");

    expect(response.length).toBeGreaterThan(0);

    expect(response).toEqual([
      {
        id: "1",
        name: "Gravataí, BR",
        longitude: -52.43,
        latitude: -29.98,
      },
    ]);
  });
});
