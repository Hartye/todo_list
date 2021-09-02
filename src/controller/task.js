const Data = require("../model/data");

module.exports = {
  dashboardGet(req, res) {
    const data = Data.get();
    return res.render("index", { data });
  },

  dashboardPost(req, res) {
    const data = Data.get();

    if (req.body.description == "") {
      return res.render("index", { data });
    }

    const taskId = data[data.length - 1]?.id || 0;

    data.push({
      id: taskId + 1,
      ...req.body,
    });

    return res.render("index", { data });
  },

  commentGet(req, res) {
    let data = Data.get();
    const id = req.params.id;

    const verifyId = data.find((e) => Number(e.id) === Number(id));

    if (!verifyId) {
      return res.redirect("/");
    }

    return res.render("comment", { data: data[id - 1] });
  },

  commentPost(req, res) {
    let data = Data.get();
    const id = req.params.id;

    const verifyId = data.find((e) => Number(e.id) === Number(id));

    if (!verifyId) {
      return res.redirect("/");
    }

    const updateTask = {
      ...data[id - 1],
      comment: req.body.comment,
      description: req.body.description,
    };

    const update = data.map((task) => {
      if (Number(task.id) === Number(id)) {
        task = updateTask;
      }

      return task;
    });

    Data.push(update);
    return res.render("comment", { data: Data.get()[id - 1] });
  },

  deleteGet(req, res) {
    let data = Data.get();
    const id = req.params.id;

    Data.delete(id);
    return res.redirect("/");
  },
};
