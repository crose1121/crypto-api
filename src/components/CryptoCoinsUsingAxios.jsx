import React, {useState} from 'react';

const CryptoCoinsUsingAxios = () => {
    const [coinList,setCoinList] = useState([])

    const getCoins = () => {
        console.log("Getting coins")
        // fetch is a function that accepts an API endpoint and returns a promise. 
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then(response=>{
                console.log("Got info back from API, here is the response")
                return response.json();
            })
            .then(response=> {
                console.log("This is the JSON formatted response",response)
                setCoinList(response)
            })
            .catch(err=> {
                console.log("Error! ---->", err)
            })
    
        // console.log("This log is after the fetch promise, but will it run before fetch gets a response back?")

        
    }




    return (
        <>
            <h3>Crypto Coins!</h3>
            <p><button onClick={getCoins}>Click to get crypto coins!</button></p>

            {
                coinList.map((coinObj,i) => {
                    return (
                        <div key={i}>
                            <h3>{coinObj.name}</h3>
                            <p>Current Price: {coinObj.current_price}</p>
                            <img src={coinObj.image} alt="" />
                            <p>Market Cap: {coinObj.market_cap}</p>
                        </div>
                    )
                })
            }
            <p></p>

        </>
    )
}

export default CryptoCoinsUsingAxios;