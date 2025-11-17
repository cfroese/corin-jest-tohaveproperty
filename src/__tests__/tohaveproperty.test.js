// Based on example from https://jestjs.io/docs/expect#tohavepropertykeypath-value

const houseForSale = require("../tohaveproperty");

describe("toHaveProperty", () => {
	test("this house has my desired features", () => {
		// Example Referencing
		expect(houseForSale).toHaveProperty(["bath"]);  // This works
		expect(houseForSale).toHaveProperty("bath"); // This does not
	});
})