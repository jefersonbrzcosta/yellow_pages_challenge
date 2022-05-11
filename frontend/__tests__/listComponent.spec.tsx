import React from "react";
import List from "../components/List";
import { sampleUserData } from "../utils/sample-data";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Integration testing", () => {
  test("start page with all users", async () => {
    const { findAllByTestId } = render(<List items={sampleUserData} />);
    const items = await findAllByTestId("list-item");
    expect(items.length).toBe(sampleUserData.length);
  });

  test("show error message when do not find any user", async () => {
    const { findByPlaceholderText, findByText } = render(
      <List items={sampleUserData} />
    );
    const input = await findByPlaceholderText("Search");
    fireEvent.change(input, { target: { value: "23443243" } });
    expect(
      await findByText(
        "No results, please review your search or try a different one"
      )
    ).toBeVisible();
  });
});
