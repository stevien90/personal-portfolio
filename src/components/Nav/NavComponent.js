import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Box from "@mui/material/Box";
import "./navComponentStyles.css";

function NavComponent({ text, active, onClick }) {
  return (
    <Box
      className={`navBox ${active ? "active" : ""}`}
      onClick={onClick}
      sx={{ cursor: "pointer" }}
    >
      <ArrowRightAltIcon />
      <p>{text}</p>
    </Box>
  );
}

export default NavComponent;
