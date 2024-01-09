import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "antd";
import { BulbOutlined } from "@ant-design/icons";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props: any) {
  return (
    <main className="p-4">
      <div className="text-right">
        <Button
          className=""
          shape="circle"
          onClick={() =>
            props.setTheme(props.currentTheme == "dark" ? "light" : "dark")
          }
          icon={<BulbOutlined />}
        />
      </div>
    </main>
  );
}
