import logo from '../../../assets/delivery-man.png'
const Logo = ({ width, height }) => {
    return (
        <div>
            <img className={`${width} ${height}`} src={logo} alt="" />
        </div>
    )
}

export default Logo
