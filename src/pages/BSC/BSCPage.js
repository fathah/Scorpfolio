import React, { useEffect, useState } from 'react';
import { Form, FormControl, Accordion, Card } from 'react-bootstrap';
import { ThemeContext } from '../../contexts/ThemeContext';
import Web3 from 'web3';
import star1 from '../../assets/images/star1.png'
import star2 from '../../assets/images/star2.png'
import './style.scss';
import './custom.scss';

import './spinner.css';
// import tokenABI from '../../utils/sources/abi.json'
import defaultAddress from '../../utils/sources/pancakeswap7.json'
import noimg from '../../assets/images/noimage.png'
import highcharts3d from 'highcharts/highcharts-3d'

import Chart from '../../components/Charts';

// Import Highcharts
import Highcharts, { chart } from 'highcharts/highstock';

// import { ethers } from 'ethers';
// import pancakeFactory from "../../utils/sources/pancake_factory.json";
// import pancakePair from "../../utils/sources/pancakepair.json";
// import { Button } from 'bootstrap';
import logo from '../../assets/images/Ragnify.png'
import { createTheme } from '@material-ui/core/styles'
import MUIDataTable from "mui-datatables";
import { MuiThemeProvider } from '@material-ui/core';
// import { IconButton } from "@material-ui/core";
// import { Edit } from "@material-ui/icons";
// Load Highcharts modules
var fs = require('fs');
require('highcharts/indicators/indicators')(Highcharts);
require('highcharts/indicators/pivot-points')(Highcharts);
require('highcharts/indicators/macd')(Highcharts);
require('highcharts/modules/exporting')(Highcharts);
require('highcharts/modules/map')(Highcharts);
// let urlprice = 'https://bsc-dataseed1.binance.org';
// let provider = new ethers.providers.JsonRpcProvider(urlprice);
// const pancakeFactoryAddress = "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73"
const BUSD = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56';
const USDT = '0x55d398326f99059ff775485246999027b3197955';
// const pancake = new ethers.Contract(pancakeFactoryAddress, pancakeFactory, provider);
const web3 = new Web3(new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org'));
const router_address = "0x10ED43C718714eb63d5aA57B78B54704E256024E"
const WBNB = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
const router_abi = [{ "inputs": [{ "internalType": "address", "name": "_factory", "type": "address" }, { "internalType": "address", "name": "_WETH", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "WETH", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "tokenA", "type": "address" }, { "internalType": "address", "name": "tokenB", "type": "address" }, { "internalType": "uint256", "name": "amountADesired", "type": "uint256" }, { "internalType": "uint256", "name": "amountBDesired", "type": "uint256" }, { "internalType": "uint256", "name": "amountAMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountBMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "addLiquidity", "outputs": [{ "internalType": "uint256", "name": "amountA", "type": "uint256" }, { "internalType": "uint256", "name": "amountB", "type": "uint256" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "amountTokenDesired", "type": "uint256" }, { "internalType": "uint256", "name": "amountTokenMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountETHMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "addLiquidityETH", "outputs": [{ "internalType": "uint256", "name": "amountToken", "type": "uint256" }, { "internalType": "uint256", "name": "amountETH", "type": "uint256" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "factory", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "uint256", "name": "reserveIn", "type": "uint256" }, { "internalType": "uint256", "name": "reserveOut", "type": "uint256" }], "name": "getAmountIn", "outputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "reserveIn", "type": "uint256" }, { "internalType": "uint256", "name": "reserveOut", "type": "uint256" }], "name": "getAmountOut", "outputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }], "name": "getAmountsIn", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }], "name": "getAmountsOut", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountA", "type": "uint256" }, { "internalType": "uint256", "name": "reserveA", "type": "uint256" }, { "internalType": "uint256", "name": "reserveB", "type": "uint256" }], "name": "quote", "outputs": [{ "internalType": "uint256", "name": "amountB", "type": "uint256" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "tokenA", "type": "address" }, { "internalType": "address", "name": "tokenB", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountAMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountBMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "removeLiquidity", "outputs": [{ "internalType": "uint256", "name": "amountA", "type": "uint256" }, { "internalType": "uint256", "name": "amountB", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountTokenMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountETHMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "removeLiquidityETH", "outputs": [{ "internalType": "uint256", "name": "amountToken", "type": "uint256" }, { "internalType": "uint256", "name": "amountETH", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountTokenMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountETHMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "removeLiquidityETHSupportingFeeOnTransferTokens", "outputs": [{ "internalType": "uint256", "name": "amountETH", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountTokenMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountETHMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "bool", "name": "approveMax", "type": "bool" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "removeLiquidityETHWithPermit", "outputs": [{ "internalType": "uint256", "name": "amountToken", "type": "uint256" }, { "internalType": "uint256", "name": "amountETH", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountTokenMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountETHMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "bool", "name": "approveMax", "type": "bool" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens", "outputs": [{ "internalType": "uint256", "name": "amountETH", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "tokenA", "type": "address" }, { "internalType": "address", "name": "tokenB", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountAMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountBMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "bool", "name": "approveMax", "type": "bool" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "removeLiquidityWithPermit", "outputs": [{ "internalType": "uint256", "name": "amountA", "type": "uint256" }, { "internalType": "uint256", "name": "amountB", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapETHForExactTokens", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactETHForTokens", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactETHForTokensSupportingFeeOnTransferTokens", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactTokensForETH", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactTokensForETHSupportingFeeOnTransferTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactTokensForTokens", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactTokensForTokensSupportingFeeOnTransferTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "uint256", "name": "amountInMax", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapTokensForExactETH", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "uint256", "name": "amountInMax", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapTokensForExactTokens", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }]
const router_contract = new web3.eth.Contract(router_abi, router_address)
highcharts3d(Highcharts);
var chartOptions = {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45
        }
    },
    title: {
        text: "Contents of Highsoft's weekly fruit delivery"
    },
    subtitle: {
        text: '3D donut in Highcharts'
    },
    plotOptions: {
        pie: {
            innerSize: 100,
            depth: 45
        }
    },
    series: [
        {
            name: 'Token Value',
            data:
                []
        }
    ]
};
export default function BSCPage(props) {
    const [tokenAry, setAllTokens] = useState([]);
    const [currentToken, setCurrentToken] = useState([]);
    const [currentTokenname, setCurrentTokenName] = useState([]);
    const [curAddress, setAddress] = useState('');
    const [isLoading, toggleLoading] = useState(false);
    const [walletValue, sumValue] = useState();
    const [ProcessingValue, assetsValue] = useState(0);
    const [optionValue, setOptions] = useState(chartOptions);
    const [bnbPrice, setbnbPrice] = useState(0);
    const [totalInvest, setTotalinvest] = useState(0);
    const [totalPayout, setTotalpayout] = useState(0);
    const [date, setDate] = useState('');
    const [earnFlection, setEarn] = useState(0);
    const [wfTransaction, setWftransaction] = useState(0);
    const [deadtokenCount, setDeattoken] = useState(0);
    const [deadtokenAry, setDeadAry] = useState([]);
    const [showtoken, setshowtoken] = useState(2);
    const [addressList, setAddresslist] = useState(['Address List', '0x71e2153fc76d57c7bc4E741118698bEE6BD93004'])
    const [curAddresslist, setcurAddresslist] = useState('Address List');
    const [detailToken, setdetailToken] = useState([]);
    const [showtokenFlag, setshowtokenFlag] = useState(false);
    const [datatable, setdatatable] = useState([]);
    var tokenAddress = [];
    const columns = [
        {
            name: "star",
            label: "Star",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value, tableMeta) => {
                    return (
                        <>
                            <img style={{ width: '20%' }} src={value === 0 ? star1 : star2} />
                        </>
                    );
                }
            }
        },
        {
            name: "img",
            label: "Img",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value, tableMeta) => {
                    return (
                        <>
                            {value != 'no' ? <img id="logo" src={value} style={{ width: '25%' }} /> :
                                <img id="logo" src={noimg} style={{ width: '25%' }} />}
                        </>
                    );
                }
            }
        },
        {
            name: "name",
            label: "Name",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Price",
            label: "Price",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Holdings",
            label: "Holdings",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Value",
            label: "Value",
            options: {
                filter: true,
                sort: true,
            }
        },
    ];
    const data = [
        { star: 0, img: noimg, name: "Joe James", Price: "Test Corp", Holdings: "Yonkers", Value: "NY" },
        { star: 0, img: noimg, name: "John Walsh", Price: "Test Corp", Holdings: "Hartford", Value: "CT" },
        { star: 0, img: noimg, name: "Bob Herm", Price: "Test Corp", Holdings: "Tampa", Value: "FL" },
        { star: 0, img: noimg, name: "James Houston", Price: "Test Corp", Holdings: "Dallas", Value: "TX" },
    ];
    const muitheme = createTheme({
        palette: { type: 'dark' },
        typography: { useNextVariants: true },
    });
    const options = {
        filter: true,
        filterType: 'checkbox',
        responsive: 'vertical',
        selectableRowsHideCheckboxes: true,
        onCellClick: (cellData, cellMeta) => {
            if (cellMeta.colIndex == 0) {
                onchangeIcon(cellMeta.dataIndex)
            } else {
                showtokenDetail(cellMeta.dataIndex);
            }
        },
        rowsPerPage: 8,
        rowsPerPageOptions: [8, 16, 24, 32, 40],
        jumpToPage: true,
    };
    function onChangeAddressInput(e) {
        if (!isLoading) {
            setAllTokens([]);
            setAddress(e.target.value);
            toggleLoading(true);
        }
    }
    function showtokenDetail(key) {
        for (var k = 0; k < tokenAry.length; k++) {
            if (tokenAry[k].name == datatable[key].name) {
                setdetailToken(tokenAry[k]);
            }
        }
        setshowtokenFlag(true);
    }
    function changeico(key) {
        var tabledata = [];
        for (var k = 0; k < tokenAry.length; k++) {
            if (tokenAry[k].types != key && tokenAry[k].deadtoks != key) {
                tabledata.push({ star: tokenAry[k].types, img: tokenAry[k].icons, name: tokenAry[k].name, Price: tokenAry[k].price, Holdings: tokenAry[k].balance, Value: tokenAry[k].price * tokenAry[k].balance });
            }
        }
        setdatatable(tabledata);
    }
    function walletToken() {
        if (!isLoading) {
            setshowtoken(2);
            changeico(2);
        }
    }
    function starredToken() {
        if (!isLoading) {
            setshowtoken(1);
            changeico(1);
        }
    }
    function showDeadtok() {
        if (!isLoading) {
            setshowtoken(4);
            changeico(4);
        }
    }
    function onreloading() {
        window.location.reload();
    }
    function onaddAddress() {
        if (tokenAry.length > 0) {
            for (var i = 0; i < addressList.length; i++) {
                if (curAddress.toLowerCase() == addressList[i].toLowerCase()) {
                    return;
                }
            }
            var addlist = [];
            if (addressList.length > 6) {
                addlist[5] = addressList[4];
                addlist[4] = addressList[3];
                addlist[3] = addressList[2];
                addlist[2] = addressList[1];
                addlist[1] = curAddress;
                addlist[0] = 'Address List';
            } else {
                addlist = addressList;
                addlist.push(curAddress);
            }
            setAddresslist(addlist);
            localStorage.clear();
            localStorage.setItem("ourarraykey", JSON.stringify(addlist));
        }
    }
    function onchangeIcon(key) {
        var i = 0;
        var tokenIcon = [];
        var curtokenName = [];
        var farentOption = [];
        if (datatable[key].star == 0) {
            datatable[key].star = 1;
        } else {
            datatable[key].star = 0;
        }
        for (i = 0; i < tokenAry.length; i++) {
            if (tokenAry[i].name == datatable[key].name) {
                tokenAry[i].types = datatable[key].star;
            }
        }
        for (i = 0; i < tokenAry.length; i++) {
            var childOption = [];
            if (tokenAry[i].types == 0 && tokenAry[i].balance * tokenAry[i].price != 0) {
                childOption = [tokenAry[i].currentName, tokenAry[i].balance * tokenAry[i].price];
                farentOption.push(childOption);
            }
            tokenIcon[i] = tokenAry[i].types
            curtokenName[i] = tokenAry[i].currentName;
        }
        setOptions({
            ...chartOptions, series: [{
                name: 'Token Value',
                data: farentOption
            }]
        }
        );
        setCurrentToken(tokenIcon);
        setCurrentTokenName(curtokenName);
        setAllTokens(tokenAry);
        changeico(showtoken);
    }
    function onchangeList(val) {
        if (!isLoading && val != 'Address List') {
            setAllTokens([]);
            setAddress(val);
            setcurAddresslist(val);
            toggleLoading(true);
        }
    }
    // function onKeyUp(event) {
    //     if (event.charCode === 13) {
    //         onChangeAddressInput(event);
    //     }
    // }
    useEffect(async () => {
        var storedArray = localStorage.getItem("ourarraykey");
        var ourArray = JSON.parse(storedArray);
        if (ourArray) {
            setAddresslist(ourArray);
        }
        var allTokens = [];
        var deadTokens = [];
        var sumToken = 0;
        var farentOption = [];
        var totalInv = 0;
        var totalPay = 0;
        var earningsReflection = 0;
        var wfTran = 0;
        var deatCount = 0;
        if (!curAddress && curAddress == '') {
            toggleLoading(false);
            return;
        }
        var bnbpriceArray = 0;
        var bnbUrl1 = `https://api.bscscan.com/api?module=stats&action=bnbprice&apikey=1WN7M3DNF6QMEIC9AATVQ2BR5SN4VKJBM7`;
        tokenAddress = [];
        var Tokenurl = `https://api.bscscan.com/api?module=account&action=addresstokenbalance&address=${curAddress}&page=1&offset=100&apikey=1WN7M3DNF6QMEIC9AATVQ2BR5SN4VKJBM7`;
        await fetch(Tokenurl).then(response => response.json())
            .then(data => {
                if (data.status == 0) {
                    toggleLoading(false);
                    return;
                }
                tokenAddress = data.result;
            });
        console.log(tokenAddress);
        await fetch(bnbUrl1).then(response => response.json())
            .then(data => {
                bnbpriceArray = data.result.ethusd;
            });
        bnbpriceArray = parseFloat(bnbpriceArray);
        setbnbPrice(bnbpriceArray);
        for (var i = 0; i < tokenAddress.length; i++) {
            if (tokenAddress[i].TokenName.toLowerCase().includes('io') || tokenAddress[i].TokenAddress == '0xd22202d23fe7de9e3dbe11a2a88f42f4cb9507cf' || tokenAddress[i].TokenAddress == '0xb16600c510b0f323dee2cb212924d90e58864421' || tokenAddress[i].TokenAddress == '0x5190b01965b6e3d786706fd4a999978626c19880' || tokenAddress[i].TokenAddress == '0x0df62d2cd80591798721ddc93001afe868c367ff') {
                continue;
            }
            var tokenType = 0;
            var today = new Date().toLocaleString();
            setDate(today);
            try {
                try {
                    var priceArray = await router_contract.methods.getAmountsOut(1000000000000000, [tokenAddress[i].TokenAddress, WBNB]).call();
                    var singlePrice = parseInt(priceArray[1]) / 1000000000000000;
                    singlePrice = singlePrice * bnbpriceArray;
                    singlePrice = singlePrice * Math.pow(10, (tokenAddress[i].TokenDivisor - 18));
                } catch (e) {
                    singlePrice = 0;
                    if (tokenAddress[i].TokenAddress.toLowerCase() == "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c") {
                        singlePrice = bnbpriceArray;
                    }
                    else {
                        deatCount++;
                        setDeattoken(deatCount);
                        deadTokens.push({ name: tokenAddress[i].TokenName });
                        setDeadAry(deadTokens);
                        tokenType = 1;
                    }
                }
                // if (tokenType != 1) {
                //     try {
                //         await router_contract.methods.getAmountsOut(1000000000000000, [tokenAddress[i].TokenAddress, BUSD]).call();
                //     } catch (e) {
                //         try {
                //             await router_contract.methods.getAmountsOut(1000000000000000, [tokenAddress[i].TokenAddress, USDT]).call();
                //         } catch (e) {
                //             if (tokenAddress[i].TokenAddress.toLowerCase() != "0x55d398326f99059ff775485246999027b3197955" && tokenAddress[i].TokenAddress.toLowerCase() != "0xe9e7cea3dedca5984780bafc599bd69add087d56") {
                //                 singlePrice = 0;
                //                 deatCount++;
                //                 setDeattoken(deatCount);
                //                 deadTokens.push({ name: tokenAddress[i].TokenName });
                //                 setDeadAry(deadTokens);
                //                 tokenType = 1;
                //             }
                //         }
                //     }
                // }

                var childOption = [];
                var tokenName = tokenAddress[i].TokenName;
                var tokenLogo = '';
                tokenLogo = await findLogo(tokenAddress[i].TokenAddress, defaultAddress);
                //ctoken value API
                //https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x8597ba143ac509189e89aab3ba28d661a5dd9830&address=0x71e2153fc76d57c7bc4E741118698bEE6BD93004&tag=latest&apikey=1WN7M3DNF6QMEIC9AATVQ2BR5SN4VKJBM7
                var tokelValue = tokenAddress[i].TokenQuantity / Math.pow(10, tokenAddress[i].TokenDivisor);
                sumToken += tokelValue * singlePrice;
                tokelValue = eval(tokelValue.toFixed(4));
                var transactionArray = [];
                var transactionsAmountin = 0;
                var transactionsAmountout = 0;
                var reflectionGain = 0;
                var investe = 0;
                var payouts = 0;
                var url = `https://api.bscscan.com/api?module=account&action=tokentx&contractaddress=${tokenAddress[i].TokenAddress}&address=${curAddress}&page=1&offset=100&sort=asc&apikey=1WN7M3DNF6QMEIC9AATVQ2BR5SN4VKJBM7`;
                await fetch(url).then(response => response.json())
                    .then(data => {
                        transactionArray = data.result;
                    });
                for (var j = 0; j < transactionArray.length; j++) {
                    var time_to_show = transactionArray[j].timeStamp; // unix timestamp in seconds
                    var t = new Date(time_to_show * 1000);
                    var formatted = t.getFullYear() + '-' + (t.getMonth() + 1) + '-' + (t.getDate() - 1);
                    var fromTransaction = '';
                    fromTransaction = transactionArray[j].from;
                    var toTransaction = '';
                    toTransaction = transactionArray[j].to;
                    var datePrice = 0;
                    var priceUrl = `https://api.bscscan.com/api?module=stats&action=bnbdailyprice&startdate=${formatted}&enddate=${formatted}&sort=asc&apikey=1WN7M3DNF6QMEIC9AATVQ2BR5SN4VKJBM7`;
                    await fetch(priceUrl).then(response => response.json())
                        .then(data => {
                            if (data.status == 1) {
                                datePrice = data.result[0].value;
                            }
                            else {
                                datePrice = 0;
                            }
                        });
                    if (strCompare(curAddress.toLowerCase(), toTransaction)) {
                        transactionsAmountin += transactionArray[j].value / Math.pow(10, tokenAddress[i].TokenDivisor);
                        transactionsAmountin = eval(transactionsAmountin.toFixed(4));
                        var oneInvest = 0;
                        var transactionHashurl = `https://api.bscscan.com/api?module=account&action=txlistinternal&txhash=${transactionArray[j].hash}&apikey=1WN7M3DNF6QMEIC9AATVQ2BR5SN4VKJBM7`;
                        await fetch(transactionHashurl).then(response => response.json())
                            .then(data => {
                                if (data.status == 1) {
                                    oneInvest = data.result[0].value * Math.pow(10, -18);
                                }
                                else {
                                    onePayout = 0;
                                }
                            });
                        var dateInvvalue = oneInvest * datePrice;
                        totalInv += dateInvvalue;
                        investe += dateInvvalue;
                    }
                    if (strCompare(curAddress.toLowerCase(), fromTransaction)) {
                        transactionsAmountout += transactionArray[j].value * (10 / 9) / Math.pow(10, tokenAddress[i].TokenDivisor);
                        transactionsAmountout = eval(transactionsAmountout.toFixed(4));
                        var onePayout = 0;
                        var transactionHashurl = `https://api.bscscan.com/api?module=account&action=txlistinternal&txhash=${transactionArray[j].hash}&apikey=1WN7M3DNF6QMEIC9AATVQ2BR5SN4VKJBM7`;
                        await fetch(transactionHashurl).then(response => response.json())
                            .then(data => {
                                if (data.status == 1) {
                                    onePayout = data.result[0].value * Math.pow(10, -18);
                                }
                                else {
                                    onePayout = 0;
                                }
                            });
                        var datePayvalue = onePayout * datePrice;
                        payouts += datePayvalue;
                        totalPay += datePayvalue
                    }
                }
                wfTran += transactionsAmountin * singlePrice;
                setWftransaction(wfTran);
                setTotalinvest(eval(totalInv.toFixed(6)));
                setTotalpayout(eval(totalPay.toFixed(6)));
                reflectionGain = tokelValue + transactionsAmountout - transactionsAmountin;
                earningsReflection += reflectionGain * singlePrice;
                earningsReflection = eval(earningsReflection.toFixed(4));
                reflectionGain = eval(reflectionGain.toFixed(4));
                if (tokelValue * singlePrice != 0) {
                    childOption = [tokenName, tokelValue * singlePrice];
                    farentOption.push(childOption);
                }
                setEarn(earningsReflection);
                var assVla = tokelValue * singlePrice;
                var tokennameSymbol = tokenName + "(" + tokenAddress[i].TokenSymbol + ")";
                var deadtok = 4;
                if (tokenType == 1) {
                    deadtok = 3;
                }
                allTokens.push({ types: tokenType, deadtoks: deadtok, sortVal: assVla, currentName: tokenName, name: tokennameSymbol, balance: tokelValue, amountIn: transactionsAmountin, amountOut: transactionsAmountout, rflectGain: reflectionGain, icons: tokenLogo, invest: investe, payout: payouts, id: i, price: singlePrice });
            } catch {
                allTokens.push([]);
                break;
            }
            assetsValue(i + 1);
            if (i % 3 == 0) {
                setOptions({
                    ...chartOptions, series: [{
                        name: 'Token Value',
                        data: farentOption
                    }]
                }
                );
                allTokens.sort(function (x, y) {
                    return y.sortVal - x.sortVal;
                });
                sumToken = eval(sumToken.toFixed(4));
                var tokenIcon = [];
                var curtokenName = [];
                var tabledata = [];
                for (var k = 0; k < allTokens.length; k++) {
                    tokenIcon[k] = allTokens[k].types;
                    curtokenName[k] = allTokens[k].currentName;
                    tabledata.push({ star: allTokens[k].types, img: allTokens[k].icons, name: allTokens[k].name, Price: allTokens[k].price, Holdings: allTokens[k].balance, Value: allTokens[k].price * allTokens[k].balance });
                }
                setdatatable(tabledata);
                setCurrentTokenName(curtokenName);
                setCurrentToken(tokenIcon);
                setAllTokens(allTokens);
                sumValue(sumToken);
            }
        }
        setOptions({
            ...chartOptions, series: [{
                name: 'Token Value',
                data: farentOption
            }]
        }
        );
        allTokens.sort(function (x, y) {
            return y.sortVal - x.sortVal;
        });
        sumToken = eval(sumToken.toFixed(4));
        var tokenIcon = [];
        var curtokenName = [];
        var tabledata = [];
        for (var m = 0; m < allTokens.length; m++) {
            tokenIcon[m] = allTokens[m].types;
            curtokenName[m] = allTokens[m].currentName;
            tabledata.push({ star: allTokens[m].types, img: allTokens[m].icons, name: allTokens[m].name, Price: allTokens[m].price, Holdings: allTokens[m].balance, Value: allTokens[m].price * allTokens[m].balance });
        }
        setCurrentToken(tokenIcon);
        setCurrentTokenName(curtokenName);
        setdatatable(tabledata);
        setAllTokens(allTokens);
        sumValue(sumToken);
        toggleLoading(false);
    }, [curAddress]);

    useEffect(() => {
        let interval = null;
        if (!isLoading) {
            interval = setInterval(async () => {
                var allTokens = [];
                var deadTokens = [];
                var sumToken = 0;
                var totalInv = 0;
                var totalPay = 0;
                var earningsReflection = 0;
                var wfTran = 0;
                var deatCount = 0;
                if (!curAddress) return;
                var bnbpriceArray = 0;
                var bnbUrl = `https://api.bscscan.com/api?module=stats&action=bnbprice&apikey=1WN7M3DNF6QMEIC9AATVQ2BR5SN4VKJBM7`;
                await fetch(bnbUrl).then(response => response.json())
                    .then(data => {
                        bnbpriceArray = data.result.ethusd;
                    });
                setbnbPrice(bnbpriceArray);
                tokenAddress = [];
                var Tokenurl = `https://api.bscscan.com/api?module=account&action=addresstokenbalance&address=${curAddress}&page=1&offset=100&apikey=1WN7M3DNF6QMEIC9AATVQ2BR5SN4VKJBM7`;
                await fetch(Tokenurl).then(response => response.json())
                    .then(data => {
                        if (data.status == 0) return;
                        tokenAddress = data.result;
                    });
                for (var i = 0; i < tokenAddress.length; i++) {
                    if (tokenAddress[i].TokenName.toLowerCase().includes('io') || tokenAddress[i].TokenAddress == '0xd22202d23fe7de9e3dbe11a2a88f42f4cb9507cf' || tokenAddress[i].TokenAddress == '0xb16600c510b0f323dee2cb212924d90e58864421' || tokenAddress[i].TokenAddress == '0x5190b01965b6e3d786706fd4a999978626c19880' || tokenAddress[i].TokenAddress == '0x0df62d2cd80591798721ddc93001afe868c367ff') {
                        continue;
                    }
                    var tokenType = 0;
                    try {
                        try {
                            var priceArray = await router_contract.methods.getAmountsOut(1000000000000000, [tokenAddress[i].TokenAddress, WBNB]).call();
                            var singlePrice = parseInt(priceArray[1]) / 1000000000000000;
                            singlePrice = singlePrice * bnbpriceArray;
                            singlePrice = singlePrice * Math.pow(10, (tokenAddress[i].TokenDivisor - 18));
                        } catch (e) {
                            var singlePrice = 0;
                            if (tokenAddress[i].TokenAddress.toLowerCase() == "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c") {
                                singlePrice = bnbpriceArray;
                            }
                            else {
                                deatCount++;
                                deadTokens.push({ name: tokenAddress[i].TokenName });
                                tokenType = 1;
                            }
                        }
                        // if (tokenType != 1) {
                        //     try {
                        //         await router_contract.methods.getAmountsOut(1000000000000000, [tokenAddress[i].TokenAddress, BUSD]).call();
                        //     } catch (e) {
                        //         try {
                        //             await router_contract.methods.getAmountsOut(1000000000000000, [tokenAddress[i].TokenAddress, USDT]).call();
                        //         } catch (e) {
                        //             if (tokenAddress[i].TokenAddress.toLowerCase() != "0x55d398326f99059ff775485246999027b3197955" && tokenAddress[i].TokenAddress.toLowerCase() != "0xe9e7cea3dedca5984780bafc599bd69add087d56") {
                        //                 singlePrice = 0;
                        //                 deatCount++;
                        //                 deadTokens.push({ name: tokenAddress[i].TokenName });
                        //                 tokenType = 1;
                        //             }
                        //         }
                        //     }
                        // }
                        var tokenName = tokenAddress[i].TokenName;
                        var tokenLogo = '';
                        tokenLogo = await findLogo(tokenAddress[i].TokenAddress, defaultAddress);
                        //ctoken value API
                        //https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x8597ba143ac509189e89aab3ba28d661a5dd9830&address=0x71e2153fc76d57c7bc4E741118698bEE6BD93004&tag=latest&apikey=1WN7M3DNF6QMEIC9AATVQ2BR5SN4VKJBM7
                        var tokelValue = tokenAddress[i].TokenQuantity / Math.pow(10, tokenAddress[i].TokenDivisor);
                        sumToken += tokelValue * singlePrice;
                        tokelValue = eval(tokelValue.toFixed(4));
                        var transactionArray = [];
                        var transactionsAmountin = 0;
                        var transactionsAmountout = 0;
                        var reflectionGain = 0;
                        var investe = 0;
                        var payouts = 0;
                        var url = `https://api.bscscan.com/api?module=account&action=tokentx&contractaddress=${tokenAddress[i].TokenAddress}&address=${curAddress}&page=1&offset=100&sort=asc&apikey=1WN7M3DNF6QMEIC9AATVQ2BR5SN4VKJBM7`;
                        await fetch(url).then(response => response.json())
                            .then(data => {
                                transactionArray = data.result;
                            });
                        for (var j = 0; j < transactionArray.length; j++) {
                            var time_to_show = transactionArray[j].timeStamp; // unix timestamp in seconds
                            var t = new Date(time_to_show * 1000);
                            var formatted = t.getFullYear() + '-' + (t.getMonth() + 1) + '-' + (t.getDate() - 1);
                            var fromTransaction = '';
                            fromTransaction = transactionArray[j].from;
                            var toTransaction = '';
                            toTransaction = transactionArray[j].to;
                            var datePrice = 0;
                            var priceUrl = `https://api.bscscan.com/api?module=stats&action=bnbdailyprice&startdate=${formatted}&enddate=${formatted}&sort=asc&apikey=1WN7M3DNF6QMEIC9AATVQ2BR5SN4VKJBM7`;
                            await fetch(priceUrl).then(response => response.json())
                                .then(data => {
                                    if (data.status == 1) {
                                        datePrice = data.result[0].value;
                                    }
                                    else {
                                        datePrice = 0;
                                    }
                                });
                            if (strCompare(curAddress.toLowerCase(), toTransaction)) {
                                transactionsAmountin += transactionArray[j].value / Math.pow(10, tokenAddress[i].TokenDivisor);
                                transactionsAmountin = eval(transactionsAmountin.toFixed(4));
                                var oneInvest = 0;
                                var transactionHashurl = `https://api.bscscan.com/api?module=account&action=txlistinternal&txhash=${transactionArray[j].hash}&apikey=1WN7M3DNF6QMEIC9AATVQ2BR5SN4VKJBM7`;
                                await fetch(transactionHashurl).then(response => response.json())
                                    .then(data => {
                                        if (data.status == 1) {
                                            oneInvest = data.result[0].value * Math.pow(10, -18);
                                        }
                                        else {
                                            onePayout = 0;
                                        }
                                    });
                                var dateInvvalue = oneInvest * datePrice;
                                totalInv += dateInvvalue;
                                investe += dateInvvalue;
                            }
                            if (strCompare(curAddress.toLowerCase(), fromTransaction)) {
                                transactionsAmountout += transactionArray[j].value * (10 / 9) / Math.pow(10, tokenAddress[i].TokenDivisor);;
                                transactionsAmountout = eval(transactionsAmountout.toFixed(4));
                                var onePayout = 0;
                                var transactionHashurl = `https://api.bscscan.com/api?module=account&action=txlistinternal&txhash=${transactionArray[j].hash}&apikey=1WN7M3DNF6QMEIC9AATVQ2BR5SN4VKJBM7`;
                                await fetch(transactionHashurl).then(response => response.json())
                                    .then(data => {
                                        if (data.status == 1) {
                                            onePayout = data.result[0].value * Math.pow(10, -18);
                                        }
                                        else {
                                            onePayout = 0;
                                        }
                                    });
                                var datePayvalue = onePayout * datePrice;
                                payouts += datePayvalue;
                                totalPay += datePayvalue;
                            }
                        }
                        wfTran += transactionsAmountin * singlePrice;
                        reflectionGain = tokelValue + transactionsAmountout - transactionsAmountin;
                        earningsReflection += reflectionGain * singlePrice;
                        earningsReflection = eval(earningsReflection.toFixed(4));
                        reflectionGain = eval(reflectionGain.toFixed(4));
                        var assVla = tokelValue * singlePrice;
                        var tokennameSymbol = tokenName + "(" + tokenAddress[i].TokenSymbol + ")";
                        var deadtok = 4;
                        if (tokenType == 1) {
                            deadtok = 3;
                        }
                        allTokens.push({ types: tokenType, deadtoks: deadtok, sortVal: assVla, currentName: tokenName, name: tokennameSymbol, balance: tokelValue, amountIn: transactionsAmountin, amountOut: transactionsAmountout, rflectGain: reflectionGain, icons: tokenLogo, invest: investe, payout: payouts, id: i, price: singlePrice });
                    } catch {
                        allTokens.push([]);
                        break;
                    }
                    sumToken = eval(sumToken.toFixed(4));
                }
                assetsValue(tokenAddress.length);
                var today = new Date().toLocaleString();
                setDate(today);
                setWftransaction(wfTran);
                setTotalinvest(eval(totalInv.toFixed(6)));
                setTotalpayout(eval(totalPay.toFixed(6)));
                setEarn(earningsReflection);
                allTokens.sort(function (x, y) {
                    return y.sortVal - x.sortVal;
                });
                setDeattoken(deatCount);
                setDeadAry(deadTokens);
                for (var k = 0; k < allTokens.length; k++) {
                    for (var l = 0; l < currentTokenname.length; l++) {
                        if (allTokens[k].currentName == currentTokenname[l]) {
                            allTokens[k].types = currentToken[l];
                        }
                    }
                }
                var tokenIcon = [];
                var curtokenName = [];
                var tabledata = [];
                for (var m = 0; m < allTokens.length; m++) {
                    tokenIcon[m] = allTokens[m].types;
                    curtokenName[m] = allTokens[m].currentName;
                    if (allTokens[m].types != showtoken && allTokens[m].deadtoks != showtoken) {
                        tabledata.push({ star: allTokens[m].types, img: allTokens[m].icons, name: allTokens[m].name, Price: allTokens[m].price, Holdings: allTokens[m].balance, Value: allTokens[m].price * allTokens[m].balance });
                    }
                }
                setCurrentToken(tokenIcon);
                setCurrentTokenName(curtokenName);
                setdatatable(tabledata);
                setAllTokens(allTokens);
                var farentOption = [];
                for (var i = 0; i < allTokens.length; i++) {
                    var childOption = [];
                    if (allTokens[i].types == 0 && allTokens[i].balance * allTokens[i].price != 0) {
                        childOption = [allTokens[i].currentName, allTokens[i].balance * allTokens[i].price];
                        farentOption.push(childOption);
                    }
                }
                setOptions({
                    ...chartOptions, series: [{
                        name: 'Token Value',
                        data: farentOption
                    }]
                }
                );
                sumValue(sumToken);
            }, 200000);
        } else if (isLoading) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [curAddress, isLoading, tokenAry, currentToken, currentTokenname, showtoken]);
    function strCompare(str1, str2) {
        return str1 === str2;
    }
    function findLogo(toAddress, defAddress) {
        var flag = false;
        var tokLogo
        for (var i = 0; i < defAddress.length; i++) {
            if (toAddress.toLowerCase() == defAddress[i].toLowerCase()) {
                flag = true;
                tokLogo = `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/${defAddress[i]}/logo.png`;
            }
        }
        if (flag) {
            return tokLogo;
        }
        else {
            return 'no';
        }
    }
    return (
        <ThemeContext.Consumer>
            {({ theme }) => (
                <div id="homepage" className={theme} style={{ width: '100vw', height: '100vh', }}>
                    <div className="row" style={{    position: 'relative'}}>
                    <div class="logo-bg"></div>
                        <div className="col-11 logo logo-center" >
                            <img className="logoImg" src={logo} style={{ display: 'block' }} />
                        </div>
                       
                    </div>
                    <br /> <br />
                   <section
                   className="main-search-section"
                   >
                       <div>
                       <FormControl
                                type="search"
                                placeholder="Enter Wallet Address(Binance Smart Chain)"
                                className="wallet-input"
                                aria-label="Search"
                                value={curAddress}
                                // onKeyPress={onKeyUp}
                                onChange={onChangeAddressInput}
                            />
                         
                            <div className="button-group">
                                <button id={theme} className="btn scorp-btn  col-6" onClick={() => onreloading()}>Refresh</button>
                                <button id={theme} className="btn btn-secondary  col-6" onClick={() => onaddAddress()}>Add Address</button>
                           
                        </div>
                        <div className="address-section">
                            <Form.Control
                                as="select"
                                className="address-drop-down"
                                onChange={(event) => onchangeList(event.target.value)}
                                value={curAddresslist}
                            >
                                {
                                    addressList.map((obj, key) => {
                                        return <option value={obj} style={{
                                            color:"#000"
                                        }}>{obj}</option>
                                    }
                                    )
                                }
                            </Form.Control>
                        </div>
                       </div>
                   
                   </section>
                    <div className="container-fluid" style={{ position: "relative" }}>
                        <section className="flex-center">
                        {
                            isLoading ? <span className="asset-processing">{"Assets processing " + ProcessingValue}
                            </span> : <></>
                        }</section>
                        {
                            isLoading ? <div id="spinner" className="row justify-content-center align-items-center pt-5" 
                            style={{ minHeight: '40vh' }}>
                            <div class="hm-spinner" ></div>
                            </div> : <></>
                        }
                        <br />
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
                                                            <span className="p-1 list-key"><span className="bullet-arr">&#8651;</span>{"Wallet value"}</span>
                                                        </div>
                                                        <div class="data-row">
                                                            <span  className="p-1 list-key"><span className="bullet-arr">&#8651;</span>{"Number of assets "}</span>
                                                        </div>
                                                        <div class="data-row">
                                                            <span className="p-1 list-key"><span className="bullet-arr">&#8651;</span>{"Dead tokens"}</span>
                                                        </div>
                                                        <div class="data-row">
                                                            <span  className="p-1 list-key"><span className="bullet-arr">&#8651;</span>{"Wallet value from Tr."}</span>
                                                        </div>
                                                        <div class="data-row">
                                                            <span className="p-1 list-key"><span className="bullet-arr">&#8651;</span>{"Earnings from Ref."}</span>
                                                        </div>
                                                        <div class="data-row">
                                                            <span  className="p-1 list-key"><span className="bullet-arr">&#8651;</span>{"Total invested"}</span>
                                                        </div>
                                                        <div class="data-row">
                                                            <span className="p-1 list-key"><span className="bullet-arr">&#8651;</span>{"Total payed out"}</span>
                                                        </div>
                                                        <div class="data-row">
                                                            <span  className="p-1 list-key"><span className="bullet-arr">&#8651;</span>{"Wallet result"}</span>
                                                        </div>
                                                        <div class="data-row">
                                                            <span className="p-1 list-key-date"> {date} </span>
                                                        </div>
                                                    </div>
                                                    <div className="data col-5 rightTotal" >
                                                        <div class="data-row">
                                                            <span className="p-1">{eval(walletValue) + "$"}</span>
                                                        </div>
                                                        <div class="data-row">
                                                            <span  className="p-1">{tokenAry.length - deadtokenCount}</span>
                                                        </div>
                                                        <div class="data-row">
                                                            <span className="p-1">{deadtokenCount}</span>
                                                        </div>
                                                        <div class="data-row">
                                                            <span  className="p-1">{eval((wfTransaction).toFixed(4)) + "$"}</span>
                                                        </div>
                                                        <div class="data-row">
                                                            <span className="p-1">{earnFlection + "$"}</span>
                                                        </div>
                                                        <div class="data-row">
                                                            <span  className="p-1">{totalInvest + "$"}</span>
                                                        </div>
                                                        <div class="data-row">
                                                            <span className="p-1">{totalPayout + "$"}</span>
                                                        </div>
                                                        <div class="data-row">
                                                            <span  className="p-1">{eval((walletValue + totalPayout - totalInvest).toFixed(4)) + "$"}</span>
                                                        </div>
                                                    </div>
                                                    <section className="full-form">
                                                        <small>
                                                        Tr: Transactions <br />
                                                        Ref: Reflection
                                                        </small>
                                                    </section>
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
                       <br />
                      
      {tokenAry.length > 0 && (
 <section className="token-list-section">
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
              <MuiThemeProvider theme={muitheme}>
                <MUIDataTable
                  title={"BNB/" + bnbPrice}
                  data={datatable}
                  columns={columns}
                  options={options}
                />
              </MuiThemeProvider>
            </div>
          </div> 
          <div className="col-4 detail-token">
            {showtokenFlag ? (
              <div className="row showdetail-block">
                <div className="row detailbackground">
                  <span className="p-1 tokenTitle">
                    {detailToken.name +
                      eval(
                        (detailToken.price * detailToken.balance).toFixed(4)
                      ) +
                      "$"}
                  </span>
                  <div className="data col-6 leftInside">
                    <div class="data-row">
                      <span className="p-1"><span className="bullet-arr">&#8651;</span> {"Value of asset "}</span>
                    </div>
                    <div class="data-row">
                      <span className="p-1"><span className="bullet-arr">&#8651;</span> {"Price"}</span>
                    </div>
                    <div class="data-row">
                      <span className="p-1"><span className="bullet-arr">&#8651;</span> {"Current amount"}</span>
                    </div>
                    <div class="data-row">
                      <span className="p-1"><span className="bullet-arr">&#8651;</span> {"Transactions in"}</span>
                    </div>
                    <div class="data-row">
                      <span className="p-1"><span className="bullet-arr">&#8651;</span> {"Transactions out"}</span>
                    </div>
                    <div class="data-row">
                      <span className="p-1"><span className="bullet-arr">&#8651;</span> {"Reflection gain"}</span>
                    </div>
                    <div class="data-row">
                      <span className="p-1"><span className="bullet-arr">&#8651;</span> {"Value Without Ref."}</span>
                    </div>
                    <div class="data-row">
                      <span className="p-1"><span className="bullet-arr">&#8651;</span> {"Value from Ref."}</span>
                    </div>
                    <div class="data-row">
                      <span className="p-1"><span className="bullet-arr">&#8651;</span> {"Invested"}</span>
                    </div>
                    <div class="data-row">
                      <span className="p-1"><span className="bullet-arr">&#8651;</span> {"PayedOut"}</span>
                    </div>
                    <div class="data-row">
                      <span className="p-1"><span className="bullet-arr">&#8651;</span> {"Result"}</span>
                    </div>
                    <div class="data-row">
                      <span className="p-1"><span className="bullet-arr">&#8651;</span> {"Liquid pools:"}</span>
                    </div>
                  </div>
                  <div className="data col-6 rightInside">
                    <div class="data-row">
                      <span className="p-1">
                        {eval(
                          (detailToken.price * detailToken.balance).toFixed(4)
                        ) + "$"}
                      </span>
                    </div>
                    <div class="data-row">
                      <span className="p-1">{(detailToken.price).toFixed(12) + "$"}</span>
                    </div>
                    <div class="data-row">
                      <span className="p-1">{detailToken.balance}</span>
                    </div>
                    <div class="data-row">
                      <span className="p-1">{detailToken.amountIn}</span>
                    </div>
                    <div class="data-row">
                      <span className="p-1">{detailToken.amountOut}</span>
                    </div>
                    <div class="data-row">
                      <span className="p-1">{detailToken.rflectGain}</span>
                    </div>
                    {detailToken.rflectGain < detailToken.balance ? (
                      <div class="data-row">
                        <span className="p-1">
                          {eval(
                            (
                              detailToken.price * detailToken.balance -
                              detailToken.rflectGain * detailToken.price
                            ).toFixed(4)
                          ) + "$"}
                        </span>
                      </div>
                    ) : (
                      <div class="data-row">
                        <span className="p-1">
                          {eval(
                            (detailToken.price * detailToken.balance).toFixed(4)
                          ) + "$"}
                        </span>
                      </div>
                    )}
                    {detailToken.rflectGain < detailToken.balance ? (
                      <div class="data-row">
                        <span className="p-1">
                          {eval(
                            (
                              detailToken.rflectGain * detailToken.price
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
                      <span className="p-1">{detailToken.invest + "$"}</span>
                    </div>
                    <div class="data-row">
                      <span className="p-1">{detailToken.payout + "$"}</span>
                    </div>
                    <div class="data-row">
                      <span className="p-1">
                        {eval(
                          (
                            detailToken.payout +
                            detailToken.price * detailToken.balance -
                            detailToken.invest
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
        </section>
      )}
    
   
                    </div>
                    {
       tokenAry.length>0?(
        <footer>
        Scorpion Finance { new Date().getFullYear() }
    </footer>
       ):(<></>)
   }
                </div >
            )
            }
        </ThemeContext.Consumer >
    )
}