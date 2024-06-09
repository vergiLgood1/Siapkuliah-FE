
import { ChangeEvent, FormEvent, useState } from "react";
import { useRegisterMutation } from "@/redux/features/auth-api-slice";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function useRegister() {

const [loadingButton, setLoadingButton] = useState<string | null>(null);

  const router = useRouter();
  const [register, { isLoading }] = useRegisterMutation();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    re_password: "",
  });

  const { first_name, last_name, email, password, re_password } = formData;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    register({ first_name, last_name, email, password, re_password })
      .unwrap()
      .then(() => {
        toast.success("Please check email to verify account");
        router.push("/auth/login");
      })
      .catch(() => {
        toast.error("Failed to register");
      });
  };

  const handleButtonClick = (button: string) => {
    setLoadingButton(button);
  };

  return {
    first_name, 
    last_name, 
    email, 
    password, 
    re_password,
    isLoading,
    onChange,
    onSubmit
  }

}
