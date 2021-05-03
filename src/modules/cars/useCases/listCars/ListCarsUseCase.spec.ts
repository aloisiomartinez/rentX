import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { ListCarsUseCase } from "@modules/cars/useCases/listCars/ListCarsUseCase";

let listCarsUseCase: ListCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
  });

  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car1",
      description: "Car description",
      daily_rate: 140.55,
      license_plate: "1234-ABCD",
      fine_amount: 40,
      brand: "Car_brand",
      category_id: "category_id",
    });

    const cars = await listCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car2",
      description: "Car description2",
      daily_rate: 140.55,
      license_plate: "1234-ABCD",
      fine_amount: 40,
      brand: "Car_brand_Test",
      category_id: "category_id",
    });

    const cars = await listCarsUseCase.execute({
      brand: "Car_Brand",
    });

    expect(cars).toEqual([car]);
  });
});
