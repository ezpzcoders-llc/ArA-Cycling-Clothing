const ErrorPage = ({ code }: { code: string | number }) => {
    return <div>{`A ${code} error has occured.`}</div>
}

export default ErrorPage
