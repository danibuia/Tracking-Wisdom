// VerseOfTheDay.tsx
import React from "react";
import { Box, Typography } from "@mui/material";

interface VerseOfTheDayProps {
  href: string;
  text: string;
}

const VerseOfTheDay: React.FC<VerseOfTheDayProps> = ({ href, text }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 1,
      }}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#118ab2", textDecoration: "none" }}
      >
        Verse of Today
      </a>
      <Typography variant="body2" color="textSecondary">
        {text}
      </Typography>
    </Box>
  );
};

export default VerseOfTheDay;
