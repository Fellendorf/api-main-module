export const mongoUtils = {
  getMongoUrl(env: NodeJS.ProcessEnv) {
    const {
      MONGO_USER,
      MONGO_PASSWORD,
      MONGO_HOST,
      MONGO_PORT,
      MONGO_DATABASE,
    } = env;
    return `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`;
  },
};
