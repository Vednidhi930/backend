const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    console.log(req.body)
    req.body = parseBody;
    next();
  } catch (err) {

    const errorMSg = err.errors[0].message;
    res.status(400).json({ msg: errorMSg });
    
  }
};

module.exports = validate;
