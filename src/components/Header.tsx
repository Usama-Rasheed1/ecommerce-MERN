import { useState } from "react"
import { FaSearch, FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"

const user = { _id: "dcs", role:"user"}

const Header = () => {

    const [open, setOpen] = useState<boolean>(false);
    const logoutHandler = ()=>{
        setOpen(false);
        
    }

  return (
    <nav className="header">
        <Link onClick={()=>setOpen(false)} to={"/"}>HOME</Link>
        <Link onClick={()=>setOpen(false)} to={"/search"}> <FaSearch /> </Link>
        <Link onClick={()=>setOpen(false)} to={"/cart"}> <FaShoppingBag /> </Link>
        {
            user?._id?(
                <>
                <button onClick={()=>setOpen(prev => !prev)}>
                    <FaUser />
                </button>
                <dialog open={open}>
                    <div>
                        {
                            user.role === "admin" && (
                                <Link onClick={()=>setOpen(false)} to={"/admin/dashboard"}>Admin</Link>
                            )
                        }
                        <Link onClick={()=>setOpen(false)} to={"/orders"}>Orders</Link>
                        <button onClick={logoutHandler}>
                            <FaSignOutAlt />
                        </button>
                    </div>
                </dialog>
                </>
            ) : (
                <Link to={"/login"}> <FaSignInAlt /> </Link>
            )
        }



    </nav>
  )
}

export default Header