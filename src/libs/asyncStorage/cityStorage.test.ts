import { CityProps } from "@services/getCityByNameService";
import {
  getStorageCity,
  removeStorageCity,
  saveStorageCity,
} from "./cityStorage";

describe("Storage: CityStorage", () => {
  it("should return null when there is no city stored", async () => {
    const response = await getStorageCity();

    expect(response).toBeNull();
  });

  it("should return the stored city", async () => {
    const newCity: CityProps = {
      id: "12345",
      name: "Gravataí",
      longitude: -52.9833,
      latitude: -29.9667,
    };

    await saveStorageCity(newCity);

    const storageCity = await getStorageCity();

    expect(storageCity).toEqual(newCity);
  });

  it("should remove the stored city", async () => {
    const newCity: CityProps = {
      id: "12345",
      name: "Gravataí",
      longitude: -52.9833,
      latitude: -29.9667,
    };

    await saveStorageCity(newCity);

    await removeStorageCity();

    const storageCity = await getStorageCity();

    expect(storageCity).toBeNull();
  });
});
