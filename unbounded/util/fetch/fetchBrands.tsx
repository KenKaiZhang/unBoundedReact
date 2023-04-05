import { baseUrl } from "../variables";
import { getData } from "./fetch";

export const fetchBrands = (country: string) => {
  const url = baseUrl(`/brands/country/${country}`);
  console.log(getData(url));
};
