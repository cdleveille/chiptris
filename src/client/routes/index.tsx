import { createFileRoute } from "@tanstack/react-router";

import { Home } from "@/client/components/Home";

export const Route = createFileRoute("/")({
  component: Home,
  loader: async () => {
    return null;
  },
});
