const getUUID = () => new Date().getUTCMilliseconds();

export const getArticles = () => ({
  type: "START_FETCH_EXAMPLE",
  payload: getUUID(),
  meta: {
    retry: true,
  },
});

export const subOne = () => ({
  type: "SUB_ONE",
  payload: getUUID(),
  meta: {
    retry: true,
  },
});

export const other = () => ({
  type: "OTHER",
  meta: {
    retry: true,
    dismiss: ["CANCEL_OTHER"],
  },
});

export const cancelOther = () => ({
  type: "CANCEL_OTHER",
});
