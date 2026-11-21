"use client";

import { motion } from "motion/react";
import { ArrowDownLeft, FolderKanban } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectCardProps {
  name: string;
  price: number;
}

export function ProjectCard({ name, price }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group h-full"
    >
      <Card className="relative h-full min-h-[140px] overflow-hidden border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:shadow-primary/10">
        <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-primary/10 blur-2xl transition-all duration-500 group-hover:bg-primary/25" />

        <CardContent className="relative flex h-full flex-col p-2">
          <div className="flex items-center justify-between">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
              <FolderKanban className="h-3.5 w-3.5" />
            </div>

            <motion.div
              whileHover={{ rotate: 45 }}
              className="rounded-full border p-1 text-muted-foreground transition-colors group-hover:border-primary group-hover:text-primary"
            >
              <ArrowDownLeft className="h-3 w-3" />
            </motion.div>
          </div>

          <div className="mt-2.5 flex-1 space-y-0.5">
            <p className="text-[12px] text-muted-foreground">اسم المشروع</p>

            <h3 className="line-clamp-2 min-h-8 text-xs font-bold leading-4 tracking-tight transition-colors group-hover:text-primary">
              {name}
            </h3>
          </div>

          <div className="mt-1.5 border-t pt-1.5">
            <p className="text-[12px] text-muted-foreground">كلفة الاحالة</p>
            <p className="mt-0.5 text-sm font-bold tabular-nums">
              {price.toLocaleString("en-US")}{" "}
              <span className="text-[9px]">IQD</span>
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
