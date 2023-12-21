import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function ForgetPasswordPage() {
    return (
        <div className="text-center m-5-auto">
            <h2>Resetar password</h2>
            <h5>Inserir Email</h5>
            <form action="/login">
                <p>
                    <label id="reset_pass_lbl">Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Resetar</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Criar conta</Link>.</p>
                <p><Link to="/">Voltar</Link>.</p>
            </footer>
        </div>
    )
}
