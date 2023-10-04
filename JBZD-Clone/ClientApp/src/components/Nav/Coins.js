import coinLogo from "../../../public/Images/Coins/coin.png";

export const Coins = ({coins = 0}) => {


    return (
        <div className="coins my-auto ms-2">
            <img src={coinLogo} alt="" width="21px" height="21px" />
            <b> {coins} </b>
        </div>
    )

}