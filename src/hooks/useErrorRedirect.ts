import { RoutePath } from "App";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export const useErrorRedirect = (isError: boolean) => {
  const navigation = useNavigate()

  useEffect(() => {
    if (isError) navigation(RoutePath.error)
  }, [isError, navigation])
}