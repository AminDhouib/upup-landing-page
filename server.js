/* eslint-disable @typescript-eslint/no-require-imports */
const express = require("express");
const { s3GeneratePresignedUrl } = require("upup-react-file-uploader/server");

// dotenv config
const dotenv = require("dotenv");
dotenv.config();

// require cors
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

// Use Express's built-in JSON parser
app.use(express.json());

// POST /api/generate-presigned-url
app.get("/api/generate-presigned-url", async (req, res) => {
  return res.status(200).json({
    message: "Please use POST method to generate presigned URL.",
    error: true,
  });
});

app.post("/api/generate-presigned-url", async (req, res) => {
  try {
    const { provider, enableAutoCorsConfig, ...fileParams } = req.body;

    console.log("BACK AAA", process.env.BACKBLAZE_BUCKET_NAME);
    // Load your S3/Backblaze credentials from environment variables
    const bucketName = process.env.BACKBLAZE_BUCKET_NAME;
    const region = process.env.BACKBLAZE_BUCKET_REGION;
    const endpoint = process.env.BACKBLAZE_S3_ENDPOINT;
    const accessKeyId = process.env.BACKBLAZE_KEY_ID;
    const secretAccessKey = process.env.BACKBLAZE_APP_KEY;

    // Generate presigned data
    const presignedData = await s3GeneratePresignedUrl({
      origin: req.headers.origin,
      provider,
      fileParams,
      bucketName,
      s3ClientConfig: {
        region,
        credentials: {
          accessKeyId,
          secretAccessKey,
        },
        endpoint,
        forcePathStyle: false,
      },
      enableAutoCorsConfig,
    });

    return res.status(200).json(presignedData);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message || "Something went wrong",
      error: true,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Presigned URL server is running on http://localhost:${PORT}`);
});
