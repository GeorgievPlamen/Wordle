import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";
import Navbar from "../../App/Layout/Navbar";
import { useAppSelector } from "../../App/Store/configureStore";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import agent from "../../App/api/agent";
import { toast } from "react-toastify";

export default function Register() {
  const nav = useNavigate();
  const {
    handleSubmit,
    register,
    setError,
    formState: { isSubmitting, errors, isValid },
  } = useForm({
    mode: "onTouched",
  });
  const languageBg = useAppSelector((state) => state.game.bulgarian);
  const darkMode = useAppSelector((state) => state.game.darkMode);
  const labelColor = darkMode ? "#ddd" : "#121213";

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleApiErrors(errors: any) {
    if (errors) {
      errors.forEach((error: string) => {
        if (error.includes("Password")) {
          setError("password", { message: error });
        } else if (error.includes("Email")) {
          setError("email", { message: error });
        } else if (error.includes("Username")) {
          setError("username", { message: error });
        }
      });
    }
  }

  return (
    <Box
      display={"flex"}
      margin={"80px auto"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Navbar />
      <Card
        sx={{
          minWidth: 275,
          maxWidth: 360,
        }}
      >
        <CardContent>
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {languageBg ? "Регистрация" : "Register"}
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit((data) =>
                agent.Account.register(data)
                  .then(() => {
                    toast.success(
                      languageBg
                        ? "Регистрация успешна"
                        : "Registration successful"
                    );
                    nav("/login");
                  })
                  .catch((error) => {
                    handleApiErrors(error);
                    console.log(error);
                  })
              )}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                fullWidth
                label={languageBg ? "Потребителско име" : "Username"}
                InputLabelProps={{
                  style: { color: labelColor },
                }}
                autoFocus
                {...register("username", {
                  required: languageBg
                    ? "Потребителско име е задължително"
                    : "Username is required",
                })}
                error={!!errors.username}
                helperText={errors.username?.message as string}
              />
              <TextField
                margin="normal"
                fullWidth
                label={languageBg ? "Емайл" : "Email"}
                InputLabelProps={{
                  style: { color: labelColor },
                }}
                {...register("email", {
                  required: languageBg
                    ? "Емейл е задължителен"
                    : "Email is required",
                })}
                error={!!errors.email}
                helperText={errors.email?.message as string}
              />
              <TextField
                margin="normal"
                fullWidth
                label={languageBg ? "Парола" : "Password"}
                InputLabelProps={{
                  style: { color: labelColor },
                }}
                type="password"
                {...register("password", {
                  required: languageBg
                    ? "Парола е задължителна"
                    : "Password is required",
                })}
                error={!!errors.password}
                helperText={errors.password?.message as string}
              />
              <LoadingButton
                loading={isSubmitting}
                disabled={!isValid}
                color="secondary"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {languageBg ? "Продължи" : "Register"}
              </LoadingButton>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Typography textAlign={"end"} color={"textPrimary"}>
                  {languageBg
                    ? "Веше имаш акаунт? Влез"
                    : "Already have an account? Log In"}
                </Typography>
              </Link>
            </Box>
          </Box>
        </CardContent>
      </Card>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
      </Container>
    </Box>
  );
}
