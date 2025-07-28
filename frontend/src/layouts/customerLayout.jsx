import { Outlet } from 'react-router-dom'
import Header from '../utils/customer/header'
import Footer from '../utils/customer/footer'

export default function(){
    return(
        <>
         
            <Header/>
            <Outlet/>
            <Footer/>
         
        </>
    )

}