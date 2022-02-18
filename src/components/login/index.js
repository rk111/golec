export const Login=()=> {

 return (
   <>
        <header class="account-header">
            <div class="container-fluid">
                <div class="logo">
                    <img src="images/white-logo.png" alt="" />
                </div>
            </div>
        </header>
        <div class="container-fluid">

        <div class="login-bg">
            <div class="login-box-container">
                <div class="login-heading">
                    <h1>Login</h1>
                    <form>

                        <button type="submit" class="wallet-btn">
                            <img src="images/btn.png" alt=""/> Connect your Tronlink
                            wallet</button>

                        <div class="sing-up">
                            <a href="sign-up.html">Or signup</a>
                        </div>

                        <div class="field-box mb-3">
                            <input type="text" placeholder="Username" required="" />
                        </div>
                        <div class="field-box mb-5">
                            <input type="text" placeholder="Referral ID" required="" />
                        </div>

                        <button type="submit" class="wallet-btn">
                            <img src="images/btn.png" alt="" /> 
                            Connect your Tronlink wallet</button>


                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
    )

}