import { useState } from "react";

interface UseMutationState {
  loading: boolean;
  data?: { [key: string]: any };
  error?: any;
}
type UseMutationResult = [(data?: any) => void, UseMutationState];

export default function useMutation(url: string): UseMutationResult {
  const [state, setState] = useState<UseMutationState>({
    loading: false,
    data: undefined,
    error: undefined,
  });
  function mutation(data: any) {
    setState((prev) => ({ ...prev, loading: true }));
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json().catch(() => ({})))
      .then((data) => {
        setState((prev) => ({ ...prev, data }));
      })
      .catch((error) => {
        setState((prev) => ({ ...prev, error }));
      })
      .finally(() => {
        setState((prev) => ({ ...prev, loading: false }));
      });
  }
  return [mutation, { ...state }];
}
