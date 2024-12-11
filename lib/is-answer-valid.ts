export const isAnswerValid = (answer?: string) => {
  let valid = true;

  if (answer !== "YES" && answer !== "NO") {
    valid = false;
  }

  return valid;
};
