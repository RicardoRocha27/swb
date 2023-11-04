"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const controls = useAnimation();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-between py-4 transition-all hover:underline",
          className
        )}
        {...props}
        onMouseEnter={() =>
          controls.start({
            y: [-5, 0, -5],
            transition: {
              y: { duration: 0.8, repeat: Infinity, repeatType: "reverse" },
            },
          })
        }
        onMouseLeave={() => controls.start({ y: 0 })}
        onClick={handleToggleAccordion}
      >
        {children}
        <motion.div animate={controls}>
          {isOpen ? (
            <ChevronUp className="h-4 w-4 shrink-0 transition-transform duration-200" />
          ) : (
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
          )}
        </motion.div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden text-foreground/80 text-md transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className
    )}
    {...props}
  >
    <div className="pb-4 pt-0">{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
