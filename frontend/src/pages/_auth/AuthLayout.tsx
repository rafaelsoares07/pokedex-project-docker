import { Outlet, Navigate } from 'react-router-dom'

export const AuthLayout = () => {

    const isAutheticated = false;


  return (
    <>
        {isAutheticated ? (
            <Navigate to="/"/>
        ):(
            <>
            {/* "flex flex-1 justify-center items-center flex-col py-10" */}
                <section className='flex h-screen justify-center items-center py-10 ' style={{backgroundImage:`url("https://i.ebayimg.com/images/g/BMMAAOSwb0xigriF/s-l1200.webp")`}}>
                    <div className='bg-gradient-to-r from-blue-300 to-purple-500 '>
                        <div className='bg-white bg-opacity-50 rounded-lg shadow-lg backdrop-blur-xl backdrop-filter border-2 border-slate-900 rounded-lg '>
                            <Outlet/>
                        </div>
                    </div>
                </section>
            </>
        )}
    </>
  )
}