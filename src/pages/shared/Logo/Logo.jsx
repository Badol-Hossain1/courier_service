import { Link } from 'react-router'
import logo from '../../../assets/Vector.png'
const Logo = ({ width, height }) => {
    return (
        <Link
            to="/"
            className="inline-flex items-end  hover:opacity-80 transition"
        >
            <img src={logo} alt="Logo" className={`${width} ${height}`} />
            <h1 className="font-bold">Courierrr</h1>
        </Link>
    )
}

export default Logo
