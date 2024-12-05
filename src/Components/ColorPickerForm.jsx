import { useState } from "react";
import { Button } from "@mui/material";
import { ChromePicker } from "react-color";
import { useForm } from "react-hook-form";

export default function ColorPickerForm({ setColors, colors, maxColors }) {
  const [currentColor, setCurrentColor] = useState("teal");
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
    reset: resetColor,
  } = useForm();

  function updataCurrentColor(color) {
    setCurrentColor(color.hex);
  }

  function ValidateColor() {
    return colors.every((col) => col.color !== currentColor);
  }

  const validateName = (value) => {
    if (!value) return "Name is required";
    if (!ValidateColor()) return `${currentColor} has already been used`;
    if (colors.some((col) => col.name.toLowerCase() === value.toLowerCase())) {
      return `${value} is already used`;
    }
    return true;
  };

  function addNewColor(data2) {
    const newColor = {
      color: currentColor,
      name: data2.name,
    };
    setColors((prev) => [...prev, newColor]);
    resetColor();
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ChromePicker
        color={currentColor}
        onChangeComplete={updataCurrentColor}
        styles={{
          default: {
            picker: {
              margin: "1.5rem 0",
              width: "250px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9)",
              borderRadius: "10px",
            },
          },
        }}
      />

      <form
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          textAlign: "center",
        }}
        onSubmit={handleSubmit2(addNewColor)}
      >
        <label>
          <input
            placeholder="Color Name"
            style={{
              width: "250px",
              padding: "5px",
              fontSize: "1rem",
              marginBottom: "0.5rem",
              textAlign: "start",
              border: "none",
              backgroundColor: "rgba(0,0,0,0.2)",
              borderBottom: "2px solid",
              borderColor: errors2.name ? "red" : "black",
              outline: "0",
              color: errors2.name ? "red" : "black",
              paddingTop: "0.5rem",
            }}
            {...register2("name", { validate: validateName })}
          />
          {errors2.name && (
            <div
              style={{
                color: "red",
                marginBottom: "0.5rem",
              }}
            >
              {errors2.name.message}
            </div>
          )}
        </label>
        <Button
          variant="contained"
          type="submit"
          color="primary"
          disabled={colors.length >= maxColors}
          sx={{
            backgroundColor: colors.length >= maxColors ? "gray" : currentColor,
            width: "85%",
            fontSize: "1.2rem",
          }}
        >
          {colors.length >= maxColors ? "Pallet Full" : "Add Color"}
        </Button>
      </form>
    </div>
  );
}
