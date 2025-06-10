"use client";
import * as React from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ny } from "@/lib/utils";

import { CircleCheckBig, CircleXIcon, Loader } from "lucide-react";

export function AnimatedSubmitButton({
  status,
  onSubmit,
  ...rest
}: ButtonProps & { status: "loading" | "success" | "error" | "idle" }) {
  return (
    <Button
      disabled={status == "loading"}
      onClick={onSubmit}
      {...rest}
      variant={status === "error" ? "destructive" : rest.variant}
      className={ny("w-36 rounded-lg overflow-hidden", rest.className)}
    >
      <AnimatePresence mode="wait">
        {/* //------------------------------IDLE */}
        {status === "idle" && (
          <motion.span
            key={status}
            exit={{
              opacity: 0,
              y: -15,
              transition: { duration: 0.3, type: "spring" },
            }}
          >
            Send Message
          </motion.span>
        )}
        {/* //------------------------------LOADING */}
        {status === "loading" && (
          <motion.span
            key={status}
            // initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 100, y: 0, transition: { delay: 0 } }}
            exit={{ opacity: 0, y: -15, transition: { duration: 0.3 } }}
          >
            <Loader className="animate-spin" size="19" />
          </motion.span>
        )}
        {/* //------------------------------RESOLVED */}
        {["success", "error"].includes(status) && (
          <motion.span
            key={status}
            // initial={{ opacity: 0, y: 15, scale: 0 }}
            animate={{
              opacity: 100,
              y: 0,
              scale: 1,
              transition: { delay: 0.1, duration: 0.4 },
            }}
            exit={{ opacity: 0, y: -15, transition: { duration: 0.3 } }}
          >
            {status === "success" && <CircleCheckBig size="20" />}
            {status === "error" && <CircleXIcon size="20" />}
          </motion.span>
        )}
      </AnimatePresence>
    </Button>
  );
}
