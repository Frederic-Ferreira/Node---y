import express from "express";
import { postsRoutes } from "./routes/postsRoutes";

const app = express();

const config = (): void => {
  //   app.use(cors());
  //   app.use(morgan("dev"));
  //   app.use(helmet());
  //   app.use(compression());
  app.use(express.json());
  //   app.use(urlencoded({ extended: true }));
};

const routes = (): void => {
  app.use("/api/posts", postsRoutes);
};

config();
routes();

export default app;
