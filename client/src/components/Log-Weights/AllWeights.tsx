import { format } from "date-fns";
import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import { useWeights } from "@/hooks/useWeights";
import { useNavigate } from "react-router-dom";
import { LOG_WEIGHT } from "@/routes/routes";
import { WeightResponse } from "@/types/weights";

export const AllWeights = () => {
  const { allWeights } = useWeights();
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-[100vw] overflow-hidden pb-6">
        <header className="flex items-center justify-between p-6 mb-4">
          <div className="flex items-center gap-2">
            <Button
              onClick={() => navigate(LOG_WEIGHT)}
              variant="ghost"
              size="icon"
            >
              <ArrowLeft className="h-6 w-6" />
            </Button>
            <h1 className="text-xl font-semibold">Weight Log</h1>
          </div>
        </header>
        <main className="px-6 space-y-6">
          <section>
            <div className="space-y-4">
              {allWeights?.weights?.map((entry: WeightResponse) => (
                <Card key={entry.id} className="bg-zinc-900 border-zinc-800">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-zinc-400">
                          {format(new Date(entry.date), "MMMM d, yyyy")}
                        </p>
                        <div className="flex items-baseline gap-1 mt-1">
                          <span className="text-xl font-semibold">
                            {entry.value}
                          </span>
                          <span className="text-zinc-400 text-sm">kg</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
