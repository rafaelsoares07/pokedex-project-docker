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
                <section className='flex h-screen justify-center items-center py-10'>
                    <div className='flex-1 m-5'>
                        <div className='border-2 border-slate-900 rounded-lg'>
                            <Outlet/>
                        </div>
                    </div>
                    <img src="https://i.ebayimg.com/images/g/BMMAAOSwb0xigriF/s-l1200.webp"
                    className="bg-yellow-400 hidden flex-1 lg:block h-screen lg:w-1/2 object-cover bg-no-repeat " 
                     />
                </section>
            </>
        )}
    </>
  )
}