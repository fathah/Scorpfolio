import Chart from './Charts';

const WalletDetails = ({tokenAry, theme, optionValue,Highcharts, walletData: data  }) => {
    return (
        <div>
             {
                            tokenAry.length > 0 ?
                                <div className="row">
                                    <div className="row">
                                        <div className="col-5 wallet-box ">
                                            <div id={theme} className="d-flex row-5  wallet-info-2">
                                                <div className="d-flex row wallet-background">
                                                <h3>Wallet Details</h3>
                                                    <div className="data col-7 leftTotal" >
                                                        
                                                        <div class="data-row">
                                                            <span className="p-1 list-key">{"Wallet value"}</span>
                                                        </div>
                                                        <div class="data-row">
                                                            <span  className="p-1 list-key">{"Number of assets "}</span>
                                                        </div>
                                                        <div class="data-row">
                                                            <span className="p-1 list-key">{"Dead tokens"}</span>
                                                        </div>
                                                        <div class="data-row">
                                                            <span  className="p-1 list-key">{"Wallet value from transactions"}</span>
                                                        </div>
                                                        <div class="data-row">
                                                            <span className="p-1 list-key">{"Earnings from reflection"}</span>
                                                        </div>
                                                        <div class="data-row">
                                                            <span  className="p-1 list-key">{"Total invested"}</span>
                                                        </div>
                                                        <div class="data-row">
                                                            <span className="p-1 list-key">{"Total payed out"}</span>
                                                        </div>
                                                        <div class="data-row">
                                                            <span  className="p-1 list-key">{"Wallet result"}</span>
                                                        </div>
                                                        <div class="data-row">
                                                            <span className="p-1 list-key-date"> {data.date} </span>
                                                        </div>
                                                    </div>
                                                    <div className="data col-5 rightTotal" >
                                                        <div class="data-row">
                                                            <span className="p-1">{eval(data.walletValue) + "$"}</span>
                                                        </div>
                                                        <div class="data-row">
                                                            <span  className="p-1">{tokenAry.length - data.deadtokenCount}</span>
                                                        </div>
                                                        <div class="data-row">
                                                            <span className="p-1">{data.deadtokenCount}</span>
                                                        </div>
                                                        <div class="data-row">
                                                            <span  className="p-1">{eval((data.wfTransaction).toFixed(4)) + "$"}</span>
                                                        </div>
                                                        <div class="data-row">
                                                            <span className="p-1">{data.earnFlection + "$"}</span>
                                                        </div>
                                                        <div class="data-row">
                                                            <span  className="p-1">{data.totalInvest + "$"}</span>
                                                        </div>
                                                        <div class="data-row">
                                                            <span className="p-1">{data.totalPayout + "$"}</span>
                                                        </div>
                                                        <div class="data-row">
                                                            <span  className="p-1">{eval((data.walletValue + data.totalPayout - data.totalInvest).toFixed(4)) + "$"}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row-7">
                                            </div>
                                        </div>
                                        <div className="col-6 chartTotal">
                                            <Chart options={optionValue} highcharts={Highcharts} />
                                        </div>
                                    </div>
                                </div> : <></>
                        }
        </div>
    );
}
 
export default WalletDetails;