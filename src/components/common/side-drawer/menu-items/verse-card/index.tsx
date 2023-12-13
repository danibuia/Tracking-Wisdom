import { Box, Link, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

interface VerseData {
  href: string;
  text: string;
  reference: string;
}

const VersetulZilei: React.FC = () => {
  const [verseData, setVerseData] = useState<VerseData | null>(null);

  const parseResponseData = (responseData: string): VerseData => {
    const regex =
      /document\.writeln\('(.*)'\);document\.write\('<a onclick="var w=window.open\(this\.href\);w\.focus\(\);return false;" href="(.*)">(.*)<\/a>'\);/;
    const match = responseData.match(regex);

    if (match && match.length === 4) {
      return {
        href: match[2], // Assuming the href is the second capture group
        text: match[1],
        reference: match[3], // Assuming the reference is the third capture group
      };
    } else {
      throw new Error("Failed to parse response data");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.resursecrestine.ro/web-api-versetul-zilei"
        );
        const responseData: string = await response.text();
        const data: VerseData = parseResponseData(responseData);
        setVerseData(data);
      } catch (error) {
        console.error("Error fetching verse data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box sx={{ textAlign: "center" }}>
      {verseData && (
        <Box>
          <Typography variant="h6">Versetul Zilei</Typography>
          <Link
            underline="none"
            href={verseData.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {verseData.reference}
          </Link>
          <Typography sx={{ marginTop: 2, whiteSpace: "pre-wrap" }}>
            {verseData.text}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default VersetulZilei;
