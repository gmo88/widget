export default async (__url) => {
  try {
    return await (await fetch(__url)).json();
  } catch (e) {
    throw new Error(e);
  }
};
