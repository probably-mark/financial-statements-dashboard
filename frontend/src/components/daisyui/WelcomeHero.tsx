import React from 'react';
import { Link } from 'react-router-dom';

const bold_grey = "text-grey-900 font-bold";

function WelcomeHero() {
    return (
        <div
            className="hero min-h-screen"
            style={{ backgroundImage: `url('/Seoul-nightscape.png')` }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-yellow-100 text-center">
                <div className="w-3/4 bg-cyan-700 bg-opacity-25 p-8 rounded-xl">
                    <h1 className="mb-5 text-5xl font-bold">Thanks for checking this page out!</h1>
                    <p className="mb-2">
                        This is a full-stack project built by me (Mark McAvoy). 
                        The goal of this project is to make a dashboard that visualizes financial statements 
                        on the front-end, a back-end that has APIs that communicate with the Postgres database, 
                        and runs any functions needed to compile disparate financial data (such as income from 
                        subscriptions, marketing expenses, depreciation and amortization) into one clean view.
                    </p>
                    <p className="mb-2">Here is the full tech stack:</p>
                    <ul>
                      <li><span class={bold_grey}>TypeScript / React</span>:  For the front-end application</li>
                      <li><span class={bold_grey}>ApexCharts</span>: For the plots in the dashboard</li>
                      <li><span class={bold_grey}>Java / J2EE</span>: For the backend APIs</li>
                      <li><span class={bold_grey}>PostgreSQL</span>: For the database</li>
                    </ul>
                    <Link to="/dashboard" className="btn btn-primary mt-4">Onto the Financial Statements Dashboard</Link>
                </div>
            </div>
        </div>
    );
};

export default WelcomeHero;
