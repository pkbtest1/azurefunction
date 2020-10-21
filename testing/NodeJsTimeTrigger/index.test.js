const timerFunction = require("../../NodeJsTimeTrigger/index");
const context = require("../../testing/NodeJsTimeTrigger/defaultContext");

const timer = require("../../testing/NodeJsTimeTrigger/defaultTimer");

test("Timer trigger should log message", () => {
    timerFunction(context, timer);
    expect(context.log.mock.calls.length).toBe(1);
});