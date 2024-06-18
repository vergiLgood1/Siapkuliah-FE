import { useVerifyMutation } from "@/redux/features/auth-api-slice";
import { finishInitialLoad, setAuth } from "@/redux/features/auth-slice";
import { useAppDispatch } from "@/redux/hooks";
import { useEffect } from "react";

export default function useVerify() {
    
  const [verify] = useVerifyMutation();

  const dispatch = useAppDispatch();

  useEffect(() => {
    verify(undefined)
      .unwrap()
      .then(() => {
        dispatch(setAuth());
      })
      .finally(() => {
        dispatch(finishInitialLoad());
      });
  });
}
