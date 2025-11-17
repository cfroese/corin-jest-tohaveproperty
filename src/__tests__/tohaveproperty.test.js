const houseForSale = require("../tohaveproperty");

describe("toHaveProperty", () => {
	test.only("this house has my desired features", () => {
		// Example Referencing
		console.log("houseForSale:", houseForSale);
		expect(houseForSale).toHaveProperty("bath");
		expect(houseForSale).toHaveProperty("bedrooms", 4);

		expect(houseForSale).not.toHaveProperty("pool");

		// Deep referencing using dot notation
		expect(houseForSale).toHaveProperty("kitchen.area", 20);
		expect(houseForSale).toHaveProperty("kitchen.amenities", ["oven", "stove", "washer"]);
	});
})