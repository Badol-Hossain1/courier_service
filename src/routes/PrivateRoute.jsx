import { Navigate } from 'react-router'
import useAuth from '../hooks/useAuth'

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    if (loading) {
        return <span className="loading loading-spinner text-info"></span>
    }

    if (!user) {
        ;<Navigate to="/login"></Navigate>
    }
    return children
}

export default PrivateRoute
