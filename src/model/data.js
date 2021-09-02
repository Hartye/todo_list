let data = [];

module.exports = {
  get() {
    return data;
  },

  push(content) {
    data = content;
  },

  delete(id) {
    data = data.filter((e) => Number(e.id) !== Number(id));
    data.forEach((e) => {
      if (Number(e.id) > Number(id)) {
        e--;
      }
    });
  },
};
