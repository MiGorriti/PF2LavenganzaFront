import React from 'react'

export const FormUser = () => {
  return (
    <div class='bg-blue-500 flex h-96'>
      <div class='w-6/12 h-full flex justify-center items-center'  >
        <img class='h-80 w-96' src="/imagenes/c1.jpg" alt="name" />
      </div>
      <div class='flex justify-center items-center'>
        <section>
        <p>Logo</p>
        </section>
        <section>
          <input type="text" name="email" id="email" placeholder='Email'/>
          <input type="text" name="password" id="password" placeholder='Password'/>
          <button>
            Login
          </button>
            <p>Forgot Password?</p>
       </section>
      </div>
    </div>
  )
}
