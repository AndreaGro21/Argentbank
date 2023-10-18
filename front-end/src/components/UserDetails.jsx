
export default function UserDetails({ title, x, amount, balance }) {

    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank {title} ({x})</h3>
                <p className="account-amount">{amount}</p>
                <p className="account-amount-description">{balance} Balance</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>
    )


}