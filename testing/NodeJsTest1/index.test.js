//const httpFunction = require("./index");
const context = require("../../testing/NodeJsTest1/defaultContext");
const httpFunction = require("../../NodeJsTest1/index");

test("Http trigger should return known text", async() => {
    const request = {
        query: { name: "Bill1" },
    };

    await httpFunction(context, request);

    expect(context.log.mock.calls.length).toBe(1);
    expect(context.res.body).toEqual("Hello Bill");
});
