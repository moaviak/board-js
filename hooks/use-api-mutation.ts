import { useState } from "react";
import { useMutation } from "convex/react";

export const useApiMutation = (mutationFn: any) => {
  const [isPending, setIsPending] = useState(false);
  const apiMutation = useMutation(mutationFn);

  const mutate = (payload: any) => {
    setIsPending(true);
    return apiMutation(payload)
      .finally(() => setIsPending(false))
      .then((result) => {
        return result;
      })
      .catch((error) => {
        throw error;
      });
  };

  return {
    mutate,
    isPending,
  };
};
