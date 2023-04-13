class ApiError extends Error {
    status
    error

    constructor(status, messages) {
        super(messages)

        this.status = status
        this.error = messages
    }

    static badRequest(messages) {
        return new ApiError(400, messages)
    }

    static unknownError(message = "unknown error") {
        return new ApiError(500, message)
    }

    static notFound(message = "") {
        return new ApiError(404, message + " not found")
    }

    static conflict(message){
        return new ApiError(409, message ?? "conflict")
    }
}

export default ApiError
