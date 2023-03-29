import express from "express";
import { testRoute } from "./routes/testRoute";

const app = express();

app.use("/api/test", testRoute);

// const config = (): void => {
//   app.use(cors());
//   app.use(morgan("dev"));
//   app.use(helmet());
//   app.use(compression());
//   app.use(json());
//   app.use(urlencoded({ extended: true }));
// };

// const routes = (): void => {
//   app.use("/api/users", userRoutes);
// };

// config();
// routes();

export default app;
