import BrowserOnly from "@docusaurus/BrowserOnly";
import { useColorMode } from "@docusaurus/theme-common";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import React, { useMemo } from "react";

type Props = {
  limit: number;
  mini: boolean;
};

export default function Uploader({ limit, mini }: Readonly<Props>) {
  const { colorMode } = useColorMode();
  const { siteConfig } = useDocusaurusContext();
  const dark = useMemo(() => colorMode === "dark", [colorMode]);

  return (
    <BrowserOnly>
      {() => {
        const {
          UpupUploader,
          UpupProvider,
          UploadAdapter,
          // eslint-disable-next-line @typescript-eslint/no-require-imports
        } = require("upup-react-file-uploader");

        const uploadAdapters = [
          UploadAdapter.INTERNAL,
          UploadAdapter.ONE_DRIVE,
          UploadAdapter.GOOGLE_DRIVE,
          UploadAdapter.LINK,
          UploadAdapter.CAMERA,
        ];

        return (
          <UpupUploader
            provider={UpupProvider.BackBlaze}
            limit={limit}
            tokenEndpoint=""
            uploadAdapters={uploadAdapters}
            driveConfigs={siteConfig.customFields.driveConfigs}
            dark={dark}
            mini={mini}
          />
        );
      }}
    </BrowserOnly>
  );
}
