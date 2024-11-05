import PostComments from "..";

import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Deve testar funcionalidade do PostComments", () => {
  test("Deve criar e enviar dois comentários", () => {
    render(<PostComments />);
    const commentTextarea = screen.getByRole("textbox");
    fireEvent.change(commentTextarea, {
      target: { value: "Primeiro comentário" },
    });
    expect(commentTextarea).toHaveValue("Primeiro comentário");
    const submitButton = screen.getByRole("button", { name: /comentar/i });


    fireEvent.click(submitButton);


    expect(screen.getByText("Primeiro comentário")).toBeInTheDocument();
    fireEvent.change(commentTextarea, {
      target: { value: "Segundo comentário" },
    });
    expect(commentTextarea).toHaveValue("Segundo comentário");

    fireEvent.click(submitButton);

    expect(screen.getByText("Segundo comentário")).toBeInTheDocument();
    expect(screen.getAllByTestId("post-comment")).toHaveLength(2);
  });
});
