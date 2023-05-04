const schema = {
    Tasks: {
      _id: { type: "string", required: true },
      id: { type: "number", required: true },
      taskName: { type: "string", required: true },
      category: { type: "string", required: true },
      dueDate: { type: "string", required: true },
      status: { type: "string", required: true },
      location: { type: "string", required: true },
      description: { type: "string", required: true },
      userId: { type: "string", required: true }
    }
  };
  