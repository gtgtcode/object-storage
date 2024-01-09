import "@/styles/globals.css";
import { ConfigProvider, theme } from "antd";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [currentTheme, setTheme] = useState("dark");

  return (
    <div
      className={
        currentTheme == "dark"
          ? "bg-slate-900 w-full h-full transition-all"
          : "transition-all"
      }
    >
      <ConfigProvider
        theme={{
          algorithm:
            currentTheme == "dark"
              ? theme.darkAlgorithm
              : theme.defaultAlgorithm,
        }}
      >
        <Component
          {...pageProps}
          currentTheme={currentTheme}
          setTheme={setTheme}
        />
      </ConfigProvider>
    </div>
  );
}
