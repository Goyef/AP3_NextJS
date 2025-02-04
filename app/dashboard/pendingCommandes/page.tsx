"use client";

import { useRef, useState } from "react";
import BookingsList, {
  BookingListRef,
} from "@/components/bookings/bookingsList";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useAuth } from "@/context/AuthContext";
import { Plus } from "lucide-react";
import {
  BookingForm,
  BookingFormSchema,
} from "@/components/bookings/bookingForm";
import { cn } from "@/lib/utils";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import StockList, { StockListRef } from "@/components/stocks/stocksList";
import CommandeList, {
  CommandeListRef,
} from "@/components/commandes/commandesList";
import {
  CommandeForm,
  CommandeFormSchema,
} from "@/components/commandes/commandeForm";
import PendingMouvementList, {
  PendingCommandeListRef,
} from "@/components/commandes/pendingCommandeList";
import PendingCommandeList from "@/components/commandes/pendingCommandeList";

export default function Page() {
  const { user, loading } = useAuth();
  const { toast } = useToast();

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const PendingCommandeListRef = useRef<PendingCommandeListRef>(null);

  if (loading) return <p>Chargement...</p>;

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage>Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <Card className="border-none">
            <CardHeader>
              <CardTitle>
                <div className="flex justify-between">
                  <h2>Commandes en attente</h2>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <PendingCommandeList ref={PendingCommandeListRef} />
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
