import clientTypeDefs from "../client/clientTypeDefs";
import projectTypeDefs from "../project/projectTypeDefs";
import userTypeDefs from "../user/userTypeDefs";

const typeDefs = `#graphql
  ${userTypeDefs}
  ${projectTypeDefs}
  ${clientTypeDefs}
`;
// console.log("typeDefs", typeDefs);
export default typeDefs;
