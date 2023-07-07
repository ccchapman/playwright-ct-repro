import { test, expect } from "@playwright/experimental-ct-react";

test("some test", async ({ mount }) => {
  const component = await mount(
    <div>
      It works
    </div>
  );
  await expect(component).toContainText("It works");
  expect(await component.screenshot()).toMatchSnapshot();
});
