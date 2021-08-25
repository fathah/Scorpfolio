
import MUIDataTable from "mui-datatables";
import { MuiThemeProvider } from '@material-ui/core';


const TokenLists = ({walletToken, starredToken, showDeadtok, tokenAry, data}) => {
  return (
    <div>
    <div className="token-list-section">
      {tokenAry.length > 0 && (
        <div className="row tokenShow">
          <div className="col-8">
            <div className="d-flex row-1 accordn-button">
              <div class="btn-group col-9">
                <button
                  onClick={() => walletToken()}
                  type="button"
                  className="token-show  btn-primary"
                >
                  All Token
                </button>
                <button
                  onClick={() => starredToken()}
                  type="button"
                  className="token-show  btn-primary"
                >
                  Selected Token
                </button>
                <button
                  onClick={() => showDeadtok()}
                  type="button"
                  className="token-show  btn-primary"
                >
                  Dead Token
                </button>
              </div>
            </div>
            <div className="row-8">
              <MuiThemeProvider theme={data.muitheme}>
                <MUIDataTable
                  title={"BNB/" + data.bnbPrice}
                  data={data.datatable}
                  columns={data.columns}
                  options={data.options}
                />
              </MuiThemeProvider>
            </div>
          </div>
          <div className="col-4 detail-token">
            {data.showtokenFlag ? (
              <div className="row showdetail-block">
                <div className="row detailbackground">
                  <span className="p-1 tokenTitle">
                    {data.detailToken.name +
                      eval(
                        (data.detailToken.price * data.detailToken.balance).toFixed(4)
                      ) +
                      "$"}
                  </span>
                  <div className="data col-6 leftInside">
                    <div class="data-row">
                      <span className="p-1">{"Value of asset "}</span>
                    </div>
                    <div class="data-row">
                      <span className="p-1">{"Price"}</span>
                    </div>
                    <div class="data-row">
                      <span className="p-1">{"Current amount"}</span>
                    </div>
                    <div class="data-row">
                      <span className="p-1">{"Transactions amount in"}</span>
                    </div>
                    <div class="data-row">
                      <span className="p-1">{"Transactions amount out"}</span>
                    </div>
                    <div class="data-row">
                      <span className="p-1">{"Reflection gain"}</span>
                    </div>
                    <div class="data-row">
                      <span className="p-1">{"Value without reflection"}</span>
                    </div>
                    <div class="data-row">
                      <span className="p-1">{"Value from reflection"}</span>
                    </div>
                    <div class="data-row">
                      <span className="p-1">{"Invested"}</span>
                    </div>
                    <div class="data-row">
                      <span className="p-1">{"PayedOut"}</span>
                    </div>
                    <div class="data-row">
                      <span className="p-1">{"Result"}</span>
                    </div>
                    <div class="data-row">
                      <span className="p-1">{"Liquid pools:"}</span>
                    </div>
                  </div>
                  <div className="data col-6 rightInside">
                    <div class="data-row">
                      <span className="p-1">
                        {eval(
                          (data.detailToken.price * data.detailToken.balance).toFixed(4)
                        ) + "$"}
                      </span>
                    </div>
                    <div class="data-row">
                      <span className="p-1">{data.detailToken.price + "$"}</span>
                    </div>
                    <div class="data-row">
                      <span className="p-1">{data.detailToken.balance}</span>
                    </div>
                    <div class="data-row">
                      <span className="p-1">{data.detailToken.amountIn}</span>
                    </div>
                    <div class="data-row">
                      <span className="p-1">{data.detailToken.amountOut}</span>
                    </div>
                    <div class="data-row">
                      <span className="p-1">{data.detailToken.rflectGain}</span>
                    </div>
                    {data.detailToken.rflectGain < data.detailToken.balance ? (
                      <div class="data-row">
                        <span className="p-1">
                          {eval(
                            (
                              data.detailToken.price * data.detailToken.balance -
                              data.detailToken.rflectGain * data.detailToken.price
                            ).toFixed(4)
                          ) + "$"}
                        </span>
                      </div>
                    ) : (
                      <div class="data-row">
                        <span className="p-1">
                          {eval(
                            (data.detailToken.price * data.detailToken.balance).toFixed(4)
                          ) + "$"}
                        </span>
                      </div>
                    )}
                    {data.detailToken.rflectGain < data.detailToken.balance ? (
                      <div class="data-row">
                        <span className="p-1">
                          {eval(
                            (
                              data.detailToken.rflectGain * data.detailToken.price
                            ).toFixed(4)
                          ) + "$"}
                        </span>
                      </div>
                    ) : (
                      <div class="data-row">
                        <span className="p-1">{"0$"}</span>
                      </div>
                    )}
                    <div class="data-row">
                      <span className="p-1">{data.detailToken.invest + "$"}</span>
                    </div>
                    <div class="data-row">
                      <span className="p-1">{data.detailToken.payout + "$"}</span>
                    </div>
                    <div class="data-row">
                      <span className="p-1">
                        {eval(
                          (
                            data.detailToken.payout +
                            data.detailToken.price * data.detailToken.balance -
                            data.detailToken.invest
                          ).toFixed(4)
                        ) + "$"}
                      </span>
                    </div>
                    <div class="data-row">
                      <span className="p-1">{"V2"}</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      )}
    </div>
   {
       tokenAry.length>0?(
        <footer>
        Scorpion Finance { new Date().getFullYear() }
    </footer>
       ):(<></>)
   }
    </div>
  );
};

export default TokenLists;
