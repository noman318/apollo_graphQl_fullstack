import projectTypeDefs from "../project/projectTypeDefs";
import userTypeDefs from "../user/userTypeDefs";

const typeDefs = `#graphql
  ${userTypeDefs}
  ${projectTypeDefs}
`;
// console.log("typeDefs", typeDefs);
export default typeDefs;
