import { Button } from "@/components/ui/button";
import Link from "next/link";

import React from "react";

const Links = () => {
  return (
    <ul className="flex  items-center justify-start gap-x-6">
      <li>
        <Button
          variant="navlink"
          nativeButton={false}
          render={<Link href="/" />}
        >
          المشاريع
        </Button>
      </li>
      <li>
        <Button
          variant="navlink"
          nativeButton={false}
          render={<Link href="/" />}
        >
          المكونات
        </Button>
      </li>
      <li>
        <Button
          variant="navlink"
          nativeButton={false}
          render={<Link href="/" />}
        >
          المشاريع
        </Button>
      </li>
    </ul>
  );
};

export default Links;
