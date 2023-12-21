import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function SignUpPage() {

    return (
        <div className="text-center m-5-auto">
            <h2>#</h2>
            <h5>Criar conta</h5>
            <form action="/home">
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>email</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" requiredc />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>#<a href="https://google.com" target="_blank" rel="noopener noreferrer"></a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Registar</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Voltar</Link>.</p>
            </footer>
        </div>
    )

}
