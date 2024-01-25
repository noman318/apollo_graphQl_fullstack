const checkAuthorization = (context: { id: any }) => {
  if (!context.id) {
    throw new Error("Unauthorized");
  }
};
export default checkAuthorization;
