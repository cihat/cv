"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { PrinterIcon } from "lucide-react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "./ui/drawer";

export const PrintDrawer = () => {
  const [open, setOpen] = useState(false);

  const handlePrint = () => {
    window.print();
    setOpen(false);
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className="fixed bottom-4 right-4 size-16 rounded-full shadow-2xl print:hidden">
          <PrinterIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Print CV</DrawerTitle>
            <DrawerDescription>
              Print a clean, professional version of your CV with essential information only.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <p className="text-sm text-muted-foreground mb-4">
              The printed version will include:
            </p>
            <ul className="text-sm text-muted-foreground space-y-1 mb-4">
              <li>• Contact information</li>
              <li>• Work experience</li>
              <li>• Education</li>
              <li>• Skills</li>
              <li>• Selected projects & apps</li>
            </ul>
          </div>
          <DrawerFooter>
            <Button onClick={handlePrint}>Print CV</Button>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
