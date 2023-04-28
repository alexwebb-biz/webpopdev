import { Component } from "react";
import './styles/button.css';
import React from "react";
import { Link } from 'react-router-dom';
import props from 'react';

const purchasePage = "www.heroku.app";

function PurchaseBtn(props) {
        return (
            <div>
               <button data-testid="buttonTestOne" type={props.buttonType} className={props.buttonClass} href={props.buttonLink}>{props.buttonText}</button>
            </div>
        )
}

export default PurchaseBtn;