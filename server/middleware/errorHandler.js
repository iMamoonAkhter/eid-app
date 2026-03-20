const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500
  const message = process.env.NODE_ENV === 'production' ? 'An error occurred' : err.message

  console.error(`[Error] ${err.message}`)

  res.status(statusCode).json({
    success: false,
    message: message,
  })
}

export default errorHandler
